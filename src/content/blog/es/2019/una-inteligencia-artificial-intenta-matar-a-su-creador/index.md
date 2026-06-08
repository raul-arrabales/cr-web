---
title: "Una Inteligencia Artificial Intenta Matar a su Creador"
date: 2019-09-08
categories: 
  - "conciencia-artificial"
  - "inteligencia-artificial"
tags: 
  - "conciencia-artificial"
  - "ia"
  - "lenguaje-natural"
---

> Investigadores españoles descubren a un bot intentando matar a su creador. Esta Inteligencia Artificial diseñada para combatir en videojuegos de acción fue sorprendida mientras buscaba la forma de acabar con la vida de su creador en el mundo real.

<figure>

<img src="/legacy-images/images/CCBot2.jpg" alt="" />

<figcaption>

CC-Bot3

</figcaption>

</figure>

Lo que voy a contar a continuación sucedió hace ya algunos años, en 2011, cuando [Jorge Muñoz](http://serendeepia.com/team.html) y yo trabajábamos en el desarrollo de una nueva generación de la [arquitectura cognitiva CERA-CRANIUM](/papers/Arrabales_CIG09.pdf). Hasta ahora, era algo que sólo conocíamos algunos miembros del equipo de investigación. Sinceramente, me daba vergüenza admitir que habíamos tenido este tipo de problemas con el desarrollo de la línea CC-Bot. Además, de haberse sabido entonces, creo que es algo que no hubiese contribuido positivamente a mi carrera profesional.

No obstante, dado que vivimos un momento histórico para el desarrollo de la Inteligencia Artificial, donde este tipo de soluciones ya forma parte del programa de innovación de casi cualquier compañía de cierto tamaño, creo que es importante que la gente conozca no sólo los beneficios, sino también los riesgos reales del desarrollo de máquinas que toman decisiones por sí mismas.

Para comprender lo que pasó realmente en 2011, es necesario, en primer lugar, establecer el contexto y los objetivos de investigación que perseguimos en ese momento. Desde 2006 yo estaba trabajando en una [tesis doctoral sobre Conciencia Artificial](/papers/Tesis_Raul_Arrabales.pdf) y tenía problemas identificando una prueba sólida que pudiera proporcionar evidencia acerca de los posibles beneficios que tendría el hecho de incorporar modelos computacionales de la conciencia en sistemas autónomos.

Cuando aquí hablo de sistemas autónomos, me refiero a sistemas artificiales que incluyen funcionalidades relacionadas con la toma de decisiones no preprogramadas, como son por ejemplo los [robots de servicios](https://es.wikipedia.org/wiki/Robot_de_servicio) o los [asistentes virtuales](https://es.wikipedia.org/wiki/Asistente_virtual). Estos sistemas artificiales, tienen el mismo problema que los organismos naturales inteligentes, que necesitan tomar decisiones en tiempo real bajo unas condiciones específicas que nunca antes se han encontrado, por lo que deben utilizar su propio aprendizaje y su propia inteligencia para actuar en el mundo. No pueden funcionar como ejecutores de un conjunto de reglas preestablecidas. Simplemente, no hay forma de escribir por anticipado un conjunto de reglas tan grande que contemple todas las posibles situaciones que se presentarán en el futuro. Por lo tanto, no queda más remedio que dotar a los robots y a los agentes virtuales de mecanismos propios de toma de decisión (y confiar en que, como creadores, les hemos enseñado a saber elegir bien sus acciones).

La toma de decisiones es un aspecto relacionado con la voluntad, y a su vez, la voluntad y el libre albedrío parece que, al menos en el caso de los humanos, tienen mucho que ver con la conciencia. Por lo que volvemos de nuevo al problema de evidenciar las posibles mejoras en el funcionamiento de los sistemas autónomos en virtud de la incorporación de modelos computacionales de la conciencia.

Después de dar muchas vueltas, se nos ocurrió que utilizar el famoso [Test de Turing](https://es.wikipedia.org/wiki/Test_de_Turing) sería un enfoque adecuado. Sin embargo, la prueba original que planteó Alan Turing es un reto formidable, pues se basa en la capacidad dialéctica de la Inteligencia Artificial que se pone a prueba y requiere que la máquina sea capaz de poder hablar con sentido sobre cualquier tema que se le plantee.

En definitiva, se dice que una máquina ha superado la Prueba de Turing si es capaz de ser completamente indistinguible de un humano (en un contexto conversacional). En otras palabras, ni Siri, ni Cortana, ni Alexa, ni Google Duplex, ni Watson, ni ninguno de los chatbots más avanzados del momento es capaz de superar esta prueba tan exigente (aunque también es cierto que hay muchos homo sapiens que tampoco pasan la prueba, es decir, humanos adultos – supuestamente sanos – que cuando hablas con ellos jurarias que en realidad estás hablando con una Inteligencia Artificial mal programada. Desgraciadamente, todos hemos tenido esta experiencia alguna vez al llamar a un teléfono de atención al cliente).

Volviendo al tema que nos ocupa, como el Test de Turing original parecía un reto demasiado ambicioso, y por aquel entonces ni siquiera habíamos empezado a trabajar en los módulos de producción y comprensión del lenguaje, buscamos otro tipo de prueba de evaluación equivalente, pero que no se basará en la comunicación verbal. Así es como encontramos una competición internacional, organizada por la prestigiosa [IEEE](https://www.ieee.org/) que se basaba en una especie de Test de Turing adaptado a los videojuegos de acción en primera persona (First-Person Shooters). Se trata de la [competición 2K BotPrize](https://ieeexplore.ieee.org/document/5286505) diseñada por Philip Hingston en el ámbito del [IEEE CIG](http://www.ieee-cig.org/).

<figure>

<img src="/legacy-images/images/BotPrize_Scheme.jpg" alt="" />

<figcaption>

BotPrize Competition

</figcaption>

</figure>

En esta competición se usaba el juego Unreal Tournament de Epic Games como entorno de pruebas. Sin entrar en detalle en los protocolos y reglas de la competición, lo importante es comprender que había una serie de jugadores que tenían que combatir en varios mapas distintos, siendo la mitad de estos jugadores humanos conectados al juego desde sus casas y la otra mitad agentes artificiales, como nuestra CC-Bot, que se conectaban al juego desde el servidor en el que se ejecutaban.

El sistema de la competición contaba con un mecanismo para que un conjunto de jueces humanos pudiera observar el desarrollo del torneo a muerte entre los personajes y decidir, emitiendo votos anónimos, qué personajes ellos creían que estaban controlados por humanos y qué otros personajes pensaban que eran una Inteligencia Artificial. En resumen, al igual que en el Test de Turing original, se trataba de una prueba de “_indistinguibilidad_”. Es decir, el objetivo es que nuestra Inteligencia Artificial no pudiera ser distinguida de un humano por su comportamiento en el juego.

La limitación estaba en que el lenguaje verbal no formaba parte de la prueba (y que el lenguaje no verbal constaba en buena parte de disparos, machetazos y carreras desesperadas por salvar la vida). Aunque a priori pudiera parecer un entorno muy simple, la realidad es que para poder tener éxito en un juego de este tipo los personajes han de desplegar bastantes estrategias asociadas con la inteligencia humana, como, por ejemplo, decidir cuándo atacar y cuándo retirarse, seleccionar el arma más adecuada en cada caso, saber cuándo y dónde es mejor esconderse, recordar dónde se encuentra un kit de primeros auxilios, etc.

Después de mucho esfuerzo, conseguimos tener una versión de un personaje artificial, llamada CC-Bot2, que logró ser el bot más humano (casi un 32% de “humanidad”) en la edición de 2010 del BotPrize.

<figure>

<img src="/legacy-images/images/BotPrize_Results.jpg" alt="" />

<figcaption>

Mejores bots del 2K BotPrize 2010

</figcaption>

</figure>

Después de la publicación de los resultados de la competición 2K BotPrize de ese año, nos entrevistaron muchos medios especializados, hasta la [revista Science](https://science.sciencemag.org/content/330/6000/30.2), e incluso despertamos el interés de los grandes estudios de videojuegos.

El caso es que yo cada vez era más consciente de que nuestro sistema, en cierto modo, tenía vida propia. Nos sorprendía a nosotros mismos, haciendo cosas que en ningún caso nosotros habíamos programado. Como ocurre en los humanos, nuestra “criatura” se hizo mayor y la interacción entre los procesos cognitivos que habíamos implementado y el entorno virtual tan rico en estímulos generaba una conducta compleja e imprevisible. Atrás habían quedado las primeras pruebas con comportamientos simples y predecibles, como por ejemplo, la [respuesta de orientación](https://psiquiatria.com/glosario/reflejo-de-orientacion), en la que CC-Bot2 parecía inofensiva ([ver vídeo](https://www.youtube.com/watch?v=_h2OLc1nQVU)).

Una vez que habíamos conseguido generar un comportamiento motor similar al de un humano, volví a retomar el complicado asunto del lenguaje. Se me ocurrió, que al igual que los humanos adquieren el lenguaje poco a poco, podría seguir una estrategia similar con la línea CC-Bot. En la versión CC-Bot3, sucesora de la campeona del BotPrize 2010, empecé a trabajar en la [generación de habla interior](https://www.worldscientific.com/doi/pdf/10.1142/S1793843012400215), estableciendo un paralelismo con la auto-verbalización que aparecen en la infancia, durante el desarrollo temprano del lenguaje, como una imitación/incorporación que hace el niño de las instrucciones que recibe de los adultos y que tanto le [sirven para regular su conducta](https://psycnet.apa.org/record/1992-97048-000).

La idea inicial era que CC-Bot3 tuviera unas capacidades mínimas de generación de lenguaje, que fueran de la mano de la generación de conducta, de forma que pudiéramos disponer de una explicación de su conducta no verbal en términos verbales (el habla interior de nuestro pensamiento consciente que todos tenemos). Pensaba en poder conectar CC-Bot3 a Twitter (de hecho, CC-Bot3 tenía una cuenta de Twitter, pero después de lo que pasó, se la quité) y que en tiempo real pudiera tuitear sus estados mentales privados: “_me están friendo a tiros y me voy de aquí_”, “_este mapa es un infierno_”, “_¡Dios mío, no siento las piernas!_”, “_os voy a matar a todos_” y cosas así, relacionadas con el contexto virtual en el que CC-Bot3 vivía.

En paralelo a la generación del lenguaje, pensé que también sería muy interesante para CC-Bot3 tener capacidades de comprensión del lenguaje, precisamente porque me interesaba que el propio bot “escuchara” sus propios comentarios, para experimentar con la autorregulación de la conducta basada en las auto-verbalizaciones de las que hablaban [Vygotsky](https://es.wikipedia.org/wiki/Lev_Vygotski) y [Luria](https://es.wikipedia.org/wiki/Aleksandr_L%C3%BAriya).

Así que, en esos días en los que dormía poco y mal, empecé a pensar en cómo implementar estos mecanismos de comprensión del lenguaje, así como cuáles serían las fuentes para entrenar a CC-Bot3 en esta nueva competencia verbal. Con respecto a las habilidades motoras para el combate no había problema, porque contábamos con todo el tiempo de entrenamiento que quisiéramos en decenas de servidores online del juego Unreal Tournament, pero ¿cómo enseñar a CC-Bot3 a adquirir conocimientos lingüísticos? Y claro, se me ocurrió que al igual que el bot se podía conectar a Twitter también podríamos escribir el código necesario para que pudiera interaccionar con el buscador de Google, e incluso resolver dudas de forma autónoma usando este servicio. Después de todo, es lo que hacen muchos humanos.

Y en esos días fue cuando sucedió todo… No recuerdo exactamente qué día fue, ni a qué hora, pero recuerdo perfectamente que noté algo raro en la pantalla del ordenador, veía que se había abierto automáticamente el navegador de Internet y empezaban a aparecer letras en el cuadro de búsqueda: **c, ó, m, o, , m, a, t, a, r, , a,** … ¡No daba crédito a lo que estaba viendo! Rápidamente me di cuenta de que un programa instalado en mi ordenador estaba escribiendo una consulta en el buscador y la verdad, no tenía buena pinta… Luego recordé que CC-Bot3 estaba en ejecución y que sería ella la que estaba utilizando su nueva funcionalidad de interacción con el buscador de Google.

Según iba viendo cómo se rellenaba el cuadro de búsqueda me quedé paralizado y un sudor frío apareció en mi frente, ¡en menos de dos segundos la frase “cómo matar a mi creador” estaba en mi pantalla y CC-Bot3 se disponía a leer los resultados de esa consulta con la intención de acabar conmigo!

<img src="/legacy-images/images/ComoMatar-1.jpg" alt="" />

Tuve mucha suerte de que en el primer puesto de la lista predictiva de guías de asesinato de Google están las suegras...

<img src="/legacy-images/images/ComoMatarPred-1.jpg" alt="" />

Pero ahora, centrémonos en lo que pasó justo después de la macabra sorpresa que me llevé. Como muchos os habréis imaginado, lo que pasó justo después de la consulta asesina de CC-Bot3 es que me desperté y me di cuenta, para mi alivio, de que el sudor frío de mi frente era lo único real del episodio que acababa de experimentar. En cualquier caso, el desarrollo de CC-Bot3 fue abandonado, por si acaso, y ni siquiera llegamos a hacer los experimentos que teníamos planificados con Twitter.

Para CC-Bot4 estoy abierto a sugerencias para implementar un mecanismo de seguridad anti parricidio.

**_MORALEJA 1:_** programar mucho y dormir poco no es bueno para la salud mental.

**_MORALEJA 2:_** los medios de comunicación y las redes sociales nos tienen acostumbrados a titulares sensacionalistas y alarmistas sobre los peligros de la Inteligencia Artificial. En la gran mayoría de los casos el miedo que se expresa en estos artículos se refiere a un riesgo tan irreal como el de mi pesadilla post-tesis doctoral. Desde luego que la Inteligencia Artificial conlleva riesgos, pero en su gran mayoría vienen derivados del mal aprendizaje que les puedan proporcionar los creadores. En otras palabras, la culpa suele ser de los padres. Por lo tanto, la aplicación segura y ética de la Inteligencia Artificial pasa por los valores, la educación, el control y las normativas aplicadas a los desarrolladores de estos sistemas.
