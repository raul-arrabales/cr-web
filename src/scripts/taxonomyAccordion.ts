export function initTaxonomyAccordions(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>("[data-taxonomy-browsers]").forEach((group) => {
    const buttons = group.querySelectorAll<HTMLElement>("[data-taxonomy-toggle]");
    const panels = group.querySelectorAll<HTMLElement>("[data-taxonomy-panel]");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const taxonomy = button.getAttribute("data-taxonomy-toggle");
        const shouldOpen = button.getAttribute("aria-expanded") !== "true";

        buttons.forEach((otherButton) => {
          otherButton.setAttribute("aria-expanded", "false");
        });

        panels.forEach((panel) => {
          panel.hidden = true;
        });

        if (!shouldOpen || !taxonomy) {
          return;
        }

        button.setAttribute("aria-expanded", "true");

        const activePanel = group.querySelector<HTMLElement>(`[data-taxonomy-panel="${taxonomy}"]`);

        if (activePanel) {
          activePanel.hidden = false;
        }
      });
    });
  });
}
