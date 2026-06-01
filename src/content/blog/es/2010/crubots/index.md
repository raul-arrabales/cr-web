---
title: "CRUBOTS"
date: 2010-01-24
categories: 
  - "inteligencia-artificial"
  - "robots"
tags: 
  - "crubots"
---

## Utilidades de Conscious-Robots.com para Simulación de Robots

CRUBOTS es un conjunto de servicios de Robotics Develops Studio (MRDS) desarrollados como parte de una linea de investigación en Conciencia Artificial. Aunque estos servicios se desarrollaron originalmente para funcionar conjuntamente con la arquitectura cognitiva CERA-CRANIUM, se pueden reutilizar para cualquier proyecto de robótica.


Como trabajamos principalmente con el robot Pioneer 3DX, la mayoría de los servicios de simulación se han diseñado para que reproduzcan con la mayor fidelidad el robot móvil real.

CRUBOTS se distribuye como un archivo ZIP ([https://github.com/raul-arrabales/crubots](https://github.com/raul-arrabales/crubots)) que contiene el código fuente de todos los servicios MRDS. Cada servicio se encuentra en su propia carpeta bajo el directorio packages/crubots en el directorio raíz de MRDS.

Mira más abajo para ver las instrucciones específicas y una descripción de los servicios que se incluyen en CRUBOTS.

<!--more-->

A continuación se describe el conjunto de servicios que forman parte de la versión actual de CRUBOTS:

CRANIUM DASHBOARD

El servicio Cranium Dashboard se basa en el servicio Simple Dashboard que viene con MRDS y que se ha extendido (basándose en esta versión antigua) para mostrar información en tiempo real de otros sensores:  cámara del robot, sonar, parachoques y GPS. Además, la ventana de simulación está integrada en la interfaz gráfica de este servicio y ofrece la vista de la Cámara de Persecución:

<iframe src="https://www.youtube.com/embed/RcnZW3m6NuQ" width="420" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Usando el Cranium Dashboard puedes ver las lecturas de todos los sensores (incluyendo las imágenes de la cámara) y el visor de la simulación, todo en la misma interfaz de usuario (GUI) integrada.

 <img src="/legacy-images/images/sonar_control.jpg "Pioneer Sonar Representation"" alt="Pioneer Sonar Representation" />

Por ejemplo, las lecturas del sonar del robot Pioneer se pueden monitorizar tanto de forma gráfica como de forma cuantitativa.

Cada anillo SONAR del Pioneer 3DX se compone de 8 transductores dispuestos en ángulos de -90, -50, -30, -10, 10, 30, 50 y 90 grados respectivamente. Estos trasductores se muestrean secuencialmente a una tasa configurable (normalmente de 25 a 50 Hz).

La representación gráfica que aparece en el Dashboard refleja la medida de cada transductor sonar como un cono 2D (la línea roja representa la medida de distancia escalada que ha tomar el transducer sonar, el resto de las líneas azules representan la apertura de cada transducer sonar, y por lo tanto, el área que está libre de objetos de acuerdo a las lecturas del sonar.

También se puede comprobar el valor exacto de las medidas del sonar (en milímetros) . Éstos son los valores S0 a S7 que aparecen a la derecha de la representación gráfica del anillo sonar.

<img src="/legacy-images/images/bumpers_dashboard.png "Pioneer Bumpers"" alt="Pioneer Bumpers" />

También se dispone de una representación gráfica del estado de los parachoques del robot Pioneer (la figura ilustra el estado de los paneles paragolpes cuando los paneles b1 y b2 se han presionado).

La mayoría del código del Cranium Dashboard también funciona con el robot real, por lo que también se puede usar ste servicio para monitorizar y controlar el robot real.

Servicio de GPS Simulado

El servicio Simulated Pioneer GPS proporciona un servicio simple de localización para usarlo con el simulador de Robotics Developer Studio. Consiste en una simple entidad con forma de cubo (PioneerGPSEntity) que se puede incorporar a cualquier robot simulado, y un servicio (SimulatedPioneerGPS) que proporciona notificaciones indicando las coordenadas X, Y, Z actualizadas correspondientes a la situación del robot en el mundo simulado.

Más información sobre el Servicio de GPS Simulado.

Servicio de Parachoques Simulado para Pioneer 3DX

El servicio Simulated Pioneer 3DX bumper proporciona una simulación precisa de todos los paneles de contacto tanto frontales como traseros de un robot P3DX.

Más información sobre el servicio de Parachoques Simulado.

Servicio Explorer Sim Sonar

Este servicios es simplemente una modificación del servicio Explorer que viene con MRDS adaptado para usar las medidas del sonar para mapear el entorno.

Más información sobre el servicio Explorer Sim Sonar.

Servicio Maze Simulator (Simulador de Laberintos)

<img src="/legacy-images/images/maze_simulator_ra_3.jpg "Maze simulator"" alt="Simulated Maze" />El servicio Maze Simulator crea un mundo simulado en 3D construido a base de paredes a partir de una imagen de mapa de bits (bmp) en 2D. Este servicio también crea (programáticamente) un robot Pioneer 3DX simulado, equipado con una cámara frontal, un sonar frontal, parachoques frontales y traseros y un telémetro láser (LRF).

Los pícxeles del mapa de bits a color en 2D especifican la posición, color y textura de las paredes.

Más información sobre el servicio Maze Simulator (Simulador de Laberintos).

Descarga del Código Fuente

CRUBOTS y los servicios relacionados se pueden descargar de la sección MRDS 2008 R2 Services de la página de descargas de Conscious Robots.

Para cualquier pregunta, retroalimentación o comentario, se puede usar el foro de MRDS en español.
