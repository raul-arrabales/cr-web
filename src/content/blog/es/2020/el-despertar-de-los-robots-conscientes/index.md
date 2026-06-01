---
title: "El despertar de los robots conscientes"
date: 2020-09-29
categories: 
  - "conciencia-artificial"
  - "inteligencia-artificial"
  - "sistemas-cognitivos"
  - "videojuegos"
tags: 
  - "botprize"
  - "cc-bot2"
  - "ccbot"
  - "cera"
  - "cera-cranium"
  - "cranium"
  - "turing"
---

## El equipo Conscious-Robots, ganador del concurso 2K BotPrize 2010, explica cómo está diseñado su bot.

### Publicado originalmente en AIGameDev (2010)

La mayoría de los esfuerzos actuales en el desarrollo de bots creíbles (bots que se comportan como jugadores humanos) se basan en técnicas clásicas de IA. Estas técnicas se basan en principios relativamente antiguos, que sin embargo se mejoran progresivamente o se adaptan aumentando su rendimiento para satisfacer los nuevos requisitos del juego. Desde una perspectiva diferente, el enfoque que adoptamos para el diseño de nuestro bot (CC-Bot2) fue bastante opuesto a esta tendencia. Específicamente, implementamos un modelo computacional de la Teoría del Espacio de Trabajo Global (Baars, 1988), una especie de espacio de memoria compartida donde diferentes agentes, a los que llamamos procesadores especializados, pueden colaborar y competir entre sí de forma dinámica (ver Figura 1). Creemos que la aplicación de nuevas técnicas del campo de la Conciencia Artificial también puede proporcionar buenos resultados, incluso a corto plazo.

En este artículo describimos brevemente el diseño de CC-Bot2, el bot ganador del Unreal Tournament desarrollado por el equipo de Conscious-Robots para la tercera edición del 2K BotPrize. El concurso BotPrize es una versión del test de Turing adaptada al dominio de los videojuegos de acción en primera persona (Hingston, 2009). El objetivo final del concurso es desarrollar un robot de juego de computadora capaz de comportarse de la misma manera que lo hacen los humanos. Además, se consideraría que un bot pasa la prueba de Turing (en este dominio en particular) si no se puede distinguir de los jugadores humanos.

<img src="/legacy-images/images/CC-fig1.jpg" alt="" />

## Arquitectura cognitiva CERA-CRANIUM y CC-Bot2

Fruto de nuestra línea de investigación en Conciencia Artificial hemos desarrollado una nueva arquitectura cognitiva denominada CERA-CRANIUM (Arrabales et al. 2009), que ha sido la base para el desarrollo de CC-Bot2 (CERA-CRANIUM Bot 2). CERA-CRANIUM es una arquitectura cognitiva, diseñada para controlar agentes autónomos, como robots móviles físicos o bots de Unreal Tournament, y basada en un modelo computacional de conciencia. La principal inspiración de CERA-CRANIUM es la teoría del espacio de trabajo global (Baars, 1988). CC-Bot2 es una implementación Java de la arquitectura CERA-CRANIUM desarrollada específicamente para la competencia 2K BotPrize.

CERA-CRANIUM consta de dos componentes principales (consulte la Figura 2):

- CERA, una arquitectura de control estructurada en capas, y
- CRANIUM, una herramienta para la creación y gestión de grandes cantidades de procesos paralelos en espacios de trabajo compartidos.

Como explicamos a continuación, CERA utiliza los servicios que brinda CRANIUM con el objetivo de generar procesos de percepción altamente dinámicos y adaptables orquestados por un modelo computacional de conciencia.

 

<img src="/legacy-images/images/CC-fig2.jpg" alt="" />

**Básicamente, en términos de controlar un bot, CERA-CRANIUM proporciona un mecanismo para sincronizar y orquestar varios procesadores especializados diferentes que se ejecutan simultáneamente.**

Estos procesadores pueden ser de muchos tipos, por lo general son detectores para determinadas condiciones sensoriales, como el procesador del "detector que se acerca al jugador", o son generadores de comportamiento, como el procesador "huir de ese matón".

## CERA

CERA es una arquitectura cognitiva en capas diseñada para implementar un sistema de control flexible para agentes autónomos. La definición actual de CERA está estructurada en cuatro capas (ver Figura 3): capa de servicios sensoriales-motores, capa física, capa específica de misión y capa central. Como en las arquitecturas clásicas de subsunción de robots, a las capas superiores se les asigna un significado más abstracto; sin embargo, la definición de capas en CERA no está directamente asociada a comportamientos específicos. En cambio, administran cualquier procesador especializado que opere en los tipos de representaciones que se manejan en ese nivel en particular, es decir, la capa física se ocupa de las representaciones de datos estrechamente relacionadas con los datos sensoriales sin procesar, mientras que la capa de la misión se ocupa de representaciones más orientadas a tareas de alto nivel.

**La capa de servicios sensoriomotores** de CERA comprende un conjunto de servicios de comunicación e interfaz que implementan el acceso requerido tanto a las lecturas del sensor como a los comandos del actuador. Estos servicios proporcionan a la capa física una interfaz de acceso uniforme a la maquinaria física (o simulada) del agente. En el caso de CC-Bot2, la capa sensorial-motora de CERA es básicamente una capa de adaptación a Pogamut 3.

**La capa física** de CERA contiene los sensores y actuadores del agente en representaciones de bajo nivel. Además, de acuerdo con la naturaleza de los datos sensoriales adquiridos, la capa física realiza la preparación y el preprocesamiento de los datos. Se implementan mecanismos análogos en este nivel con comandos de actuador, asegurándose, por ejemplo, de que los parámetros de comando estén dentro de los límites de seguridad. La representación que hemos utilizado para los datos sensoriales y los comandos en la capa física CC-Bot2 es, en la mayoría de los casos, en realidad la de Pogamut 3, como “el jugador apareció en mi campo de visión” o “Me están dañando”.

**La capa específica de la misión** CERA produce y gestiona contenido sensorial-motor elaborado relacionado con los comportamientos vitales del agente y misiones particulares (en el caso de un juego de combate a muerte, la misión es relativamente clara y simple). En esta etapa, los contenidos individuales adquiridos y preprocesados ​​por la capa física se combinan en piezas de contenido más complejas, que tienen algún significado específico relacionado con los objetivos del agente (como "este jugador es mi enemigo" o "el enemigo x me está atacando"). La capa específica de la misión se puede modificar independientemente de las otras capas CERA de acuerdo con las tareas asignadas y las necesidades de integridad funcional del agente. La capa central de CERA, el nivel de control más alto de CERA, incluye un conjunto de módulos que realizan funciones cognitivas superiores. La definición y la interacción entre estos módulos se puede ajustar para implementar un modelo cognitivo particular. En el caso de CC-Bot2, la capa central contiene el código para el mecanismo de atención (se podrían agregar muchos otros módulos en el futuro). El objetivo principal de estos módulos centrales es regular la forma en que funcionan las capas inferiores de CERA (la forma en que los procesadores especializados funcionan e interactúan entre sí).

<img src="/legacy-images/images/CC-fig3.jpg" alt="" />

Las capas físicas y específicas de la misión se caracterizan por la inspiración en las teorías cognitivas de la conciencia, donde grandes conjuntos de procesos paralelos compiten y colaboran en un espacio de trabajo compartido en la búsqueda de una solución global. En realidad, un agente controlado por CERA está dotado de dos espacios de trabajo ordenados jerárquicamente que operan en coordinación con el objetivo de encontrar dos soluciones globales e interconectadas: una relacionada con la percepción y la otra relacionada con la acción. En resumen, CERA tiene que dar respuesta a las siguientes preguntas de forma continua:

- ¿Cuál debe ser el siguiente contenido de la percepción consciente del agente?
- ¿Cuál debe ser la siguiente acción a ejecutar?

Las arquitecturas típicas de control de agentes se centran en la segunda pregunta y descuidan la primera. Aquí argumentamos que se requiere un mecanismo adecuado para responder la primera pregunta a fin de responder con éxito a la segunda pregunta de una manera similar a la humana. De todos modos, ambas preguntas deben responderse teniendo en cuenta los criterios de operación de seguridad y la misión asignada al agente. En consecuencia, se espera que CERA encuentre respuestas óptimas que eventualmente conducirán a un comportamiento similar al humano. Como se explica a continuación, CRANIUM se utiliza para la implementación de los espacios de trabajo que cumplen con las necesidades establecidas por la arquitectura CERA.

 

## CRANIUM

CRANIUM proporciona un subsistema en el que CERA puede ejecutar muchos procesos concurrentes asincrónicos pero coordinados. En la implementación CC-Bot2 (Java), CRANIUM se basa en un despachador de tareas que crea dinámicamente un nuevo hilo de ejecución para cada procesador activo. Un espacio de trabajo CRANIUM puede verse como una implementación particular de un pandemonio, donde los demonios compiten entre sí por la activación. Cada uno de estos demonios o procesadores especializados está diseñado para realizar una función específica en ciertos tipos de datos. En un momento dado, el nivel de activación de un procesador en particular se calcula en base a una estimación heurística de cuánto puede contribuir a la solución global que se busca actualmente en el espacio de trabajo. Los parámetros de hormigón utilizados para esta estimación son establecidos por la capa central de CERA. Como regla general, el funcionamiento del espacio de trabajo de CRANIUM se modula constantemente mediante comandos enviados desde la capa central de CERA.

En CC-Bot2 utilizamos dos espacios de trabajo CRANIUM separados pero conectados integrados dentro de la arquitectura CERA. El espacio de trabajo de nivel inferior se encuentra en la capa física CERA, donde los procesadores especializados se alimentan con datos provenientes de los servicios de sensores CERA (Pogamut). El segundo espacio de trabajo, ubicado en la capa específica de la misión CERA, está poblado con procesadores especializados de nivel superior que toman como entrada la información proveniente de la capa física o la información producida en el espacio de trabajo en sí (ver Figura 4). El flujo de información perceptual se organiza en paquetes denominados percepciones únicas, percepciones complejas y percepciones de misión.

<img src="/legacy-images/images/CC-fig4.jpg" alt="" />

Además del flujo de abajo hacia arriba que involucra procesos de percepción, un flujo de arriba hacia abajo tiene lugar simultáneamente en los mismos espacios de trabajo para generar las acciones del bot. Los espacios de trabajo de la capa física y la capa específica de la misión incluyen acciones individuales (traducidas directamente a comandos de Pogamut), comportamientos simples y comportamientos de misión (ver Figura 5).

<img src="/legacy-images/images/CC-fig5.jpg" alt="" />

Una de las diferencias clave entre los flujos ascendentes y descendentes de CERA-CRANIUM es que mientras las percepciones se componen de forma iterativa para obtener representaciones más complejas y significativas, los comportamientos de alto nivel se descomponen de forma iterativa hasta que se obtiene una secuencia de acciones atómicas. El flujo de arriba hacia abajo podría considerarse, hasta cierto punto, equivalente a los árboles de comportamiento, en el sentido de que los comportamientos están asociados a contextos o ámbitos dados. Sin embargo, la forma en que CERA-CRANIUM selecciona la siguiente acción es bastante diferente, ya que la capa CERA Core actualiza periódicamente el contexto activo actual. Al mismo tiempo, el contexto activo se calcula en base a la entrada del flujo sensorial ascendente. Tener un mecanismo de contexto activo implica que fuera del conjunto de posibles acciones que potencialmente podrían ejecutarse; sólo se seleccionará para su ejecución el que se encuentre más cerca del contexto activo. En la siguiente subsección, describimos cómo se genera el comportamiento del agente utilizando este enfoque.

 

### Generación del comportamiento

Tener un espacio de trabajo compartido, donde convergen los flujos sensoriales y motores, facilita la implementación de los múltiples circuitos de retroalimentación necesarios para un comportamiento adaptado y efectivo. El comportamiento simple ganador se enfrenta continuamente a nuevas opciones generadas en la capa física, proporcionando así un mecanismo para interrumpir comportamientos en curso tan pronto como ya no se consideren la mejor opción. En términos generales, la activación o inhibición de los procesos de generación de percepción y comportamiento es modulada por CERA según el modelo cognitivo de conciencia implementado. En otras palabras, a los comportamientos se les asigna un nivel de activación según su distancia al contexto activo en términos del espacio sensoriomotor disponible. Sólo la acción más activa es la que se ejecuta al final de cada “ciclo cognitivo”.

La distancia a un contexto dado se calcula en función de criterios sensoriales como la ubicación relativa y el tiempo. Por ejemplo, si tenemos dos acciones: Acción A: "disparar a la izquierda" y Acción B: "disparar a la derecha", y un contexto activo apuntando al lado izquierdo del bot (porque hay un enemigo allí), Lo más probable es que la acción A se seleccione para su ejecución, y la acción B se descartará o se mantendrá en la cola de ejecución (aunque no sea demasiado antigua).

La Figura 6 muestra una representación esquemática de bucles de retroalimentación típicos producidos en la arquitectura CERA. Estos bucles se cierran cuando el bot percibe las consecuencias de las acciones, lo que desencadena respuestas adaptativas en diferentes niveles.

<img src="/legacy-images/images/CC-fig6-1.jpg" alt="" />

La curva (a) de la Figura 6 representa el ciclo de retroalimentación que se produce cuando se activa un reflejo instintivo. La curva (b) de la figura 6 corresponde a una situación en la que un comportamiento específico de la misión se está realizando de forma inconsciente. Finalmente, la curva (c) simboliza el circuito de control de nivel superior, en el que se realiza una tarea conscientemente. Estos tres tipos de lazos de control no son mutuamente excluyentes; de hecho, las mismas percepciones contribuirán típicamente a que se produzcan bucles simultáneos en diferentes niveles.

Los espacios de trabajo CRANIUM no son mecanismos pasivos de memoria a corto plazo. En cambio, su funcionamiento se ve afectado por una serie de parámetros del espacio de trabajo que influyen en la forma en que funciona el pandemonio. Estos parámetros se establecen mediante comandos enviados a capas físicas y específicas de la misión desde la capa central de CERA. En otras palabras, mientras CRANIUM proporciona el mecanismo para combinar funciones especializadas y así generar representaciones significativas, CERA establece una estructura jerárquica y modula los procesos de competencia y colaboración de acuerdo con el modelo de conciencia especificado en la capa central. Este mecanismo cierra el ciclo de retroalimentación entre la capa central y el resto de la arquitectura: la entrada de la capa central (percepción) está determinada por su propia salida (modulación del espacio de trabajo), que a su vez determina lo que se percibe.

 

### La implementación CC-Bot2

En la siguiente lista se describen brevemente algunos de los principales procesadores especializados implementados en CC-Bot2 (tenga en cuenta que varios procesadores que realizan la misma tarea pero que utilizan diferentes técnicas pueden coexistir en el mismo espacio de trabajo).

Cada uno de los siguientes elementos de la lista especifica: (1) Nombre del Procesador especializado, (2) Capa CERA en la que se encuentra, (3) Tarea asignada.

* * *

_**AttackDetector**_ (físico) Para detectar condiciones compatibles con los ataques enemigos (disminución del nivel de salud, fuego enemigo, etc.).

**_EvitarObstáculo_** (físico) Generar un comportamiento simple de evitación de obstáculos.

**_BackupReflex_** (físico) Generar un movimiento de respaldo simple en respuesta a una colisión inesperada.

**_ChasePlayer_** (Misión) Generar un comportamiento de jugador perseguidor complejo.

**_EnemyDetector_** (físico) Detectar la presencia de un enemigo en función de determinadas condiciones, como la detección previa de un ataque y la presencia de otros jugadores utilizando sus armas.

**_GazeGenerator_** (físico) Generar un simple movimiento de la mirada dirigida hacia el foco de atención.

_**JumpObstacle**_ (físico) Generar un simple movimiento de salto para evitar un obstáculo.

_**KeepEnemiesFar**_ (Misión) Generar un movimiento de fuga complejo para maximizar la distancia a enemigos detectados.

**_UbicaciónAlcanzada_** (física) Para detectar si el bot ha alcanzado la posición espacial marcada como ubicación del objetivo.

_**MoveLooking**_ (físico) Generar un movimiento complejo combinando mirada y locomoción.

_**MoveToPoint**_ (físico) Generar un simple movimiento hacia una ubicación determinada.

_**DetectorObstáculos**_ (físico) Para detectar la presencia de un obstáculo (que podría impedir que el bot siga su camino).

_**NavegaciónAleatoria**_ (física) Generar un movimiento errante aleatorio complejo.

_**RunAwayFromPlayers**_ (Misión) Generar un movimiento complejo para huir de ciertos jugadores.

_**SelectBestWeapon**_ (Misión) Para seleccionar la mejor arma disponible actualmente.

_**SelectEnemyToShoot**_ (Misión) Decidir quién es el mejor enemigo al que atacar.

* * *

En nuestra implementación actual, los procesadores especializados se crean mediante programación (consulte el código de muestra a continuación) y también se asignan dinámicamente a su capa CERA correspondiente. Nuestra intención es crear un mecanismo más elegante para que el programador defina el diseño de los procesadores (archivo de texto de configuración o incluso una GUI).

```
[…]
// ** ATTACK DETECTOR *
// Generates a BeingDamaged percept every time the health level decreases
_CeraPhysical.RegisterProcessor( new AttackDetector() );
// ** OBSTACLE DETECTOR **
// Generates a Obstacle single percept if there is any obstacle in the
// direction of the movement
_CeraPhysical.RegisterProcessor( new ObstacleDetector() );
// ** EMEMY DETECTOR **
// Generates a Enemy Attacking complex percept every time the bot is
// being damaged and possible culprit/s are detected.
_CeraMission.RegisterProcessor( new EnemyDetector() );
[…]
```

## El Bot de Conscious-Robots en acción

El siguiente es un extracto de un flujo típico de percepciones que, en última instancia, genera el comportamiento del bot (consulte la Figura 7):

1. El procesador EnemyDetector detecta un nuevo enemigo y crea una nueva percepción de "enemigo detectado".
2. La percepción de “enemigo detectado” es a su vez recibida por el procesador SelecEnemyToShoot, que se encarga de seleccionar al enemigo para disparar. Cuando se selecciona un enemigo, se genera la acción de fuego correspondiente.
3. Dos procesadores reciben la acción del fuego, uno encargado de apuntar al enemigo y disparar, y otro que crea nuevas acciones de movimiento para evitar el fuego enemigo.
4. Como las nuevas acciones de movimiento tienen más prioridad que las acciones activadas por otros procesadores, como el procesador RandomMove, es más probable que estas acciones se ejecuten.

<img src="/legacy-images/images/CC-fig7.jpg" alt="" />

Este es un ejemplo muy simple de cómo funciona el bot. Sin embargo, es habitual tener escenarios mucho más complejos en los que varios enemigos están atacando al bot simultáneamente, y el objetivo seleccionado puede ser cualquiera de ellos. En estos casos, el mecanismo de atención juega un papel clave. CERA-CRANIUM implementa un mecanismo de atención basado en contextos activos. Es más probable que las percepciones que están más cerca del contexto activo en ese momento sean seleccionadas y procesadas más. Esto ayuda a mantener secuencias de acciones más coherentes.

El siguiente video muestra al bot en acción: [https://www.youtube.com/watch?v=9pmYPROqoxM](https://www.youtube.com/watch?v=9pmYPROqoxM)

## Trabajo futuro

CC-Bot2 es en realidad una implementación parcial del modelo CERA-CRANIUM. Nuestro modelo de conciencia de la máquina incluye muchas más funciones cognitivas que no se han implementado hasta ahora. Nuestro objetivo es potenciar la implementación actual con nuevas características como un modelo de emociones, memoria episódica, diferentes tipos de mecanismos de aprendizaje e incluso un modelo del yo. Después de un arduo trabajo, esperamos que CC-Bot3 sea un bot mucho más humano. También planeamos usar el mismo diseño para otros juegos como TORCS o Mario.

Aunque CC-Bot2 no pudo pasar completamente la prueba de Turing, logró la calificación más alta de humanidad (31,8%). A día de hoy, una máquina nunca ha logrado la inteligencia del nivel de prueba de Turing. Todavía queda un largo camino por recorrer para construir agentes artificiales que sean lo suficientemente inteligentes como para igualar el comportamiento humano. No obstante, creemos que estamos trabajando en una línea de investigación muy prometedora para lograr este ambicioso objetivo.

### Agradecimientos

Deseamos agradecer a Alex J. Champandard por sus útiles sugerencias y comentarios sobre los borradores de este artículo.

### Referencias

Philip Hingston. Una prueba de Turing para robots de juegos de computadora, transacciones IEEE sobre inteligencia computacional e inteligencia artificial en juegos, vol. 1, núm. 3, págs. 169-186, septiembre de 2009.

Arrabales, R. Ledezma, A. and Sanchis, A. "CERA-CRANIUM: A Test Bed for Machine Consciousness Research". International Workshop on Machine Consciousness 2009. Hong Kong. June 2009.

Baars, B.J. 1988. Una teoría cognitiva de la conciencia: Cambridge University Press (Acerca de GWT).

Arrabales, R. Ledezma, A. y Sanchis, A. "Towards Conscious-like Behavior in Computer Game Characters", en Proceedings of the IEEE Symposium on Computational Intelligence and Games 2009 (CIG-2009) pp. 217-224. ISBN 978-1-4244-4815-9.
