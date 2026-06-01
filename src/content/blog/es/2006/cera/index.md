---
title: "CERA"
date: 2006-11-20
categories: 
  - "conciencia-artificial"
tags: 
  - "arrabales"
  - "cera"
  - "cranium"
---

CERA (_Conscious and Emotional Reasoning Architecture_) es una arquitectura software que permite la integración de diferentes componentes cognitivos en un sistema autonomo. CERA está diseñado para ser un entorno de investigación flexible en el cual se puedan integrar y probar diferentes modelos de conciencia y emociones. Los componentes nativos de CERA se han implementado siguiendo metodologías de orientación a objetos. Los requisitos del diseño original son cumplir con la funcionalidad de los nueve módulos de la _conciencia racional_ \[1\]. Estas clases básicas se pueden extender y modificar de forma que los modelos deseado se puedan representar. Este proceso de software se denomina instanciación CERA, ya que produce una instancia específica de CERA.

En \[1\] se describe una instanciación específica llamada K-CERA (Khepera CERA), donde se han adaptado las clases básicas para el dominio específico de la exploración de un entorno desconocido con un robot Khepera.  Las clases básicas de CERA se han diseñado para integrar la conciencia racional con el resto de posibles componentes cognitivos de un modelo de la mente. CERA se estructura en una arquitectura de 3 capas.

Diseño en capas de CERA. La capa núcleo es donde se encuentran las clases base del modelo de conciencia racional. La capa de instanciación añade los sistemas cognitivos específicos del problema. Finalmente, la capa supeior contiene la definición de los sistemas sensoriales y motores específicos del agente.

La capa más interior, llamada CERA Core, contiene el modelo de conciencia racional. La siguiente capa es la de instanciación, que contiene los componentes cognitivos específicos del dominio. Sobre la capa de instanciación aparece la capa física, necesaria para adaptar los componentes cognitivos a los mecanismos sensorimotores propios del robot autónomo en cuestión.

El núcleo de CERA define el marco para implementar procesos cognitivos de forma versátil. Sin embargo, la representación del conocimiento no está definica concretamente en esta capa. Se usa una clase abstracta para definir el conocimiento a este nivel de implementación, de forma que los procesos sean independientes de la representación elegida posteriormente. Esto significa que el núcleo de CERA _per se_ nu puede ser instanciado. Se requiere una capa de instanciación a un dominio específico para construir un modelo completo. Analogamente, la capa física se necesita para implementar los sistemas de control propios del agente autónomo.

\[1\] Arrabales Moreno, R. and Sanchis de Miguel, A. "A Machine Consciousness Approach to Autonomous Mobile Robotics". In: 5th International Cognitive Robotics Workshop. AAAI-06. Boston, MA. July 2006.
