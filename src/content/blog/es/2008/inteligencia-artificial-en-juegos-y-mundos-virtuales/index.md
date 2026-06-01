---
title: "Inteligencia Artificial en Juegos y Mundos Virtuales"
date: 2008-12-10
categories: 
  - "inteligencia-artificial"
  - "videojuegos"
---

## Inteligencia Artificial (AI Bots) en Videojuegos y Mundos Virtuales

Normalmente cuando hablamos de agentes situados como el objeto de la investigación en Inteligencia Artificial o en Consciencia Artificial siempre pensamos en agentes físicos, como los típicos robots autónomos. Una de las razones por las que tendemos a usar robots físicos como parte de nuestro diseño de experimentos es porque creemos que el cuerpo físico juega un papel crucial en la inteligencia y en la consciencia.

Debido a las limitaciones de coste y tiempo, durante las fases de desarrollo solemos usar herramientas de simulación para poder probar facilmente nuestras hipótesis. Sin embargo, el objetivo final es siempre el robot físico y su aplicación correspondiente en el mundo real. Al menos esta es la conclusión obvia en el campo de la robótica.

Pero, ¿qué pasa con las aplicaciones de la IA que sólo "viven" en mundos virtuales? ¿Merecen menos atención de los campos de investigación de la IA? Recientemente estamos asistiendo a un interés creciente en aplicaciones que residen completamente dentro de mundos virtuales y de videojuegos. Algunos ejemplos relevantes son Second Life y World of Warcraft. Personalmente creo que el éxito de estos productos se basa en la interacción entre humanos (jugadores, colegas, socios, etc.). El problema es que actualmente no conseguimos tener el mismo nivel de interacción entre humanos y AI Bots (en inglés el término AI Bot se usa para designar a los agentes autónomos virtuales controlados por programas de Inteligencia Artificial).

Desde mi punto de vista, no hay duda que los AI Bots son un ejemplo de agentes situados. Si se pueden considerar como agentes con cuerpo (embodied) es otra cuestión. En cualquier caso podríamos decir que son agentes con un cuerpo virtual que responde a las leyes físicas simuladas por el correspondiente mundo virtual o videojuego.

### Recursos de desarrollo para investigación con Bots de Inteligencia Artificial

Recientemente he estado buscando entornos de simulación ricos en detalles para probar mi arquitectura de Consciencia Artificial como control de un AI Bot. Así que he confeccionado una pequeña lista de motores, SDK, y herramientas de desarrollo (ten en cuenta que no estoy considerando aquí ninguna plataforma de desarrollo para robótica como MRDS o URBI, también he excluido herramientas de desarrollo completo de juegos. Mi interés es específico en la programación de bots).

#### Videojuegos

En el campo de los videojuegos, en principio cualquier juego liberado (con el código fuente disponible) podría valer para la experimentación con jugadores autónomos basados en técnicas de IA. Un ejemplo clásico sería el famoso Quake (el [código fuente](http://www.idsoftware.com/business/techdownloads/) está disponible como GPL a través de ID Software). Para ver una lista completa de juegos liberados puedes visitar [http://liberatedgames.com/](http://liberatedgames.com/)

De todas formas, tener el código fuento no es un requisito imprescindible para programar los bots de un juego. De hecho, si queremos desarrollar bots con Inteligencia Artificial para los juegos más actuales, lo normal es que no tengamos acceso al código fuente. Sin embargo, la mayoría de los videojuegos modernos proporcionan herramientas para añadir características nuevas al juego como mapas, bots, modificaciones, etc. Algunas de estas herramientas son particularmente útiles para desarrollar interfaces externos, así podemos ejecutar la lógica de los AI bots externamente. Esto también es particularmente útil si lo que queremos es programar los bots en un lenguaje de programación distinto de el del juego.

Un buen ejemplo de esta flexibilidad es la serie Unreal Tournament de Epic Games. Este juego viene con un lenguaje de programación llamado UT Script que ha permitido a los desarrolladores escribir mutators (modificaciones y componentes adicionales para el juego).  En el caso del Unreal Tournament [GameBots mutator](http://gamebots.planetunreal.gamespy.com/) permite obtener el estado del juego y mandar comandos al servidor de juego.

El componente GameBots se ha usado para construir extensiones de API para que puedas programar tu bot usando Java o C#. Echa un vistazo a [Pogamut 2](http://artemis.ms.mff.cuni.cz/pogamut/tiki-index.php) para la programación en Java de tu Bot en UT 2004 y [UT3 .NET](http://www.codeplex.com/UT3Bots) Bots para programarlos en .NET para Unreal Tournament 3.

[ORTS](http://www.cs.ualberta.ca/~mburo/orts/) es otro tipo de ejemplo. En este caso se trata de un juego de estrategia en tiempo real. Mientras que los juegos de primera persona (FPS) son adecuados para ciertos tipos de investigación en IA, los entornos de RTS también son adecuados para sistemas multi-agente y problemas de planificación.

#### Mundos Virtuales

En realidad, los videojuegos y los mundos virtuales están muy relacionados, sobre todo si hablamos de MMOG (Massively Multiplayer Online Games - Juegos Online Multijugador Masivos). Creo que Second Life es el ejemplo más conocido. Si quieres experimentar y desarrollar aplicaciones en este entorno puedes echar un vistazo a [libsecondlife](http://www.libsecondlife.org/wiki/Main_Page).

[Multiverese](http://www.multiverse.net/index.html) también es otro producto que merece la pena mirar en este sentido. Es una plataforma para el desarrollo de mundos virtuales y MMOGs (se basa en [OGRE](http://www.ogre3d.org/), un motor de visualización gráfica de código abierto).

[realXtend](http://www.realxtend.org/) es otra plataforma de código abierto para la creación de mundos virtuales. Se basa en  [OpenSim](http://opensimulator.org/wiki/Main_Page) (un servidor de aplicaciones 3D de código abierto).
