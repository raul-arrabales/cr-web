---
title: "Modelos de Razonamiento"
date: 2025-02-02
categories: 
  - "genai"
  - "inteligencia-artificial"
tags: 
  - "cot"
  - "deepseek"
  - "genai"
  - "llm"
  - "o3"
  - "openai"
  - "reasoning-models"
  - "tot"
---

<img src="/legacy-images/images/CoT.png" alt="" />

Serie Conscious Robots sobre:  
**IA en Todos los Niveles: De Principiante a Experto**

* * *

## **Modelos de Razonamiento**  
_(Explicados en cuatro niveles de profundidad)_

- \[1\] [Nivel Básico](#basico) (cualquier profesional)

- \[2\] [Nivel Intermedio](#intermedio) (analistas de negocio)

- \[3\] [Nivel Técnico](#tecnico) (analistas de IA/datos)

- \[4\] [Nivel Avanzado](#avanzado) (científicos de datos, investigadores)

- \[+\] [Desarrollos Recientes](#reciente) (entusiastas de la IA)

- \[+\] [Ejemplo / Caso de Uso](#ejemplo) (cualquier usuario)

* * *

### ✨ **Para quienes creen que la IA es magia**

_**(Nivel básico – cualquier profesional interesado en IA)**_

Imagina que tienes una casa con paneles solares y quieres saber cuánta electricidad generarán mañana. Podrías hacer una suposición basándote en lo soleado que estuvo hoy el día, pero una IA podría hacer algo aún más inteligente. Podría decidir analizar **la predicción del tiempo, el rendimiento de los paneles e incluso la época del año** para predecir cuánta energía producirán tus paneles.

Los **modelos de razonamiento** funcionan de esta manera: no se limitan a repetir lo que han visto durante su entrenamiento, sino que **piensan sobre los problemas que se les plantean y comprenden lo que tienen que hacer en nuevas situaciones**, analizando diferentes factores y generando respuestas más inteligentes.

Si todavía no has utilizado un modelo de razonamiento, [mira este ejemplo](#ejemplo) para hacerte una idea de cómo funciona (es un caso similar de cálculo de energía solar).

* * *

### 🔎 **Para quienes quieren entender sin necesidad de programar**

_**(Nivel intermedio – analistas de negocio)**_

En la IA generativa, los modelos de razonamiento son sistemas que no solo predicen la siguiente palabra en una oración, sino que analizan, infieren y sacan conclusiones. Son la diferencia entre un motor de búsqueda que simplemente encuentra respuestas y un consultor que comprende tu problema antes de dar un consejo.

Estos modelos utilizan técnicas como el **razonamiento en cadena de pensamientos (CoT)** y la **ingeniería de instrucciones (_prompt engineering_)** para descomponer problemas complejos paso a paso, lo que los hace útiles en la toma de decisiones empresariales, atención al cliente y automatización de procesos.

**Nota importante:** Si estabas acostumbrado a usar prompts de CoT para mejorar los resultados de modelos anteriores como GPT-4o, ten en cuenta que aplicar este mismo enfoque a un modelo de razonamiento como o3-mini podría tener el efecto contrario _(sigue leyendo para descubrir por qué; consulta también ["Prompt Engineering for OpenAI’s O1 and O3-mini Reasoning Models" en Microsoft Community Hub](https://techcommunity.microsoft.com/blog/azure-ai-services-blog/prompt-engineering-for-openai%E2%80%99s-o1-and-o3-mini-reasoning-models/4374010))_.

* * *

### 💻 **Para quienes trabajan con datos pero no con redes neuronales**

_**(Nivel técnico – analistas de datos, ingenieros de software)**_

A un nivel más profundo, los modelos de razonamiento en la IA generativa utilizan **inferencia en múltiples pasos, aprendizaje con pocos ejemplos (few-shot learning)** y **descomposición basada en prompts** para resolver problemas que requieren lógica y toma de decisiones.

A diferencia de los modelos tradicionales de lenguaje (LLM), que dependen principalmente de la generación estadística de texto, los modelos de razonamiento aplican métodos estructurados como:

- **Chain of Thought (CoT):** Descomposición de problemas en pasos lógicos.

- **Self-Consistency:** Generación de múltiples respuestas y selección de la más probable.

- **Tree of Thought (ToT):** Exploración de varias rutas de solución antes de elegir la mejor.

Estas técnicas permiten que los LLMs pasen de repetir información a resolver problemas de manera efectiva.

* * *

### 🚀 **Para quienes sueñan con papers de IA**

_**(Nivel avanzado – investigadores en IA, científicos de datos)**_

La evolución de los modelos de razonamiento en IA generativa está pasando de una simple predicción autoregresiva de tokens a enfoques **híbridos neuro-simbólicos**, incorporando:

- **Razonamiento basado en grafos** (ej., gráficos de conocimiento + LLMs para la toma de decisiones estructurada).

- **Razonamiento aumentado con herramientas** (ej., LLMs que invocan APIs, ejecutan código o consultan bases de datos).

- **Aprendizaje por refuerzo a partir de retroalimentación humana (RLHF)** para mejorar la coherencia lógica.

La investigación actual explora cómo las arquitecturas transformadoras pueden ser **autorreflexivas en la deducción lógica**, avanzando hacia sistemas de IA más interpretables y generalizables.

Veamos más en detalle las técnicas avanzadas que se usan en los modelos de razonamiento

#### **Chain-of-Thought (CoT) Prompting**

El CoT fomenta que los modelos generen pasos intermedios antes de llegar a una conclusión. Este método mejora la capacidad de los modelos para resolver tareas complejas estructurando el proceso de resolución de problemas (ver [Reasoning with Large Language Models, a Survey](https://arxiv.org/html/2407.11511v1)).

#### **Tree-of-Thought (ToT) Prompting**

Expandiendo el CoT, el ToT permite a los modelos explorar múltiples rutas de razonamiento en una estructura de árbol. Esto facilita la revisión de estrategias y mejora la flexibilidad para resolver problemas.

#### **Self-Consistency Decoding**

Este método implica generar varias rutas de razonamiento de manera independiente y seleccionar la respuesta más consistente. Ayuda a reducir sesgos y aumenta la fiabilidad de las respuestas del modelo.

#### **Razonamiento Aumentado con Herramientas**

La integración de herramientas externas, como intérpretes de código o APIs, permite a los modelos realizar tareas de razonamiento extendido, como ejecutar fragmentos de código o consultar bases de datos para obtener información relevante.

#### **Mecanismos de Reflexión**

Incorporar reflexión permite que los modelos analicen y critiquen sus propias respuestas, mejorando iterativamente su desempeño. Técnicas como la reflexión post-hoc ayudan a identificar errores y sugerir mejoras después de generar una respuesta.

* * *

## **Lecturas recomendadas sobre modelos de razonamiento**

- **Chain-of-Thought Prompting Elicits Reasoning in Large Language Models** _(Wei et al., 2022)_ – Introduce el concepto de CoT, demostrando que hacer que los modelos "piensen" paso a paso mejora significativamente su capacidad de razonamiento ([\[2201.11903\] Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)).

- **Tree of Thoughts: Deliberate Problem Solving with Large Language Models** _(Yao et al., 2023)_ – Presenta el marco de ToT, que permite a los modelos deliberar sobre múltiples caminos de razonamiento ([\[2305.10601\] Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/abs/2305.10601)).

- **Self-Consistency Improves Chain of Thought Reasoning in Language Models** _(Wang et al., 2022)_ – Explica cómo generar múltiples rutas de razonamiento y elegir la más consistente mejora la fiabilidad de las respuestas ([\[2203.11171\] Self-Consistency Improves Chain of Thought Reasoning in Language Models](https://arxiv.org/abs/2203.11171)).

- **Toolformer: Language Models Can Teach Themselves to Use Tools** _(Schick et al., 2023)_ – Muestra cómo los LLMs pueden aprender a usar herramientas externas para mejorar su capacidad de razonamiento ([\[2302.04761\] Toolformer: Language Models Can Teach Themselves to Use Tools](https://arxiv.org/abs/2302.04761)).

- **Reflexion: Language Agents with Verbal Reinforcement Learning** _(Shinn et al., 2023)_ – Introduce el marco de Reflexion, que permite a los modelos mejorar sus respuestas mediante el aprendizaje por refuerzo verbal ([\[2303.11366\] Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366)).

* * *

## **Desarrollos recientes**

En **finales de 2024**, OpenAI lanzó el modelo **o1 ("strawberry")**, marcando un cambio importante hacia el desarrollo de modelos de razonamiento. Entrenado con **aprendizaje por refuerzo**, o1 fue diseñado para "pensar" antes de responder, mejorando su capacidad para resolver tareas complejas como matemáticas y programación (ver, por ejemplo, [OpenAI Announces a New AI Model, Code-Named Strawberry, That Solves Difficult Problems Step by Step | WIRED](https://www.wired.com/story/openai-o1-strawberry-problem-reasoning/)).

A **principios de 2025**, la startup china DeepSeek presentó **DeepSeek-R1**, un modelo de razonamiento de código abierto con habilidades avanzadas de resolución de problemas. Utilizando **aprendizaje por refuerzo con mínima intervención humana**, este modelo desafió los paradigmas existentes al lograr un alto rendimiento con menores recursos computacionales (ver [\[2501.12948\] DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948)). También, ver el paper de [DeepSeek V3](https://github.com/deepseek-ai/DeepSeek-V3/blob/main/DeepSeek_V3.pdf) para una información más reciente.

En **diciembre de 2024**, OpenAI introdujo **o3** (ver [OpenAI o3 - Wikipedia](https://en.wikipedia.org/wiki/OpenAI_o3)), el sucesor de o1, con capacidades avanzadas de razonamiento. Con un mecanismo de "cadena de pensamiento privada", o3 puede planificar y razonar antes de generar respuestas, mejorando significativamente su precisión.

Las evaluaciones han demostrado que o3 supera a su predecesor (ver [OpenAI o3-mini | OpenAI](https://openai.com/index/openai-o3-mini/)), logrando:

- **87.7% en el benchmark GPQA Diamond** (preguntas de ciencia de nivel experto).

- **Tres veces la precisión de o1 en el benchmark ARC-AGI** (corpus de razonamiento y abstracción para inteligencia artificial general).

Para complementar o3, OpenAI lanzó **o3-mini**, una variante más rápida y económica que mantiene bastantes capacidades de razonamiento.

> Estos avances reflejan el esfuerzo continuo por mejorar el razonamiento en IA, acercándose a modelos que en vez de generar respuestas en base a un proceso estadístico, procesan la información de manera más parecida a como lo hacemos los humanos.

## Ejemplo utilizando el modelo o3-mini

**Pregunta del usuario:**

¿Cuánta energía puedo generar usando paneles solares en mi tejado si vivo en el sur de la región de Madrid, España, y tengo unos 20 metros cuadrados de espacio disponible con 30 grados de inclinación y orientación suroeste?

* * *

**Razonamiento del modelo:**

- El usuario quiere estimar cuánta energía se podría generar con 20 m² de paneles solares en un tejado orientado al suroeste en el sur de Madrid, con una inclinación de 30°. Para hacer una estimación aproximada, tendré que considerar la irradiancia solar en Madrid (alrededor de 4-5 kWh/m²/día). Luego tengo que tener en cuenta la eficiencia de los paneles solares, cuánta superficie del techo se puede utilizar para los paneles y la orientación. Usaré todo esto para calcular una estimación aproximada de la producción diaria de energía.

- La insolación solar en el sur de Madrid podría rondar los 5,5-6 kWh/m²/día, quizás menos en el centro de Madrid (alrededor de 4,5-5,5 kWh/m²/día). Los paneles en el sur de España obtienen más (5,5+ kWh/m²/día), pero como tengo en cuenta la inclinación de 30° y la orientación suroeste, reduciré la producción esperada entre un 5 y un 10%. En una estimación aproximada, se trata de unos 1.500 kWh/m²/año. Con 20 m² de paneles, puedo calcular la energía, aunque necesito tener en cuenta la eficiencia del panel (~15-20%) y las pérdidas. Haré los cálculos después.

- Para estimar cuánta energía puede generar una instalación solar de 20 m² en el sur de Madrid, partimos de una eficiencia del panel del 17%. Suponiendo aproximadamente 1.600 horas de sol equivalentes al año y una orientación suroeste (ligeramente subóptima), la capacidad instalada podría rondar los 3,4 kWp. Esto produce una producción de aproximadamente 5168 kWh por año después de tener en cuenta las pérdidas de cables y otros factores. La autonomía estimada está entre 4.500 y 5.000 kWh al año. Este es un cálculo aproximado.

* * *

**Salida del modelo:**

Estimar su producción anual de energía implica algunas suposiciones sobre los paneles, la irradiancia local, las pérdidas de orientación y las ineficiencias del sistema. Aquí hay una forma de descomponerlo:

**1\. Estimación de la Capacidad Instalada**

**Área Disponible:** Tienes aproximadamente **20 m²** de espacio en el techo.

**Eficiencia y Densidad de Potencia de los Paneles:**  
Los paneles modernos suelen producir alrededor de **150–180 W por metro cuadrado**.  
Por ejemplo, si usas paneles con una media de **170 W/m²**, entonces:

Capacidad instalada ≈ 20 m² × 170 W/m² ≈ 3400 Wp (∼3.4 kWp)

(Según los paneles exactos y los espacios de montaje, la capacidad real podría estar entre **3 y 3.5 kWp**).

* * *

**2\. Irradiancia Solar Local en la Región de Madrid**

**Valores de Irradiancia:**  
En Madrid, un sistema bien orientado (hacia el **sur**) y fijo suele recibir entre **1,500 y 1,700 kWh por kWp al año**.

**Ajustes de Orientación e Inclinación:**

- Tu techo tiene una inclinación de **30°**, lo cual es **cercano al óptimo** para latitudes medias.

- Sin embargo, la **orientación suroeste** no es tan ideal como una orientación **directamente al sur**.

- Una regla general indica que una inclinación hacia el **suroeste** podría generar aproximadamente **el 95%** de la energía de una instalación perfectamente orientada al sur.

* * *

**3\. Cálculo de la Producción Anual de Energía**

Tomaremos un rendimiento aproximado de **1,500 kWh por kWp al año** (valor conservador) y aplicamos el ajuste por orientación:

**Estimación en condiciones ideales (orientación sur):**

Energía ≈ 3.4 kWp × 1500 kWh/kWp/año ≈ 5100 kWh/año

**Ajustado para orientación suroeste (~95% de la producción ideal):**

_5100 kWh/año × 0.95 ≈ 4845 kWh/año_

**Considerando pérdidas adicionales del sistema:**  
Al incluir pérdidas por **inversor, cableado, polvo y otras ineficiencias** (que suelen ser del **5–10%**), la producción neta se reduciría a aproximadamente **4,500 kWh por año**.

* * *

### 4\. Resumen

✅ **Capacidad Instalada:** **~3–3.4 kWp** en **20 m²**.  
✅ **Producción Anual de Energía:** Aproximadamente **4,500 kWh/año** en condiciones típicas del sur de Madrid.

* * *

### Nota Final

Este es un cálculo estimado. La producción real puede variar dependiendo de:

🔹 La eficiencia específica de los paneles.  
🔹 Sombras o patrones climáticos locales.  
🔹 La orientación e inclinación exactas.  
🔹 Calidad de la instalación y pérdidas del sistema.

Para una evaluación más precisa, puedes utilizar herramientas en línea como **PVGIS**, proporcionada por la Comisión Europea, donde puedes ingresar tu ubicación exacta, la orientación del techo y la inclinación.

¡Espero que esto te ayude a tener una buena idea de lo que puedes esperar de tu instalación solar en la azotea! ☀️🔋

\[Fin del ejemplo\]
