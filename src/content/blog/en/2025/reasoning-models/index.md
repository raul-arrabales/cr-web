---
title: "Reasoning Models"
date: 2025-02-09
categories: 
  - "artificial-intelligence"
  - "genai"
tags: 
  - "cot"
  - "deepseek"
  - "genai"
  - "llm"
  - "o1"
  - "o3"
  - "openai"
  - "reasoning-models"
  - "tot"
---

<img src="/legacy-images/images/CoT.png" alt="" />

_Conscious Robots Series on_  
 **AI at Every Level: From Beginner to Pro**

* * *

## _**Reasoning Models**_  
(_explained at four levels of depth_)

- \[1\] [Basic level](#basic) (any professional)

- \[2\] [Intermediate level](#intermediate) (business analyst)

- \[3\] [Technical level](#technical) (data/AI analyst)

- \[4\] [Advanced level](#advanced) (data scientists, researchers)

- \[+\] [Recent developments](#recent) (AI enthusiasts)

- \[+\] [Example / Use Case](#example) (any user)

* * *

### **✨ For Those Who Think AI Is Magic** 

_**(Basic level – any professional interested in AI)**_

Imagine you have a house with solar panels, and you want to know how much electricity they will generate tomorrow. You could guess based on how sunny it was today, but an AI could do something even smarter. It might decide to look at **weather forecasts, past energy production, and even the time of year** to predict how much power your panels will produce.

**Reasoning models in AI** work this way: they don’t just repeat what they’ve seen during their training—they **think through problems** and make sense of new situations, they **analyze different factors and** produce smarter outputs.

If you've never used a reasoning model before, [see below for a real-life example](#example) (calculating solar power generation).

* * *

### **🔎 For Those Who Want to Understand Without Coding** 

_**(Intermediate level – business analysts)**_

In Generative AI, reasoning models are systems that don’t just predict the next word in a sentence—they **analyze, infer, and draw conclusions**. Think of them as the difference between a search engine that fetches answers and a consultant who understands your problem before giving advice. These models use techniques like **chain-of-thought** **(****CoT****)** **reasoning** and **prompt engineering** to break down complex problems step by step, making them useful for business decision-making, customer support, and process automation.

**Important note****:** If you were accustomed to using CoT prompting to enhance the output of older models like GPT-4o, be aware that applying the same approach to a reasoning model like o3-mini could have the opposite effect (continue reading to learn why, also check [Prompt Engineering for OpenAI’s O1 and O3-mini Reasoning Models | Microsoft Community Hub](https://techcommunity.microsoft.com/blog/azure-ai-services-blog/prompt-engineering-for-openai%E2%80%99s-o1-and-o3-mini-reasoning-models/4374010)).

* * *

### **💻 For Those Who Play with Data but Not Neural Networks**

_**(Technical level – data analysts, software engineers)**_

At a deeper level, reasoning models in GenAI use **multi-step inference, few-shot learning, and prompt-based decomposition** to tackle problems that require logic and decision-making. Unlike traditional LLMs that primarily rely on statistical text generation, reasoning-augmented models apply structured methods like:

- **Chain of Thought (****CoT****)**: Breaking problems into logical steps.

- **Self-Consistency**: Sampling multiple responses and selecting the most likely answer.

- **Tree of Thought (****ToT****)**: Exploring multiple solution paths before deciding on the best one.  
     These techniques help LLMs move beyond regurgitation and into **real problem-solving**.

* * *

###  **🚀 For Those Who Dream in AI Papers**

_**(Advanced level – AI researchers, data scientists)**_

The evolution of reasoning models in GenAI is shifting from naive autoregressive token prediction to **hybrid neuro-symbolic approaches**, incorporating:

- **Graph-based reasoning** (e.g., knowledge graphs + LLMs for structured decision-making).

- **Tool-augmented reasoning** (e.g., LLMs invoking APIs, running code, or querying databases).

- **Reinforcement learning from human feedback (RLHF)** to improve logical coherence.  
     Ongoing research explores how **transformer architectures** can be **self-reflective** in logical deduction, moving towards more interpretable and generalizable AI reasoning systems.

Let’s take a deep look at the advanced techniques in Reasoning Models:

**Chain-of-Thought (****CoT****) Prompting:** CoT prompting encourages models to generate intermediate reasoning steps before arriving at a conclusion. This method enhances the model's ability to handle complex tasks by structuring the problem-solving process. For instance, in mathematical problem-solving, CoT prompting guides the model to outline each step methodically, leading to more accurate results (see [Reasoning with Large Language Models, a Survey](https://arxiv.org/html/2407.11511v1)).

**Tree-of-Thought (****ToT****) Prompting:** Expanding upon CoT, ToT prompting allows models to explore multiple reasoning paths in a tree-like structure. This approach enables backtracking and evaluation of various solution strategies, improving the model's problem-solving depth and flexibility.

**Self-Consistency Decoding:** This technique involves generating multiple reasoning paths independently for a single prompt and selecting the most consistent answer. By reducing reliance on single-path biases, self-consistency decoding enhances the reliability of the model's responses.

**Tool-Augmented Reasoning:** Integrating external tools, such as code interpreters or APIs, allows models to perform extended reasoning tasks. For example, a model can execute code snippets to verify solutions or query databases to retrieve pertinent information, thereby augmenting its reasoning capabilities.

**Reflection Mechanisms:** Incorporating reflection enables models to analyze and critique their outputs, fostering iterative improvement. Techniques like post-hoc reflection prompt the model to identify errors or suggest enhancements after generating a response, leading to more refined and accurate outputs.

To learn more about Reasoning Models, check out the following papers:

- _**Chain-of-Thought Prompting Elicits Reasoning in Large Language Models**_ **(Wei et al., 2022):** This seminal paper introduced the concept of CoT prompting, demonstrating that prompting models to think step-by-step significantly improves their reasoning abilities ([\[2201.11903\] Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)).

- _**Tree of Thoughts: Deliberate Problem Solving with Large Language Models**_ **(Yao et al., 2023):** Building upon CoT, this research presents the ToT framework, enabling models to deliberate over multiple reasoning paths and enhancing problem-solving efficacy ([\[2305.10601\] Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/abs/2305.10601)).

- _**Self-Consistency Improves Chain of Thought Reasoning in Language Models**_ **(Wang et al., 2022):** This study explores the self-consistency decoding method, showing that generating multiple reasoning paths and selecting the most consistent answer improves response reliability ([\[2203.11171\] Self-Consistency Improves Chain of Thought Reasoning in Language Models](https://arxiv.org/abs/2203.11171)).

- _**Toolformer**__**: Language Models Can Teach Themselves to Use Tools**_ **(Schick et al., 2023):** This paper discusses how language models can be trained to utilize external tools, enhancing their reasoning capabilities by performing tasks like calculations or database queries ([\[2302.04761\] Toolformer: Language Models Can Teach Themselves to Use Tools](https://arxiv.org/abs/2302.04761)).

- **Reflexion****: Language Agents with Verbal Reinforcement Learning (Shinn et al., 2023):** Introducing the Reflexion framework, this research highlights how models can improve their outputs through self-reflection and verbal reinforcement learning ([\[2303.11366\] Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366)).

* * *

## **Recent Developments**

In late 2024, OpenAI unveiled the o1 (“strawberry”) model, marking a significant shift towards enhancing AI's reasoning capabilities. Trained using reinforcement learning, o1 was designed to "think" before responding, enabling it to handle complex tasks such as mathematics and coding more effectively. This approach represented a departure from traditional models that generated answers instantaneously, introducing a structured reasoning process that improved accuracy and reliability (see, for instance, [OpenAI Announces a New AI Model, Code-Named Strawberry, That Solves Difficult Problems Step by Step | WIRED](https://www.wired.com/story/openai-o1-strawberry-problem-reasoning/)).

Following this, in early 2025, DeepSeek, a Chinese AI startup, introduced DeepSeek-R1, an open-source reasoning model that demonstrated advanced problem-solving abilities. Trained with minimal human intervention, R1 utilized reinforcement learning techniques to autonomously refine its reasoning strategies. This development challenged existing AI paradigms by achieving high performance with reduced computational resources, highlighting the potential for more efficient AI model training methodologies (see [\[2501.12948\] DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948)). Also, see [DeepSeek V3 paper](https://github.com/deepseek-ai/DeepSeek-V3/blob/main/DeepSeek_V3.pdf) for more recent updates.

In December 2024, OpenAI introduced **o3** (see [OpenAI o3 - Wikipedia](https://en.wikipedia.org/wiki/OpenAI_o3)), the successor to its o1 model, marking a significant advancement in AI reasoning capabilities. Designed to enhance step-by-step logical problem-solving, o3 employs a "private chain of thought" mechanism, allowing the model to internally deliberate before generating responses. This approach enables o3 to plan ahead and reason through tasks, performing a series of intermediate reasoning steps to assist in solving complex problems, albeit with increased computational demands and response latency.

Benchmark evaluations have demonstrated o3's superior performance over its predecessor. Notably, it achieved a score of 87.7% on the GPQA Diamond benchmark, which contains expert-level science questions not publicly available online. Additionally, on the Abstraction and Reasoning Corpus for Artificial General Intelligence (ARC-AGI) benchmark, o3 attained three times the accuracy of o1, highlighting its enhanced reasoning capabilities.

To complement o3, OpenAI also released **o3-mini**, a more cost-effective and faster variant. Despite its reduced computational requirements, o3-mini maintains robust reasoning abilities, making it accessible to a broader range of applications. This release underscores OpenAI's commitment to advancing AI reasoning while addressing practical considerations such as cost and efficiency (see [OpenAI o3-mini | OpenAI](https://openai.com/index/openai-o3-mini/)). These developments reflect OpenAI's ongoing efforts to refine AI reasoning models, balancing enhanced capabilities with operational efficiency to meet diverse user needs.

> These advancements highlight the ongoing efforts to refine AI reasoning, aiming to create models that not only generate responses but also understand and process information in a manner akin to human thought processes.

## Example using o3-mini

**User Question:**

_How much energy can I generate using solar panels in my roof if I live in the south of Madrid region, Spain, and I have like 20 square meters of available roof space with 30 degrees inclination and south-west orientation?_

* * *

**Model reasoning:**

- The user wants to estimate how much energy could be generated from 20 m² of solar panels on a south-west facing roof in the south of Madrid, with a 30° inclination. To make a rough estimate, I’ll need to consider the solar irradiance in Madrid (around 4-5 kWh/m²/day). Then I have to factor in the efficiency of the solar panels, how much surface area of the roof is usable for panels, and the orientation. I’ll use all this to calculate a rough daily energy production estimate.

- The solar insolation in the south of Madrid could be around 5.5 to 6 kWh/m²/day, maybe less in central Madrid (around 4.5-5.5 kWh/m²/day). Panels in southern Spain get more (5.5+ kWh/m²/day), but since I'm factoring in the 30° tilt and south-west orientation, I'll reduce the expected output by 5-10%. For a rough estimate, that’s about 1,500 kWh/m²/year. With 20 m² of panels, I can calculate the energy, though I need to factor in the panel efficiency (~15-20%) and losses. I’ll do the math after.

- To estimate how much energy a 20 m² solar installation in southern Madrid can generate, we start with a panel efficiency of 17%. Assuming approximately 1,600 equivalent sun hours per year and a southwest orientation (slightly suboptimal), the installed capacity could be around 3.4 kWp. This yields an output of approximately 5,168 kWh per year after accounting for cable losses and other factors. The estimated range is between 4,500 and 5,000 kWh per year. This is an approximate calculation.

* * *

**Model output:**

Estimating your annual energy production involves a few assumptions about the panels, local irradiance, orientation losses, and system inefficiencies. Here’s one way to break it down:

* * *

1\. **Estimate the Installed Capacity**

- **Available Area:** You have about 20 m² of roof space.

- **Panel Efficiency and Power Density:**  
    Modern panels typically produce around 150–180 W per square meter. For example, if you use panels that average about 170 W/m², then:

Installed capacity ≈ 20m2 × 170W/m2 ≈ 3400Wp (∼3.4kWp)  
(Depending on the exact panels and mounting gaps, you might actually install roughly 3 to 3.5 kWp.)

* * *

2\. **Local Solar Irradiance in the Madrid Region**

- **Irradiance Figures:**  
    In the Madrid area, a well‐oriented (south-facing) fixed system might typically receive around 1,500–1,700 kWh per kWp per year.

- **Orientation and Tilt Adjustments:**
    - Your roof is tilted at about 30°—which is close to optimal for mid-latitude locations.
    
    - However, the south-west orientation is slightly suboptimal compared to a due south orientation. A common rule of thumb is that a south-west tilt might yield roughly 95% of the energy of a perfect south-facing installation.

* * *

3\. **Calculating the Annual Energy Production**

Let’s use an approximate yield of **1,500 kWh per kWp per year** (a conservative figure) and adjust for the slight orientation loss:

1. **Raw Estimate (Ideal South Orientation):**

Energy ≈ 3.4kWp × 1500kWh/kWp/year ≈ 5100 kWh/year

1. **Adjusted for South-West Orientation (about 95% of ideal):**

5100 kWh/year × 0.95 ≈ 4845 kWh/year

1. **Considering Additional System Losses:**  
    When you account for inverter losses, wiring, dust, and other real‐world inefficiencies (often around 5–10%), the net production might come down to roughly **4,500 kWh per year**.

* * *

4\. **Summary**

- **Installed Capacity:** ~3–3.4 kWp from 20 m².

- **Annual Energy Production:** Likely in the ballpark of **4,500 kWh per year** under typical conditions in the south Madrid region.

* * *

Final Note

Keep in mind that this is a rough estimate. The actual production can vary based on:

- The specific panel efficiencies.

- Local shading or weather patterns.

- Precise orientation and tilt.

- Quality and losses in the installation.

For a more detailed assessment, you might consider using online tools such as the [PVGIS](https://re.jrc.ec.europa.eu/pvg_tools/en/) calculator provided by the European Commission, where you can input your exact location, roof orientation, and tilt.

I hope this helps you get a good idea of what to expect from your rooftop solar installation!

\[End of Example\]

* * *
