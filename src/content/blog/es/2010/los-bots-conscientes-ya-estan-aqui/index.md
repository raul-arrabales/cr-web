---
title: "Los bots conscientes ya están aquí"
date: 2010-10-27
categories: 
  - "conciencia-artificial"
  - "inteligencia-artificial"
  - "robots"
  - "videojuegos"
tags: 
  - "cc-bot"
---

# Los bots conscientes ya están aquí

## Analizamos la mente del bot ganador del 2K BotPrize 2010

### _El equipo “Conscious-Robots”, vencedor de la edición 2010 del 2K BotPrize, explica la arquitectura “consciente” de su bot._

* * *

  La mayor parte de los esfuerzos en desarrollar bots más realistas – bots que muestra un comportamiento similar al que tendría un humano – están basados en las técnicas clásicas de Inteligencia Artificial. Dichas técnicas tienen su base en ideas relativamente antiguas, las cuales sin embargo han ido mejorando progresivamente o incrementando su rendimiento para satisfacer los requisitos de los nuevos videojuegos. Para el desarrollo de CC-Bot2, nuestro bot en la competición, nos hemos centrado en un nuevo enfoque, tomando como inspiración algunas de las teorías cognitivas propuestas para modelar la conciencia humana.

  En este artículo describimos brevemente el diseño de CC-Bot2 para la competición 2K BotPrize 2010, que tuvo lugar el pasado mes de Agosto en Copenhague. La competición BotPrize nace como una adaptación del test de Turing para videojuegos, en la que se ha seleccionado un juego de disparos en primera persona (FPS): el “Unreal Tournament 2004”. Esta competición internacional, en la que participan investigadores de todo el mundo, es un referente para conocer el avance de las técnicas de Inteligencia Artificial para pasar el test de Turing, es decir, crear programas de ordenador que sean indistinguibles de un ser humano. Aun siendo vencedor de la competición, CC-Bot2 no pudo superar el test de Turing en esta edición, consiguiendo un ratio de humanidad del 31.8%, aún algo distante del 50% que se considera necesario para superar dicho test. Hoy en día no existe programa alguno que haya conseguido superar el test de Turing, y aún existe un largo camino para conseguirlo. Sin embargo, la nueva propuesta que presentamos aquí es una línea de investigación muy prometedora para poder alcanzar dicho objetivo, y no solo en el dominio de los videojuegos.

<!--more-->

_Modelo de la Teoría del Espacio de Trabajo Global_

##### La arquitectura cognitiva CERA-CRANIUM y CC-Bot2

Como resultado de 4 años de investigación en Conciencia Artificial, Raúl Arrabales ha desarrollado una nueva arquitectura cognitiva que ha sido la base del desarrollo de CC-Bot2 (CERA-CRANIUM Bot 2). CERA-CRANIUM es una arquitectura cognitiva, un modelo computacional de la conciencia, diseñado para el control de agentes autónomos, como pueden ser robots físicos o bots de videojuegos. La fuente de inspiración de esta arquitectura es la teoría del Espacio de Trabajo Global de Baars (Global Workspace Theory – Baars, 1988). CC-Bot2 es una implementación en java de CERA-CRANIUM especialmente desarrollada para la competición del 2K BotPrize 2010.

  CERA-CRANIUM consiste en dos componentes principales (ver Figura): - CERA, una arquitectura de control estructurada en capas - CRANIUM, un entorno de ejecución para la creación y gestión de una alta cantidad de procesos que se ejecutan en paralelo y que usan espacios de trabajo compartidos (workspaces).

Como explicamos más adelante, CERA utiliza los servicios proporcionados por CRANIUM para crear un proceso global de percepción altamente dinámico y adaptable.

_Vista Global de la Arquitectura CERA-CRANIUM_

**Desde el punto de vista del control, CERA-CRANIUM proporciona un mecanismo de sincronización y gestión de un conjunto de procesos especializados que se ejecutan concurrentemente.**

Estos procesadores pueden ser de varios tipos, generalmente son detectores de condiciones sensoriales, como por ejemplo el procesador “jugador aproximándose”, o son generadores de comportamientos como el procesador “huye de los disparos”.

##### CERA

CERA es una arquitectura cognitiva dividida en capas y diseñada para implementar un sistema de control flexible para agentes autónomos. La versión actual de CERA está estructurada en cuatro capas (ver Figura): la capa de servicios sensoriomotores, la capa física, la capa de misión y la capa núcleo. Como en las arquitecturas clásicas de subsunción, las capas superiores manejan conocimiento más abstracto, mientras que las capas inferiores interactúan más directamente con el entorno.

**CERA - Capa de servicios sensoriomotores.** Esta capa es un conjunto de interfaces y servicios de comunicación cuya implementación requiere acceder a las medidas de los sensores y a los comandos específicos para controlar los actuadores de un agente. Esta capa proporciona una abstracción a la capa inmediatamente superior, la capa física, que permite controlar un agente, ya sea un robot físico o un bot de un entorno simulado. En el caso de CC-Bot2, la capa de servicios sensoriomotores es básicamente una adaptación de Pogamut 3, las librerías proporcionadas en la competición 2K BotPrize para comunicarse con el juego Unreal Tournament 2004.

**CERA - Capa física.** Esta capa engloba una representación a bajo nivel de la información de los sensores y las acciones de los actuadores. Además, de acuerdo a los modelos de procesado de señales sensoriales, la capa física realiza un procesado de dicha información presentando a la capa superior una información sensorial con mayor significado. De forma similar, en esta capa también se descomponen las acciones de alto nivel provenientes de la capa superior en acciones más simple, de bajo nivel, interpretables por los servicios motores. Algunos ejemplos de los procesadores de CC-Bot2 de esta capa son: “un jugador ha aparecido en mi campo de visión”, o “estoy sufriendo daños (baja mi nivel de salud)”.

**CERA - Capa de misión.** Esta capa produce y gestiona información sensoriomotora más elaborada, relacionada con los comportamientos y misiones específicas del agente (en el caso del modo “deathmatch” del juego Unreal Tournament la misión es relativamente sencilla y simple: matar al mayor número posible de oponentes). En esta capa, los perceptos simples generados en la capa física se procesan y agrupan para generar perceptos con un mayor significado y relacionados con las metas del agente, lo que se denomina perceptos complejos o perceptos de misión. Algunos ejemplos de estos perceptos son: “el jugador x es mi enemigo” o “el enemigo x esta atacándome”. La capa de misión puede se puede modificar independientemente de las otras capas de CERA en función de las tareas y necesidades del agente.

**CERA - Capa núcleo.** Esta capa supone el control de más alto nivel en CERA, en ella se encontran los módulos que coordinan las funciones cognitivas superiores. La definición e interacción de dichos módulos se puede ajustar para implementar un modelo particular de conciencia. En el caso de CC-Bot2, la capa núcleo contiene módulos relacionados con los mecanismos de atención (otros módulos se añadirán en el futuro). El objetivo principal de los módulos de la capa núcleo es regular la forma en que las capas inferiores funcionan, esto es, la forma en la que los procesadores funcionan e interactúan entre ellos.

Las capas física y de misión se caracterizan por estar inspiradas en teorías cognitivas de la conciencia, aquellas en las que un conjunto de procesos que se ejecutan en paralelo compiten y colaboran, usando una memoria de trabajo común, en busca de una solución global. De hecho, los agentes de CERA poseen dos espacios de trabajo jerárquicos que se coordinan con el objetivo de encontrar dos soluciones globales y relacionadas: una relacionada con la percepción y otra relacionada con la acción. Es decir, CERA tiene que encontrar respuesta para las siguientes preguntas de forma continuada e iterativa:

   - ¿Cuál debe ser el siguiente contenido consciente del agente? - ¿Cuál debe ser la siguiente acción a ejecutar?

Típicamente las arquitecturas de los agentes se centran en la segunda pregunta mientras que ignoran la primera. Creemos que se necesita un mecanismo adecuado para resolver la primera cuestión para poder resolver la segunda pregunta de forma “más humana”. De todos modos, ambas cuestiones tienen que ser resultas teniendo en cuenta criterios de seguridad y la misión asignada al agente. Consecuentemente, se espera que CERA encuentre una solución óptima para responder a estas preguntas mostrando un comportamiento humano al mismo tiempo. Como explicamos a continuación, CRANIUM se utiliza para la implementación de los espacios de trabajo compartidos.

##### CRANIUM

CRANIUM proporciona un entorno de ejecución donde CERA puede ejecutar múltiples procesadores asíncronos y coordinados. Un espacio de trabajo en CRANIUM puede verse como una implementación particular de un pandemonio, donde los demonios compiten entre ellos por la activación. Cada uno de estos demonios, o procesos especializados, está diseñado para realizar una función específica con un tipo de datos determinado. En un instante dado, el nivel de activación de un procesador se calcula mediante una función heurística que determina cuanto contribuye dicho procesador a la solución global del sistema. Los parámetros concretos que generan esta estimación se establecen en la capa núcleo de CERA. Por regla general, el espacio de trabajo compartido de CRANIUM está constantemente modulado por los comandos enviados desde la capa núcleo.

En CC-Bot2 se usan dos espacios de trabajo CRANIUM separados e interconectados, e integrados en la arquitectura CERA. El espacio de trabajo de nivel inferior se encuentra en la capa física de CERA, donde los procesadores especializados procesan datos provenientes de los servicios sensoriomotores de CERA (el API de Pogamut). El segundo espacio de trabajo se encuentra en la capa de misión de CERA, que usa procesadores especializados de más alto nivel que procesan la información proveniente de la capa física, así como la información producida en el propio espacio de trabajo (ver Figura). La información generada fluye organizada en paquetes llamados perceptos simples, perceptos complejos y perceptos de misión.

_Flujo Ascendente de Percepción en CERA-CRANIUM_

Además del flujo de ascendente de percepción, tiene lugar simultáneamente un flujo descendente que pasa por los mismos espacios de trabajo y que genera las acciones del bot. Los espacios de trabajo de la capa física y la capa de misión incluyen acciones simples (directamente transformadas a acciones de Pogamut), comportamientos simples y comportamientos de misión (ver Figura).

_Flujo Descendente de Acción en CERA-CRANIUM_

La principal diferencia entre el flujo ascendente y el descendente es que mientras que los perceptos se crean iterativamente dando lugar a perceptos más complejos y de mayor significado, el flujo descendente descompone los comportamientos más complicados en otros más sencillos hasta llegar a las acciones atómicas directamente ejecutadas sobre los actuadores o servicios motores. En la siguiente sección describimos una lista de los procesadores especializados implementados en CC-Bot2.

##### Generación de Comportamientos

El flujo de la información sensoriomotora a través de los espacios de trabajo facilita la implementación de múltiples bucles de retroalimentación, que a menudo son necesarios para un comportamiento efectivo. El comportamiento ganador esta siempre enfrentado a nuevos comportamientos generados por la capa física que se aparecen como alternativa al actual, por ello se necesita un mecanismo que interrumpa el comportamiento actual cuando se determine que este ya no es considerado la mejor opción. En términos generales, la activación o inhibición de los perceptos y los comportamiento se realiza de acuerdo al modelo cognitivo de conciencia implementado. La Figura 6 muestra una representación esquemática de los típicos lazos de retroalimentación que se producen en CERA. Estos bucles se cierran cuando las consecuencias de las acciones son percibidas por el bot, activando respuestas adaptativas en los diferentes niveles.

_Lazos de Retroalimentación en CERA-CRANIUM_

La curva (a) en la Figura representa el bucle producido cuando se activa una respuesta refleja. La curva (b) se corresponde con una situación donde un comportamiento de misión se está ejecutando de forma inconsciente. Finalmente, la curva (c) representa el bucle de control de alto nivel, cuya tarea se realiza de forma consciente. Estos tres tipos de bucles de control no son mutuamente excluyentes, de hecho, el mismo percepto puede contribuir simultáneamente a bucles que tienen lugar en diferentes niveles.

Los espacios de trabajo de CRANIUM no son mecanismos pasivos de memoria a corto plazo, su funcionamiento depende de un número de parámetros que influyen en la forma en la que el pandemonio funciona. Estos parámetros se establecen por medio de comandos enviados a las capas física y de misión desde la capa núcleo de CERA. En otras palabras, mientras CRANIUM proporciona mecanismos para funciones especializadas que se combinan y generan una respuesta con un significado concreto, CERA establece una estructura jerárquica y organiza los mecanismos de competición y colaboración entre los procesos de acuerdo al modelo especificado en la capa núcleo. Este mecanismo cierra el bucle de control interno entre la capa núcleo y el resto de la arquitectura: la entrada a la capa núcleo (la percepción explícita) depende de su propia salida (el control de los espacios de trabajo), la cual determina a su vez qué es lo que se percibe.

##### La Implementación CC-Bot2

En la siguiente tabla se muestran algunos de los procesadores especializados de CC-Bot2, junto con una pequeña descripción. Es preciso resaltar que diferentes procesadores pueden desarrollar una misma tarea pero usando diferentes técnicas, y ambos procesadores podrían coexistir en el mismo espacio de trabajo.

| **Nombre del Procesador**  | **Capa de Cera**  | **Tarea** |
| --- | --- | --- |
|  AttackDetector |  Física |  Detectar condiciones compatibles con un ataque enemigo (decremento en el nivel de salud no achacable a otras causas, presencia de fuego enemigo, etc.). |
|  AvoidObstacle |   Física |  Generar un comportamiento simple de navegación para esquivar un obstáculo. |
|  BackupReflex |   Física |  Generar un movimiento simple de retroceso en respuesta a un impacto inesperado. |
|  ChasePlayer |  Misión |  Generar un comportamiento complejo de persecución de otro jugador. |
|  EnemyDetector |  Misión |  Detectar la presencia de un enemigo en base a determinadas condiciones, como la detección previa de un ataque y la presencia de otros jugadores disparando. |
|  GazeGenerator |  Física |  Generar un movimiento simple de orientación de la mirada hacia en punto de atención. |
|  JumpObstacle |  Física |  Generar un movimiento simple de salto para esquivar un obstáculo detectado. |
|  KeepEnemiesFar |  Misión |  Generar un movimiento complejo de huída para maximizar la distancia a los enemigos detectados. |
|  LocationReached |  Física |  Detectar que el bot ha llegado a la posición espacial a la que prentendía llegar. |
|  MoveLooking |  Física |  Generar un movimiento complejo que compagina la locomoción con la orientación de la mirada. |
|  MoveToPoint |  Física |  Generar un movimiento simple de movimiento hacia un punto determinado. |
|  ObstacleDetector |  Física |  Detectar la presencia de un obstáculo que impide (o podría impedir el movimiento). |
|  ObstacleDetectorNR |  Física |  Detectar la presencia de un obstáculo sin usar mecanismos de trazado de ratos (como hace el procesador anterior). |
|  PlayerDissapearDetector |  Física |  Detectar que un jugador que estaba dentro del campo de visión deja de estar presente. |
|  RandomNavigation |  Física |  Generar un movimiento complejo de navegación aleatoria por el mapa. |
|  RestartDetector |  Física |  Detectar que el bot inicia de nuevo la ejecución después de un reinicio (por ejemplo debido a una muerte por fuego enemigo). |
|  RunAwayFromPlayers |  Misión |  Generar un movimiento complejo para huír de determinados jugadores. |
|  SelectBestWeapon |  Misión |  Seleccionar la mejor arma disponible en cada momento. |
|  SelectEnemyToShoot |  Misión |  Seleccionar el enemigo al que conviene disparar en cada momento. |
|  StuckDetector |  Física |  Detectar condiciones en las que el bot no es capaz de avanzar y los comandos de locomoción no surten el efecto esperado. |

En el desarrollo actual de CC-Bot2 los procesadores especializados se crean y se asocian en el propio código con la capa correspondiente dentro de CERA (ver ejemplo del código que se muestra a continuación). Nuestra intención es crear un modelo más elegante para el programador para definir los procesadores especializados, ya sea por medio de ficheros de configuración o mediante una interfaz gráfica.

```
	[…]
```

// \*\* ATTACK DETECTOR \* // Generates a BeingDamaged percept every time the health level decreases \_CeraPhysical.RegisterProcessor( new AttackDetector() );

// \*\* OBSTACLE DETECTOR \*\* // Generates a Obstacle single percept if there is any obstacle in the // direction of the movement \_CeraPhysical.RegisterProcessor( new ObstacleDetector() );

// \*\* EMEMY DETECTOR \*\* // Generates a Enemy Attacking complex percept every time the bot is // being damaged and possible culprit/s are detected. \_CeraMission.RegisterProcessor( new EnemyDetector() );

\[…\]

##### CC-Bot2 en Acción

A continuación se describe un ejemplo sencillo sobre cómo se genera un comportamiento complejo en el bot: 1. El procesador EnemyDetector detecta un nuevo enemigo y crea un percepto de “enemigo detectado”. 2. El percepto “enemigo detectado” es recibido por el procesador SelectEnemyToShoot, el cual se encarga de seleccionar el enemigo a disparar entre todos los posibles. Cuando uno es elegido, se genera la acción correspondiente de disparo. 3. Dos procesadores especializados reciben la acción de disparar, uno se encarga de apuntar al objetivo y disparar, y otro se encarga de crear un movimiento para evitar el fuego enemigo. 4. Como las nuevas acciones de movimiento tienen más prioridad que las acciones de movimiento de otros procesadores, estas acciones tienen más posibilidades de ser seleccionadas para ejecutarse.

_Esquema simplificado de funcionamiento de CERA-CRANIUM_

Este es un ejemplo muy sencillo que explica cómo funciona el bot. Sin embargo, lo normal es tener escenarios mucho más complejos en los que varios enemigos están atacando al bot simultáneamente y el enemigo al que disparar puede ser cualquiera de ellos. En estos casos, el mecanismo de atención juega un papel vital en CERA-CRANIUM, usando los contextos activos para la selección de dicho enemigo. Los perceptos que se encuentran más próximos al contexto actual tienen una mayor probabilidad de ser seleccionados y de ser procesados. Esto ayuda a mantener la coherencia en la secuencia de acciones (ver vídeo de ejemplo):

<iframe src="https://www.youtube.com/embed/qS5dywF5lIY" width="420" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

##### Trabajos Futuros

CC-Bot2 no es una implementación completa del modelo CERA-CRANIUM, el cuál incluye mucha más funcionalidad cognitiva como el aprendizaje, emociones, memoria episódica, etc. Nuestra intención es mejorar la implementación con nuevas características del modelo, con el objetivo de que CC-Bot3 sea un bot mucho más humano. También pensamos aplicar la arquitectura a otros juegos como TORCS o Mario Bros.ç

##### Referencias

Philip Hingston. [A Turing Test for Computer Game Bots](http://ieeexplore.ieee.org/xpl/freeabs_all.jsp?arnumber=5247069), IEEE Transactions on Computational  Intelligence and AI In Games, Vol. 1, No. 3, pp 169-186, September 2009.

Arrabales, R. Ledezma, A. and Sanchis, A. "[CERA-CRANIUM: A Test Bed for Machine Consciousness Research](/papers/Arrabales_IWMC2009_v26.pdf)". International Workshop on Machine Consciousness 2009. Hong Kong. June 2009.

Baars, B.J. 1988. [A Cognitive Theory of Consciousness](en/conscious-machines/theories-of-consciousness/global-workspace-theory.html): Cambridge University Press.

Arrabales, R. Ledezma, A. and Sanchis, A. "[Towards Conscious-like Behavior in Computer Game Characters](/papers/Arrabales_CIG09.pdf)", in Proceedings of the IEEE Symposium on Computational Intelligence and Games 2009 (CIG-2009) pp. 217-224. ISBN 978-1-4244-4815-9.

Muñoz, J., Arrabales, R. et al., “2K BotPrize 2010 winner bot: steps toward passing the Turing test”. Forthcoming.
