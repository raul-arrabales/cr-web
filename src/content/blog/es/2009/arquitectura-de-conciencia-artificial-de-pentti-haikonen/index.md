---
title: "Arquitectura de Conciencia Artificial de Pentti Haikonen"
date: 2009-12-20
categories: 
  - "conciencia-artificial"
  - "investigadores"
tags: 
  - "haikonen"
---

**Arquitectura de Conciencia Artificial de Pentti Haikonen** **Trung Doan (doanviettrung a\_t gmail dot com).** **(traducción a español: Raúl Arrabales)**

La contribución de Pentti Haikonen al reto de la conciencia artificial es una arquitectura basada en principios cognitivos. Haikonen también ha desarrollado algunos microchips electrónicos como un primer paso para la construcción de máquinas basadas en esta arquitectura.

A continuación veremos como la máquina de Haikonen podría cobrar conciencia una vez construida, analizando algunas de sus capacidades cognitivas, aprovechando este proceso para analizar brevemente la arquitectura de Haikonen.

#### La máquina de Haikonen percibe

Imaginemos que las cámaras de la máquina de Haikonen están enfocadas hacia una pelota amarilla. El patrón de píxeles de la cámara alimenta un circuito preprocesador que produce un vector de, digamos, 10.000 señales, cada señal es transportada, por ejemplo, por un cable. Un cable es la salida del atributo “redondez” de la circuitería del preprocesador, en este caso la señal indica “Encendido” (On). Otro cable, correspondiente a la circuitería que detecta la “cuadradez”, estaría en “Apagado” (Off), por ejemplo, no teniendo voltaje alguno. Un grupo de cables es la salida de la circuitería de análisis de espectro de frecuencias. El cable correspondiente a frecuencias que los humanos reconocemos como “amarillo” está Encendido mientras que los cables “rojo”, “azul”, etc. están Apagados. Habría muchos otros grupos de cables representando tamaño, brillo, bordes, etc.

La máquina no representa internamente la pelota como un gráfico redondo, tampoco como un conjunto de números que indican diámetro, color, etc. si no a través de este vector de señales. Haikonen llama a esto una “representación basada en señales distribuidas”.

Supongo que a la máquina se le presentan varias pelotas de diferentes tamaños, colores, etc. una en cada instante, y cada vez su micrófono oye un patrón de sonido que los humanos entendemos como la palabra “pelota”. Debido a que aparecen al mismo tiempo repetidamente, la máquina asocia el patrón de sonido al patrón visual. El proceso de percepción de la máquina se lleva a cabo mediante la construcción de este tipo de asociaciones.

Después de que las diferentes pelotas se asocien con el patrón de sonido, la máquina finalmente aprende a asociar el patrón de sonido “pelota” con cualquier cosa que sea redonda.

<!--more-->

La máquina aprende, tiene memoria y recuerda

_**Una nota de atención**_: esta sección es un poco dura, pero una vez entendida le dará una idea completa de la arquitectura y capacidades cognitivas de la máquina de Haikonen.

Para la máquina asociativa de Haikonen, el aprendizaje, la fijación en memoria y el acto de recordar son simplemente algunos aspectos diferentes de los muchos que tiene la única cosa que hace la máquina: asociaciones.

Cuando se oye la pronunciación de la palabra “pelota”, el circuito preprocesador fonético traduce las vibraciones del sonido a un vector de señales que aparecen en su salida. De nuevo, este es un conjunto de, digamos 1.000 líneas, entre las cuales algunos cables indican la varias frecuencias harmónicas detectadas por el analizador de frecuencias del circuito, y algunos otros cables indican los patrones temporales, etc. Este vector de señales se difunde a un gran número de “grupos de neuronas”, algunos de los cuales almacenarán este patrón de señal usando uno de los dos siguientes métodos:

## El método de circulación

Algunos grupos de neuronas almacenan la pronunciación de la palabra “pelota” de esta forma: cada línea de entrada alimenta directamente una colección de varias docenas de transistores, diodos, etc., (una “neurona” de Haikonen en este “grupo de neuronas”) y aparece en la salida. Por lo tanto, estas 1.000 salidas provenientes de las neuronas tienen el patrón de Encendidos y Apagados (On y Off) de la pronunciación de “pelota”. Pero este patrón no desaparece cuando el preprocesador procesa la siguiente pronunciación. Cada señal de salida, por construcción, se re-cablea hacia atrás a su propia entrada. Así el patrón simplemente circula indefinidamente hasta que alguna señal externa de control apaga la señal.

El método anterior es válido para memorias de capacidad limitada y de corto espacio de tiempo. Es muy caro porque cada memoria ocupa un grupo de neuronas por completo mantiene su circuito funcionando sin parar. Otro método, adecuado para memoria a largo plazo y grandes cantidades de datos, está relacionado con el aprendizaje y usa “sinapsis” como se explica a continuación.

## El método sináptico

Aparte de la colección de transistores y diodos mencionada anteriormente, una neurona típica también tiene miles de líneas de entrada, cada una procedente de otra neurona de un grupo de neuronas localizado en alguna otra parte. El trabajo de estas miles de líneas de entrada es ayudar a la neurona a decidir si pasa la señal de entrada principal a la salida. Cada una de estas miles de “entradas asociativas” se conecta a la neurona a través de un transistor que juega el rol de una “sinapsis”. Cada vez que la señal de entrada principal y una particular señal asociativa se encienden o se apagan al mismo tiempo, su transistor de sinapsis se alimenta con más y más voltaje. Después de un número suficiente de veces consecutivas, la salida del transistor de sinapsis se queda permanentemente en voltaje positivo. De esta forma la neurona ha aprendido a asociar una entrada asociativa con su entrada principal a través de esta sinapsis de entrada asociativa. Las puntuaciones de otras entradas asociativas pueden hacer lo mismo a través de sus propias sinapsis. A partir de ahora, cuando la entrada asociativa de cualquiera de estas sinapsis esté Encendida, la neurona querrá encenderse. Cuantas más sinapsis activas halla, más probabilidad de que la neurona de una salida positiva.

Por ejemplo, si esta neurona tiene 15.000 entradas asociativas y 500 de ellas tienen sinapsis que se han quedado en Encendido (On), entonces con una entrada asociativa mandando una señal de Encendido a su sinapsis, la neurona intentará encenderse (ponerse a On), y con 500 entradas asociativas en On, la neurona se pondrá también en On (a no ser que se inhiba con alguna señal de control externa). Cuando la neurona se enciende (se pone en On), produce un pulso de salida como el que hay en la señal de entrada principal que se usó durante el periodo de aprender-a-asociar.

Considere ahora un grupo de neuronas entre todos aquellos que reciben la difusión del preprocesador fonético. Este grupo tiene 1.000 neuronas recibiendo como entradas principales a las 1.000 líneas de salida del preprocesador fonético. Viniendo desde diversas fuentes también hay 15.000 entradas asociativas que se conectan a cada una de las neuronas de este grupo de neuronas (como en el ejemplo anterior). A diferencia de muchos otros, sin embargo, este grupo de neuronas en particular recibe sus entradas asociativas desde, entre otras fuentes, el preprocesador visual (el cual toma 10.000 de las 15.000 líneas de entrada asociativas). Por lo tanto, asocia los patrones visuales de la pelota con los patrones fonéticos de la pronunciación de la palabra “pelota”, gracias a sinapsis relevantes (parte de las 15 millones de sinapsis del grupo de neuronas – 15.000 \* 1.000) que se encuentran encendidas (en On).

A partir de ahora, cuando las 10.000 entradas asociativas anteriores llevan la representación visual de una pelota, el grupo de neuronas se enciende, produciendo el patrón de pronunciación de la palabra “pelota”. Digamos que este patrón consiste en 1.000 líneas, de las cuales 270 líneas particulares están encendidas y las otras 730 están en Off. Son las 270 neuronas relevantes del grupo de neuronas encendidas y las otras 730 apagadas las que producen este patrón. De esta forma, por el método sináptico anterior, esta pronunciación se almacena y luego se recuerda por asociación.

## El grupo de neuronas versátil

¿Pueden otros patrones, aparte de la representación visual de la pelota, evocar la representación de la pronunciación de la palabra “pelota” por medio del grupo de neuronas descrito anteriormente? Sí, sí pueden. Digamos que entre las 5.000 entradas asociativas restantes del grupo de neuronas, 500 vienen de un circuito preprocesador de los sensores de la piel de la mano derecha. Si una pelota se pusiera repetidamente en esta mano mientras la palabra “pelota” se pronuncia, este grupo de neuronas habría establecido una asociación y ahora el patrón correspondiente de sensores de la piel activaría las 270 neuronas anteriores para activar esta representación de la pronunciación.

¿Puede este mismo grupo de neuronas almacenar y recordar patrones de salida fonéticos distintos de la palabra “pelota”? Sí, sí puede. Las 270 neuronas de antes encendiéndose producirán la representación de la pronunciación de “pelota”, pero otras 270, o 681, etc. neuronas encendiéndose producirán otros patrones. Teóricamente podría haber 2 (cada línea es On u Off) elevado a la potencia de 1.000 (líneas) patrones de salida diferentes. Sin embargo, el número práctico será mucho menor para evitar interferencias entre patrones y para evitar que haya un único elemento de fallo (no poner todos los huevos en la misma cesta (grupo de neuronas)).

##### La máquina puede hablar y tiene habla interior

Si el patrón de pronunciación anterior se lleva al circuito de vocalización de la máquina de Haikonen, el altavoz del circuito puede producir el patrón de sonido que nosotros reconocemos como la palabra “pelota”.

Incluso si el patrón se lleva a la salida del circuito de preprocesamiento fonético, entonces el efecto es similar a la máquina oyendo la pronunciación, con la salvedad de que lo que está oyendo es su “habla interior”.

#### Redefiniendo la percepción: Como la memoria ayuda a la percepción.

Incluso si la máquina de Haikonen no hace nada, pero dirige la mirada y escucha al mundo, continuamente almacena cosas en su memoria y construye su conocimiento del mundo.

Ha almacenado su representación de una pelota amarilla. Si hubiera visto una pelota azul, la memoria visual la hubiera almacenado también, junto con una memoria episódica referente a cuando la vio. Si hubiera visto una pelota rodando, este elemento de conocimiento general también se hubiera almacenado.

Cada vez que la máquina detecta una pelota, su representación interna instantánea del objeto se difunde a lo largo de todo el cerebro y esto evoca todas sus otras representaciones que tienen que ver con pelotas. Juntas, representan el conocimiento del mundo de la máquina de Haikonen y al evocarlas es como la máquina percibe.

Compare esto: un ordenador con una cámara conectada ve una pelota amarilla. El patrón de pixeles se procesa para detectar bordes, etc. Al final se producen conjuntos de números que representan diámetro, tamaño, etc. Si este es un ordenador de control de calidad en una línea de producción de pelotas, comprueba si la “redondez”, diámetro, etc. están dentro de las especificaciones. Entonces ejecuta sentencias Si-Entonces (If-Then) para decidir qué hacer. Esto es lo que los unos y los ceros hacen.

Cuando una máquina de Haikonen joven ve una pelota amarilla, lo que los unos y los ceros de su electrónica hacen es evocar patrones que representan “he visto esto antes”, “miedo de las pelotas lanzadas al aire”, “también he visto una pelota azul”, “he visto una pelota rodando”, “he oído la palabra pelota”. Según acumula experiencia en la vida, hace deducciones y toma decisiones, se crean más representaciones, almacenadas y ahora evocadas: “antes toqué la pelota accidentalmente con la mano, y así rueda”, “por lo tanto la mano puede hacerla rodar”, etc.

Haikonen llama a esto percepción con “significado fundado“ (grounded meaning), es decir, los significados están fundados en el mundo real.

##### La máquina percibe su propio cuerpo e interior

Suponiendo que sus manos y su piel están dotadas de sensores de contacto, cuando sus manos tocan su piel se producen dos conjuntos de señales que permiten a la máquina deducir que lo que está siendo tocado es su propia piel, en vez de algo externo a ella. De igual modo, pronto en la vida cognitiva de la máquina de Haikonen, cuando sus manos se mueven en frente de sus cámaras, su cámara descubriría, como pasa en los bebés cuando descubren sus manos y sus pies, que el objeto no pertenece al mundo exterior si no que manda las sensaciones cerebrales desde dentro.

El circuito de preprocesamiento de la batería también proporcionará un vector de señales de salida. Al procesarlo se obtiene una percepción del propio nivel de energía de la máquina. Esto se añade también a la colección de todos los perceptos que el cerebro electrónico tiene acerca de su propio cuerpo, desde la piel a las manos, pasando por el estado interno.

##### La máquina imagina

La máquina de Haikonen puede fácilmente imaginar cosas que nunca ha observado. Por ejemplo, habiendo aprendido lo que es una pelota amarilla y habiéndola visto rodas cuesta abajo, la próxima vez que vea (o que piense en) una pelota amarilla, puede imagina una pelota de color diferente o una pelota rodando cuesta arriba. Esta imaginación se produce de la siguiente forma:

La representación de señales distribuidas “pelota amarilla” evoca otra representación de señales distribuidas “pelota”, pero la señal “amarilla” en el vector de señales se apaga y otra señal se enciende. O la secuencia “bola rodando” se evoca desde memoria y entonces la máquina invierte la secuencia temporal.

##### La máquina tiene un flujo de imágenes mentales

Digamos que la cámara de la máquina está enfocando una pelota amarilla que hay en frente de ella. Desde lejos, todo lo que vemos es una máquina cuyas cámaras incorporadas enfocan una pelota. No parece hacer mucho más. Pero si miramos más detenidamente, un análisis del cerebro electrónico de la máquina (observando las señales con sondas que el fabricante de la máquina ha conectado a las líneas de comunicación del cerebro) revelará una gran actividad que tiene lugar a lo largo de todo el cerebro. Lo primero que pasa es que emerge un patrón de señales de circuito de preprocesado de la cámara, cuyas líneas “redondez” y “amarillo”, entre otras, están encendidas. Lo siguiente es el patrón de sonido “pelota”, el conocimiento de la “bola rodando” y la memoria visual de una “pelota azul” que ha sido vista con anterioridad, etc. Entonces todas estas representaciones pueden evocar otras relacionadas: el conocimiento “rueda más deprisa bajando una cuesta más empinada”, la imaginación de “la pelota rodando cuesta arriba”, la imaginación de “varias pelotas rodando juntas”, etc.

Digamos que previamente alguien ha lanzado una pelota amarilla contra la máquina dañando su piel. Como parte de la construcción de la máquina, se le instaló una regla “Si te enfrentas a algo que tiene capacidad potencial de causar daño, entonces estate preparado para huir”. El patrón de la pelota amarilla evoca de la memoria el episodio del encuentro infeliz. A su vez este patrón también condicionará a los motores de la máquina a moverla hacia atrás por medio de una evocación asociativa de una representación de señales distribuidas que prime ese movimiento. Esta reacción a su vez causará resultados que algunos sensores internos comunicarán al cerebro (un sensor de motor reporta que se está produciendo una corriente alta, el sensor de freno reportará tensión en los frenos, etc.).

La primera ola de evocaciones asociativas provenientes de la circuitería de procesamiento visual, las evocaciones producidas a su vez por éstas, la siguiente ola de evocaciones y así sucesivamente, como se ha ejemplificado anteriormente, constituyen el flujo de imágenes mentales de la máquina.

Una vaca también tiene probablemente un flujo limitado de imágenes mentales, evocadas por puñados de hierba. Pero si la vaca no sabe nada de este flujo, entonces no es consciente. ¿Sabe la máquina de Haikonen que tiene ese flujo, o al menos parte de él? Lo veremos más adelante.

##### La máquina tiene emociones

En cualquier momento dado, en cualquier situación, un gran número de representaciones de señales distribuidas están activas debido a información de sensores, evocada o imaginada. Muchas tienen lugar ahora mismo. Sabemos que la máquina debería prestar más atención a la posibilidad de que la pelota sea lanzada hacia ella, en vez de imaginar pelotas púrpuras inexistentes que ruedan cuesta arriba. Pero, ¿cómo sabe eso la máquina? La parte principal de la respuesta en casos como este son las emociones.

Haikonen establece los principios para las emociones como una combinación de reglas globales y reglas a nivel neuronal.

Las reglas a nivel neuronal son sobre Coincidencia, Incongruencia y Novedad. Digamos que la máquina está observando una pelota amarilla y no pasa nada más. El grupo de neuronas procesando este vector de señales produce una señal de salida “Coincidencia” además del propio vector de señales de salida. Esto sucede porque el vector de señales que alimenta las entradas asociativas representa la pelota amarilla vista una fracción de segundo antes, y esta entrada asociativa coincide con el vector de entrada principal. Ahora la pelota empieza a alejarse. Inmediatamente después de que la pelota empieza a moverse el nuevo vector de entrada es diferente de (más pequeño que) el patrón de la entrada asociativa, generándose una señal Incongruencia, por lo menos durante un momento, atrayendo la atención. Si ahora la máquina mira a una caja cuadrada, algo que nunca ha visto, entonces la entrada asociativa no contiene nada. Con nada con lo que comparar, el grupo de neuronas produce una señal Novedad en la salida.

Aparte de las señales Coincidencia, Incongruencia y Novedad, la máquina también tiene reglas para construir su capacidad de saber qué es el dolor y qué es el placer, además de saber qué es bueno y qué es malo. Algunas reglas son de la forma: “el dolor es malo”, “desgarros en los sensores de la piel es dolor” y “evitar cosas malas”. Otro conjunto de reglas, que se evocan cuando la batería se está cargando, son como sigue: “un aumento en el nivel de la batería es placer”, “el placer es bueno” y “si siento placer, seguir haciéndolo”.

En la naturaleza, se supone que estas reglas vienen de la evolución, donde individuos y especies con esas reglas han prosperado y las han pasado a sus descendientes. No está claro si la máquina de Haikonen puede aprender estas reglas por evolución o deben ser programadas por el constructor de la máquina. Lo primero sería más satisfactorio.

Juntas, estas reacciones a las emociones de la máquina y sus comportamientos asociados – desde el Miedo (Malo y Dolor => Retirarse) pasando por la curiosidad (Bueno y Novedad => Acercarse) hasta el deseo (Bueno y Placer => Acercarse), etc.

##### La máquina presta atención a lo que es importante para ella

Los patrones de memoria que representan un episodio pasado infeliz “una pelota lanzada rasga la piel” no se almacenan de forma neutral. Lo que se almacena no es sólo las representaciones internas de la pelota, la memoria visual de la pelota volando hacia la máquina y los reportes de los sensores de la piel. También se almacena el hecho de que el reporte de daños en la piel era Dolor, y que esto era Malo, además de las reacciones de retirada de la máquina en ese momento.

Todas estas representaciones se agrupan juntas. Las representaciones del Dolor y lo Malo dan a los patrones de memoria un alto valor con significado emocional. Este alto significado emocional, cuando los patrones de memoria anteriores son evocados por los patrones de la pelota amarilla, lleva al cerebro de la máquina a prestarles un alto grado de atención. Esto significa que estos patrones estén activos más tiempo, los voltajes de los vectores de señales permanecen altos, mientras que otros vectores de señales (como la imaginación de la “bola morada rodando cuesta arriba”) se diluyen.

Debido a su naturaleza asociativa, prácticamente cualquier patrón de señales en el cerebro evocará cualquier otro, siendo el resultado una enorme colección de vectores de señales activados. Si la máquina no selecciona un subconjunto al que prestar atención, probablemente estaría soñando despierta todo el día. El significado emocional es un factor modulador de la atención.

Una nota acerca del “todo evoca todo lo demás” comentado anteriormente: si cada representación posible (un conocimiento, imaginación o movimiento particular) se pensara como un punto y dibujáramos líneas conectando los puntos que están relacionados, entonces esto sería como un “gráfico de una red social”. Se dice que los gráficos de redes sociales humanas tienen un grado de separación 6. Es probable que este gráfico sin embargo sea mucho más denso, con un grado de separación mucho menor. Prácticamente cualquier cosa evocaría rápidamente cualquier otra.

##### La máquina tiene introspección

Hasta ahora las entradas del proceso de percepción proceden de sensores que miden información externa (por ejemplo, la cámara) o información interna (por ejemplo, una articulación). Pero, ¿y si los diversos vectores de señales que fluyen por el cerebro (como las salidas de los procesos de percepción, evocados provenientes de la memoria o construidos por procesos de imaginación) se conectaran a la entrada de los procesos de percepción? Nada impide esto y de hecho la arquitectura de Haikonen lo promueve.

El resultado es que los grupos de neuronas de percepción de la máquina no sólo ayudan a percibir el mundo exterior sino que también el hardware interno del cuerpo, ayudando a iniciar el flujo de imágenes mentales como se ha descrito anteriormente. Estos circuitos además permiten percibir el propio flujo. Esto es introspección. Es la máquina percibiendo y examinando su propio flujo mental. A diferencia de la vaca o de un ordenador convencional, la máquina percibe lo que está pasando en su propio cerebro.

##### ¿Es consciente la máquina de Haikonen?

La afirmación de que hay conciencia en la máquina de Haikonen comienza con su habilidad de percibir tanto el mundo exterior como su cuerpo. Cada uno de estos perceptos tiene un significado fundado en el mundo.

Además tiene un flujo de imágenes mentales en su cerebro electrónico, y quizás lo más importante es que percibe ese flujo mediante la re-entrada de imágenes mentales en los circuitos involucrados en la percepción.

¿Y si la máquina puede hablar y contarnos cuál es su flujo mental y su percepción del mismo?

Haikonen tiene una teoría para que la máquina aprenda a comprender el lenguaje natural (el aprendizaje de la palabra “pelota” mencionado anteriormente es un ejemplo). Esta teoría también permite que la máquina forme frases elementales tales como “pelota redonda” o “pelota no morada”. No sabemos si esta es una base suficientemente buena para que la máquina crezca – en términos cognitivos – hasta que un día diga por sus propios medios “hay un flujo de imágenes mentales dentro  y puedo percibirlo”. Pero ni siquiera los niños de preescolar dicen frases tan sofisticadas.

Aparentemente, la máquina de Haikonen es capaz de mostrar un comportamiento que en algunos aspectos los humanos interpretan como emocional o motivado (por ejemplo, retirarse de las causas de dolor o dirigir la mirada de las cámaras hacia sucesos inesperados). Si miramos dentro, podemos ver que sus motores se tensan en respuesta al miedo, podemos sondar el cerebro para comprobar que el mismo está realizando introspección y podemos reconocer patrones mentales como las emociones del miedo, la curiosidad, la sorpresa, etc. Pero si sólo podemos observar su comportamiento externo, ¿descartaremos que simplemente se trate de un ordenador no consciente ejecutando las instrucciones de su programa? Quizás menos exigentes en su evaluación si lo vemos venir apresuradamente, coger nuestro cargador del móvil e intentar usarlo para cargar su batería sedienta de energía.

##### La máquina de Haikonen en la escala ConsScale

{mosimage} Si la conciencia es una característica binaria (de todo o nada) y el umbral no se pone muy alto al nivel de un humano adulto, entonces la máquina de Haikonen es consciente. Si la conciencia es una propiedad continua, entonces poniendo la máquina de Haikonen en la escala [ConsScale](/es/pages/recurso-descatalogado/) de Raúl Arrabales ésta se colocaría alrededor de las 6 en punto en el gráfico de ConsScale, puntuando por debajo del nivel de los niños pequeños, y posiblemente paralela al nivel de algunos animales de los cuales sospechamos que tienen una conciencia mínima.

{mosimage} Una vez dicho esto, la teoría de Haikonen no muestra claramente un camino para que emerja el concepto de “Yo”. Seguramente la máquina puede percibir el mundo, su cuerpo, su flujo mental. Si ve que una persona tras otra se señala a si misma diciendo “Yo”, probablemente pueda deducir que cada persona es un “Yo”. Delante de un espejo probablemente pueda reconocerse a sí misma, ¿sabría entonces que las percepciones y emociones que suceden son sus propios qualia? Haikonen se acerca tentadoramente a esto, pero no ha proporcionado el paso final para responder a esta pregunta inequívocamente.

Para una respuesta definitiva tendremos que esperar hasta que una máquina de Haikonen de acero y silicio se construya, se desarrolle a través de su aprendizaje y crezca cognitivamente. Construir la máquina es un reto extremadamente complicado desde los puntos de vista ingenieril e intelectual. Un reto que requiere una actitud como la citada en la página principal de la web de Haikonen, “Sólo lo imposible es suficientemente difícil”.

##### Referencias

• Pentti O Haikonen: The Cognitive Approach to Conscious Machines. Imprint Academic, UK 2003 • Pentti O Haikonen: Robot Brains; circuits and systems for conscious machines. Wiley and Sons, UK 2007 • Haikonen's website at [http://personal.inet.fi/cool/pentti.haikonen/](http://personal.inet.fi/cool/pentti.haikonen/)

(Es mejor ir directamente al libro Robot Brains porque muchos conceptos del libro de 2003 se repiten aquí. Si algunos de los diagramas que muestran puertas AND y diodos dan un poco de miedo, simplemente ignóralos. Tengo suerte de tener el libro de la tesis doctoral de 1999 de Haikonen de la Universidad de Tecnología de Helsinki, de hecho creo que es el mejor, pero no está disponible en Internet).

\- Reseña del libro: Robot Brains.

\- Escala Cognitiva de Conciencia: [ConsScale](/es/pages/recurso-descatalogado/).
