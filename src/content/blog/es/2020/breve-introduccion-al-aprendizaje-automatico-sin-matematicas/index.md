---
title: "Breve Introducción al Aprendizaje Automático (sin matemáticas)"
date: 2020-11-28
categories: 
  - "inteligencia-artificial"
tags: 
  - "aprendizaje"
  - "aprendizaje-automatico"
---

<img src="/legacy-images/images/a-2729781_1280-1024x512.png" alt="Machine Learning" />

### La disciplina del Aprendizaje Automático (**_Machine Learning_**) se centra en el estudio y el desarrollo de **algoritmos que aprenden a partir de los datos**.

* * *

Para entender cómo funciona el Aprendizaje Automático, **es preciso conocer primero el concepto de algoritmo**. Tengamos en cuenta que hay muchos tipos de algoritmos, pero no todos son capaces de generar aprendizaje. Veremos a continuación qué entendemos por algoritmo en general, para luego pasar a descubrir qué tienen de especial los algoritmos que aprenden.

Un algoritmo no es otra cosa que **una serie de instrucciones (como una receta de cocina)** que, en el caso de la informática, pueden ser ejecutadas por un ordenador:

<img src="/legacy-images/images/ML-fig1-es.png" alt="" />

Es decir, un algoritmo no es otra cosa que una especie de “inteligencia preprogramada”. Al igual que una receta de cocina contiene la información necesaria para hacer, por ejemplo, una tortilla de patata. En este caso, el esquema sería:

<img src="/legacy-images/images/ML-fig2-es.png" alt="" />

Del ejemplo anterior se deriva claramente que, si no tengo patatas ni huevos, por muy buenas recetas que tenga, no voy a obtener una tortilla de patatas. Por eso, en el mundo del análisis de datos, le damos mucha más importancia a la calidad del dato que a los algoritmos en sí mismos.

Aunque hay diferentes tipos de instrucciones que un ordenador puede ejecutar, podemos simplificar pensando que la mayoría de las instrucciones son simplemente reglas. Las reglas suelen tener la siguiente forma:

```
SI ES CIERTO QUE (<condición>) ENTONCES 
    HACER (<acción 1>) 
SI NO 
    HACER (<acción 2>) 
```

En nuestro ejemplo de receta para hacer tortilla de patatas, podríamos encontrarnos con reglas de este estilo:

```
SI ES CIERTO QUE (<Las patatas ya están doradas>) ENTONCES
    HACER (<Sacar las patatas de la sartén>)
SI NO 
   HACER (<Dejar las patatas friendo>)
```

Por supuesto, hay muchas otras formas más complejas de expresar reglas, así como de especificar condiciones y acciones, pero no hace falta que entremos en detalle. Lo importante es que **un conjunto de reglas bien escritas y en el orden adecuado** constituyen un algoritmo que **sirve para automatizar un proceso**.

Podríamos, por ejemplo, querer **automatizar el proceso de personalización de anuncios** en una página web, de forma que a los usuarios que estén navegando con un móvil Android se les muestre una oferta de un nuevo móvil de la marca Samsung y a los usuarios que estén navegando con otro sistema operativo se les muestre un anuncio de un nuevo móvil de la marca Apple:

```
SI ES CIERTO QUE (<usuario usa Android>) ENTONCES
    HACER (<Mostrar anuncio Samsung>)
SI NO 
   HACER (<Mostrar anuncio Apple>)
```

La regla anterior, constituye en sí misma un algoritmo. Es un algoritmo de una sola regla. Como te puedes imaginar, existen algoritmos mucho más complejos, de miles o millones de reglas. En cualquier caso, **este tipo de algoritmos no aprenden**, simplemente **están compuestos de reglas fijas y preprogramadas**. Es decir, la inteligencia que muestran tiene su origen en la persona que originalmente escribió las reglas.

### Si tienes un problema para el cual conoces bien las reglas que hay que aplicar para obtener la solución, entonces no necesitas Aprendizaje Automático.

Simplemente necesitas que alguien programe la receta (el algoritmo). Por ejemplo, si un analista de banca analiza los datos de los últimos préstamos concedidos y observa que el 94% de los clientes que ganaban menos de 700 Euros al mes no devolvieron el préstamo, simplemente tendrá que escribir esta regla:

```
SI ES CIERTO QUE (<el cliente gana menos de 700 EUR>) ENTONCES
    HACER (<Denegar el préstamo>)
SI NO 
   HACER (<Continuar con el análisis de riesgo>)
```

Obviamente la regla anterior no es infalible, de hecho, la estadística nos dice que este algoritmo se equivocará un 6% de las veces (basándonos en la experiencia de que esta regla se cumple en el 94% de las ocasiones). Pero bueno, quizás un porcentaje de 94% de aciertos es asumible para tu negocio. En ese caso, ya has terminado, no necesitas aplicar Aprendizaje Automático. Te es suficiente con las reglas que conoces para ejecutar un algoritmo que te ayude a tomar decisiones.

Entonces, ¿Cuándo tiene sentido aprovechar la potencia del Aprendizaje Automático?

1. Cuando no conoces a priori las reglas o el patrón que te ayudaría a tomar una decisión o a automatizar un proceso.
2. Cuando las reglas o condiciones cambian constantemente y, por lo tanto, no te daría tiempo a estar programando a mano las reglas que son más efectivas en cada momento.

En otras palabras, **el aprendizaje es una función que permite a los seres inteligentes adaptarse a un medio cambiante y complejo**. Si tu problema de negocio es más o menos estable, bien conocido y relativamente simple, no necesitas aprender, puedes seguir indefinidamente aplicando las mismas reglas que te han servido en el pasado. En ese caso, lo inteligente es seguir la tradición, te sirve con seguir aplicando una y otra vez la receta clásica.

Sin embargo, por suerte o por desgracia, vivimos en un mundo complejo y cambiante. Precisamente por esa razón los humanos necesitamos de nuestra propia función de aprendizaje. Las reglas que nos sirvieron ayer, hoy ya no nos proporcionan los mismos resultados. En el ámbito de los ecosistemas digitales sucede algo similar. Por ejemplo, para realizar una personalización efectiva de los contenidos de una página web o de una aplicación móvil, **ya no basta con aplicar una serie de reglas preprogramadas**. Obviamente, se puede hacer así, o incluso puedo ofrecer un contenido estático e idéntico para todos los usuarios, pero quizás eso no sea muy inteligente…

Es en este contexto en el que se aplica el Aprendizaje Automático, cuando **ya no me sirve una inteligencia preprogramada, sino que necesito una inteligencia que se autoprograme**. En este sentido, los algoritmos de Aprendizaje Automático no son otra cosa que algoritmos cuya salida son más reglas, no resultados:

<img src="/legacy-images/images/ML-fig3-es.png" alt="" />

La gran diferencia es que **el algoritmo de Aprendizaje Automático genera otro algoritmo (al que llamamos “modelo”)**, que no es otra cosa que un conjunto nuevo de reglas. Lo interesante es que **estas nuevas reglas no han sido escritas ni preprogramadas por un humano**, sino que han sido directamente calculadas por otro algoritmo.

Comprender en detalle cómo es posible que un algoritmo aprenda por si solo requiere conocimientos avanzados de estadística, matemáticas e informática. Por eso el perfil profesional que se dedica a realizar estas tareas – el/la científico de datos – suele tener una formación técnica muy avanzada. Sin embargo, podemos resumir, a nivel intuitivo, cuáles son las reglas que ejecuta el propio algoritmo de aprendizaje automático, es decir, **las reglas preprogramadas generadoras de nuevas reglas aprendidas**:

```
REPETIR INDEFINIDAMENTE: 
   SI ES CIERTO QUE (<hay "regla buena" para este caso>) ENTONCES
      HACER (<aplicar dicha regla>)
   SI NO 
      HACER (<generar nueva "Regla al Azar en Pruebas" (RAP)>)
      HACER (<obtener el resultado de aplicar la RAP>)
      SI ES CIERTO QUE (<el resultado de RAP es bueno>) ENTONCES
         HACER (<guardar RAP para usar en casos similares>)
      SI NO
         HACER (<descartar esta regla>)
```

En resumen, los algoritmos de Aprendizaje Automático siguen los mismos principios que muchos animales, incluidos los humanos: cuando no saben qué hacer, hacen algo al azar, es decir, **usan una estrategia de “prueba y error”**. Cuando lo que hacen les sale bien, tienden a repetirlo, mientras que las acciones que resultan en fracaso intentan no repetirlas. Por esta razón, cuando actuamos como educadores, premiamos aquellas conductas de otros que nos gustan y castigamos aquellas otras que no nos parecen adecuadas. De esta forma, la persona, animal o máquina que recibe los premios y los castigos puede ir adecuando sus reglas aprendidas (su modelo interno).

Para finalizar, veamos cómo quedaría el algoritmo de aprendizaje en algunos casos concretos de personalización de anuncios en una página web:

```
[CASO DE EJEMPLO 1: usuario de género masculino de 19 años]
- Paso 1. En el modelo ya hay una regla que coincide con este caso. 
- Paso 2. Seleccionar regla 997237 almacenada en el modelo. 
- Paso 3. Ejecutar regla 997237 ("si el género es masculino y la edad menor de 25 años entonces mostrar anuncio de videojuego" -> PREMIO). 
- Paso 4. Obtener el resultado de la regla (el usuario hace clic en el anuncio). 
- Paso 5. Aumentar la prioridad de la regla 997237.

-----------------------

[CASO DE EJEMPLO 2: usuario de género femenino de 34 años]
- Paso 1. En el modelo no ya hay una regla que aplique a esta situación.
- Paso 2. Inventar nueva regla al azar (RAP-324351). 
- Paso 3. Ejecutar regla RAP-324351 ("si el genero es femenino y la edad mayor de 30 años entonces mostrar el anuncio de coche de radiocontrol"). 
- Paso 4. Obtener el resultado de la regla (el usuario abandona la página -> CASTIGO).
- Paso 5. Descartar la regla RAP-324351.

```

En el primer caso, el modelo (o conjunto de reglas ya aprendidas) contenía una regla que se ajustaba a la situación y por lo tanto se realizó la acción que en otras ocasiones había funcionado bien. En el segundo caso, el modelo no tenía ninguna regla ajustada a la situación, por lo que se optó por generar una regla al azar para ser evaluada.

Después de miles y miles de interacciones de este tipo, en las que el algoritmo recibe información sobre el éxito de reglas auto-programadas, contaremos con un modelo que en la mayoría de los casos sabe qué hacer y además hace lo más adecuado (siempre que hayamos contado con un buen conjunto de situaciones de entrenamiento, es decir, con una buena educación).
