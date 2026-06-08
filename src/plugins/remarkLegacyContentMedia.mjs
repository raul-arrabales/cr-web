const CAPTION_OPEN_RE = /^\s*\[caption\b[^\]]*\]\s*$/i;
const CAPTION_CLOSE_RE = /\s*\[\/caption\]\s*$/i;
const HTML_IMG_RE = /^\s*<img\b[\s\S]*\/?>\s*$/i;

function isText(node) {
  return node?.type === "text";
}

function isWhitespaceText(node) {
  return isText(node) && !node.value.trim();
}

function isHtmlImage(node) {
  return node?.type === "html" && HTML_IMG_RE.test(node.value);
}

function getMeaningfulChildren(node) {
  return node.children.filter((child) => !isWhitespaceText(child));
}

function isLinkedHtmlImage(node) {
  if (node?.type !== "link") {
    return false;
  }

  const children = getMeaningfulChildren(node);
  return children.length === 1 && isHtmlImage(children[0]);
}

function isStandaloneMedia(node) {
  return isHtmlImage(node) || isLinkedHtmlImage(node);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

function mediaNodeToHtml(node) {
  if (isHtmlImage(node)) {
    return node.value.trim();
  }

  if (isLinkedHtmlImage(node)) {
    const [imageNode] = getMeaningfulChildren(node);
    const attributes = [`href="${escapeAttribute(node.url)}"`];

    if (node.title) {
      attributes.push(`title="${escapeAttribute(node.title)}"`);
    }

    return `<a ${attributes.join(" ")}>${imageNode.value.trim()}</a>`;
  }

  return "";
}

function createFigureHtmlNode(mediaNode, captionText = "") {
  const mediaHtml = mediaNodeToHtml(mediaNode);
  const captionHtml = captionText ? `<figcaption>${escapeHtml(captionText)}</figcaption>` : "";

  return {
    type: "html",
    value: `<figure class="content-media">${mediaHtml}${captionHtml}</figure>`,
  };
}

function extractCaptionFigure(paragraphNode) {
  const meaningfulChildren = getMeaningfulChildren(paragraphNode);

  if (meaningfulChildren.length < 3) {
    return null;
  }

  const [openingNode, mediaNode, ...tailNodes] = meaningfulChildren;

  if (!isText(openingNode) || !CAPTION_OPEN_RE.test(openingNode.value) || !isStandaloneMedia(mediaNode)) {
    return null;
  }

  if (tailNodes.some((node) => !isText(node))) {
    return null;
  }

  const trailingText = tailNodes.map((node) => node.value).join("");

  if (!CAPTION_CLOSE_RE.test(trailingText)) {
    return null;
  }

  const captionText = trailingText.replace(CAPTION_CLOSE_RE, "").trim();
  return createFigureHtmlNode(mediaNode, captionText);
}

function isMediaOnlyParagraph(paragraphNode) {
  const meaningfulChildren = getMeaningfulChildren(paragraphNode);
  return meaningfulChildren.length === 1 && isStandaloneMedia(meaningfulChildren[0]);
}

function isLeadingMediaParagraph(paragraphNode) {
  const meaningfulChildren = getMeaningfulChildren(paragraphNode);

  if (meaningfulChildren.length < 2 || !isStandaloneMedia(meaningfulChildren[0])) {
    return false;
  }

  return meaningfulChildren.slice(1).some((node) => {
    if (isText(node)) {
      return Boolean(node.value.trim());
    }

    return true;
  });
}

function addParagraphClass(node, className) {
  const existing = node.data?.hProperties?.className;
  const classNames = Array.isArray(existing)
    ? existing
    : typeof existing === "string"
      ? existing.split(/\s+/).filter(Boolean)
      : [];

  if (!classNames.includes(className)) {
    classNames.push(className);
  }

  node.data = {
    ...(node.data ?? {}),
    hProperties: {
      ...(node.data?.hProperties ?? {}),
      className: classNames,
    },
  };
}

export default function remarkLegacyContentMedia() {
  return function transformer(tree) {
    for (const node of tree.children) {
      if (isHtmlImage(node)) {
        Object.assign(node, createFigureHtmlNode(node));
        continue;
      }

      if (node.type !== "paragraph") {
        continue;
      }

      const captionFigure = extractCaptionFigure(node);

      if (captionFigure) {
        Object.assign(node, captionFigure);
        continue;
      }

      if (isMediaOnlyParagraph(node)) {
        const [mediaNode] = getMeaningfulChildren(node);
        Object.assign(node, createFigureHtmlNode(mediaNode));
        continue;
      }

      if (isLeadingMediaParagraph(node)) {
        addParagraphClass(node, "media-leading-paragraph");
      }
    }
  };
}
