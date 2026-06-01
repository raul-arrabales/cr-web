---
title: "MobileRobots Pioneer 3 (P3 DX)"
date: 2007-06-28
categories: 
  - "robots"
tags: 
  - "p3dx"
---

El Pioneer 3 DX es una base robótica de MobileRobots Inc. (ActivMedia Robotics). Este robot con ruedas se ha actualizado en su versión P3-DX8 para llevar cargas de forma más robusta y mejorar la autonomía.

Aunque el P3-DX ofrece la opción de ordenador empotrado se puede equipar con un ordenador portátil normal gracias a la carga permitida de 23 Kg. Obiamente, el ordenador empotrado es una solución más robusta y elegante, sin embargo, también es una opción mucho más cara. La principal desventaja de usar un ordenador portátil como ordenador de a bordo es la pérdida de superficie para colocar otros sensores y actuadores que se podrían instalar en ese lugar (ver imágenes más abajo).

Igual que otros robots de MobileRobots, el P2DX8 está basado en un modelo cliente-servidor que proporciona una serie de bibliotecas y utilidades para aplicaciones inteligentes (los robots actúan como los servidores). No entraré en detalles sobre esta arquitectura ya que estoy más interesado en usar Microsoft Robotics Studio para controlar estos robots. Volveremos sobre este tema de nuevo cuando hablemos sobre el desarrollo de software para esta plataforma robótica.

Las principales características hardware de esta unidad son: comunicaciones basadas en ethernet (opcional), laser (opcional), hasta 252 watios-hora de baterías intercambiables en caliente (que por cierto añaden bastante peso al robot), anillo frontal de 8 sensores sonar, anillo posterior de 8 sensores sonar (opcional), dos motores independientes, 2 ruedas de 19 cms. y una rueda de giro libre. Velocidad máxima de 1.6 m/s. Otras opciones interesantes son los parachoques, pinzas, visión, rangefinders, brújula, etc.

Los nuevos robots Pioneer 3 tienen un microporcesador RISC Renesas de 32 bits SH2-7144, e incluyen un microcontrolador P3-SH con ARCOS. ARCOS es el software cliente servidor que hace de interfaz para el control del robot. Si quieres desarrollar tus propias aplicaciones de control tienes que hablar con el interfaz ARCOS. Yo particularmente no estoy interesado en usar un interfaz o plataforma específico como ARCOS, prefiero usar un entorno de desarrollo común como MSRS. Desde luego, ARCOS sigue ahí, porque los servicios de MSRS finalmente llaman a la interfaz ARCOS, así que el control del robot se realiza en última instancia llamando a la API nativa.

Otro componente software de alto nivel que viene con todas las plataformas de MobileRobots es ARIA (Interfaz Avanzado de Aplicaciones Robóticas). ARIA es un entorno de desarrollo basado en C++ que proporciona soporte para comunicaciones TCP/IP con el robot. Las típicas aplicaciones disponibles a través de ARIA son: mapeo, teleoperación, monitorización, etc. Como dije antes, no voy a entrar en más detalles sobre ARCOS y ARIA porque mi interés se centra en MSRS.

El siguiente vídeo muestra un P3-DX explorando el entorno de forma autónoma:

<iframe src="https://www.youtube.com/embed/bfvlAaSLas0" width="420" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Los manuales y otros documentos están disponible en: http://robots.mobilerobots.com/docs/
