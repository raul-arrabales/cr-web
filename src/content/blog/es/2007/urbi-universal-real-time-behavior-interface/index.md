---
title: "URBI. Universal Real-time Behavior Interface"
date: 2007-05-09
categories: 
  - "robots"
---

Era cuestión de tiempo que Microsoft Robotics Studio tuviera un competidor. El mes pasado Gostai liberó la versión 1.0 RC2 de URBI. La Release Candidate 1 se liberó justo el mismo mes (Diciembre de 2006) que Microsoft liberó su versión 1.0 de MSRS. URBI está disponible bajo licencia GPL. (MSRS también está disponible gratuitamente con una licencia de uso no comercial).

URBI es un producto que se encuadra en la misma línea que MSRS. La idea clave de este tipo de productos es ofrecer un marco genérico para la programación de aplicaciones robóticas. Y esto es algo nuevo. Estabamos acostumbrados a simuladores software, bibliotecas de programación para robots concretos o familias de robots, etc. La gran ventaja de un producto como este es que puedes centrarte en tu aplicación robótica sin preocuparte demasiado de la concurrencia, la entrada/salida asíncrona y el procesamiento distribuido. Además, un controlador para un robot escrito usando estas nuevas herramientas se puede portar fácilmente de una plataforma a otra (mientras tengamos sensores y actuadores análogos).

URBI se basa en un lenguaje script que ofrece características nuevas como paralelismo, programación dirigida por eventos y gestión de objetos remotos. Se pueden usar multitud de lenguajes con URBI ya que la funcionalidad está incluida en una biblioteca que se puede integrar en C++, Java, Matlab, Python, etc.

<!--more-->

URBI permite la importación de objetos C++ e incluso su uso remoto de forma transparente. Los objetos remotos se pueden ejecutar en Windows, Linux o Mac OSX. Para esto se usa la arquitectura conocida como UObject.

Lidiar con problemas de paralelismo y eventos es bastante común en el desarrollo de aplicaciones para robots. URBO integra la gestión de la programación de estos aspectos en la semántica de su lenguage script. Comandos como 'whenever' simplifican la tarea de la programación concurrente. Por ejemplo:

Whenever (ball.visible) { Camera.trackPosition( ball ); }

Otras características avanzadas se incluyen también en la semántica de URBI como abstracciones para la programación concurrente. Por ejemplo, los conflictos que pueden surgir en operaciones que se realizan simultáneamente se pueden manejar como especifique el programador.

Un aspecto clave de una plataforma como esta es la disponibilidad de código y de las contribuciones de una comunidad. Urbiforge ([http://www.urbiforge.com/](http://www.urbiforge.com/)) es la web desde donde se pueden descargar estos recursos. También están disponibles tutoriales y foros. Algunas bibliotecas interesantes incluyen scripts para Aibo, Lego NXT, etc.
