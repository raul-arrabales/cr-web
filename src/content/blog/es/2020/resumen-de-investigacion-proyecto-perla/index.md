---
title: "Resumen de Investigación: Proyecto Perla"
date: 2020-09-07
categories: 
  - "inteligencia-artificial"
tags: 
  - "perla"
  - "psicobotica"
---

### **Perla es un agente conversacional (chatbot) diseñada para hacer un cribado de los síntomas de depresión en usuarios de Internet.**

Esta entrada del blog es un resumen divulgativo del artículo:

> _Arrabales, R. (2020). Perla: A Conversational Agent for Depression Screening in Digital Ecosystems. Design, Implementation and Validation. arXiv preprint arXiv:2008.12875._

Para conocer todos los detalles de la investigación, consultar el artículo completo en inglés: [https://arxiv.org/abs/2008.12875](https://arxiv.org/abs/2008.12875) (o la [versión traducida al español](https://www.conscious-robots.com/papers/Perla-Paper-Aug2020_v1_ES.pdf)).

El principal objetivo de este proyecto era comprobar si es posible **hacer un cribado de depresión en plataformas digitales** sin tener que recurrir a las técnicas clásicas de autoinforme.

Un cribado o triaje es un proceso por el cual se analiza de forma rápida y relativamente superficial el estado de salud de una población. Las ventajas de hacer un cribado, en este caso para la depresión, es que **permite el diagnóstico temprano**. Es decir, detectar los casos de depresión lo antes posible, ya que cuanto antes se identifique un problema psicológico, antes se puede actuar y podemos contar con un mejor pronóstico.

El problema es que llegar a un gran número de personas es complicado, especialmente en los ecosistemas digitales, donde **cada vez es más difícil llamar la atención de los usuarios y conseguir que participen en una prueba psicológica**.

La forma tradicional de realizar un cribado masivo es proporcionando a los usuarios un cuestionario de autoinforme (es decir, que rellenan ellos mismos). En el caso de la depresión, se suele utilizar el cuestionario de salud del paciente (PHQ-9). Si quieres ver como es esta herramientas de cribado [puedes probarlo aquí](https://psicobotica.com/prolexitim/phq9/).

Una forma de llegar a más gente de forma automatizada es **sustituir la herramienta de autoinforme por un chatbot** (o asistente virtual, o agente conversacional). Como hemos comprobado en esta investigación, en general los usuarios prefieren charlar con una agente artificial que rellenar un cuestionario.

> _La gente prefiere chatear con un agente artificial en vez de rellenar un cuestionario, incluso aunque la segunda opción es más rápida._

En la investigación realizada hemos comprobado que al ofrecer a los usuarios las dos opciones, **3 de cada 5 usuarios prefiere chatear con Perla, en vez de simplemente rellenar el cuestionario**.

Una vez que hemos conseguir atraer el interés de los usuarios hacia la interacción con Perla, nuestra preocupación es **que los resultados obtenidos por el agente artificial sean tan válidos y precisos** como los que se obtendrían con el cuestionario original. La labor de Perla en este sentido es realizar una entrevista estructurada basada en las preguntas originales del PHQ-9.

En este ámbito cobra gran importancia la utilización de técnicas de Inteligencia Artificial. Concretamente, el Procesamiento del Lenguaje Natural (PLN) y la **Comprensión del Lenguaje Natural** (CLN). La idea principal es que Perla tiene que se capaz de comprender las respuestas que da el usuario y traducirlas en una puntuación. La puntuación obtenida para cada pregunta de la entrevista se utiliza para calcular una puntuación final que indica el riesgo de padecer depresión.

Es decir, al hablar con Perla el usuario no tiene que elegir entre diversas opciones tipo Likert (por ejemplo, _«muy a menudo»_, _«de vez en cuando»_, _«nunca»_, etc.), sino que puede expresarse abiertamente y contestar a la pregunta como lo haría ante una entrevistadora humana. La gran dificultad aquí está en que Perla sepa interpretar correctamente cualquier tipo de respuesta que pueda recibir por parte del usuario.

Para comprobar que Perla cumple su cometido correctamente, realizamos un **estudio de validación** en el cual un grupo de usuarios realizan tanto el test tradicional (autoinforme) como la entrevista con Perla. Una vez que tenemos los datos provenientes de las dos herramientas, los comparamos y calculamos los errores que comete Perla con respecto a los resultados del test PHQ-9.

> _El estudio de validación demuestra que Perla tiene una sensibilidad del 96% y una especificidad del 90% detectando los síntomas de depresión_

La sensibilidad del 96% significa que **Perla es muy buena detectando los casos positivos de depresión**. Es decir, de cada 100 personas que realmente tienen depresión Perla es capaz de identificar a 96 de ellas (las otras 4 restantes serían falsos negativos).

La especificidad del 90% significa que **a Perla también se le da bien detectar casos negativos**, que no tienen depresión. Es decir, de cada 100 personas que no tienen depresión Perla es capaz de identificar a 90 de ellas (las otras 10 restantes serían falsos positivos, para los que Perla «piensa» que tienen depresión, pero en realidad no llegan a cumplir los criterios para dicho diagnóstico, aunque normalmente están más cerca).

Por lo tanto, vemos que Perla, como encargada de tareas de cribado, tiende a ser conservadora y **en los casos dudosos se inclina por errar dando un falso positivo** en vez de dar un falso negativo. Como estamos hablando de un proceso de cribado masivo y no es un diagnóstico final, estas propiedades de detección nos parecen adecuadas.

Puedes ver cómo funciona Perla en el siguiente vídeo: [https://www.youtube.com/watch?v=1ph-8UHc2IM](https://www.youtube.com/watch?v=1ph-8UHc2IM)

Si tienes interés por ver el análisis detallado de los datos de este estudio, puedes consultar el [repositorio del proyecto Perla en GitHub](https://github.com/raul-arrabales/perla-bot).
