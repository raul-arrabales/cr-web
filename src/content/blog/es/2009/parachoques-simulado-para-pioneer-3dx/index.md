---
title: "Parachoques Simulado para Pioneer 3DX"
date: 2009-02-18
categories: 
  - "robots"
---

# Servicio SimulatedPioneerBumper

Microsoft Robotics Studio viene con un modelo simulado del robot Pioneer 3DX que se puede usar en el entorno de simulación visual. Este robot simulado se puede equipar con varios sensores simulados, como el LRF o el bumper simulado. Normalmente, los paragolpes del P3DX se modelan como simplemente un sensor de contacto frontal y otro trasero. Sin embargo, el robot Pioneer real suele venir con dos anillos de paragolpes, cada uno con 5 paneles de contacto:

## Introducción

Dada la necesidad de usar un modelo más exacto de los sensores reales, hemos estado trabajando en servicios adicionales de simulación, como el [servicio de Sonar Simulado](/es/blog/2009/servicio-de-sonar-simulado/).  En este caso, queríamos simular de forma precisa los anillos de paragolpes frontal y trasero de la base Pioneer Arcos. El servicio Simulated Pioneer Bumper modela los 10 paneles usando 10 cajas tridimensionales situadas aproximadamente a la misma posición que corresponde a los paragolpes del robot real. Vea las cajas que respresentan los sensores de contacto en las siguientes figuras:

**NOTA:**  _los "boxshapes" distribuidos alrededor del robot se usan para calcular las colisiones físicas con otros elementos del mundo virtual. Por lo tanto, la modificación de sus posiciones afectaría al comportamiento físico del robot._

## Descarga del Servicio (Código fuente)

- [Source Code Download](http://www.conscious-robots.com/en/download/software-components-for-robotics/simulatedpioneerbumper-service/details.html) (for Microsoft Robotics Studio 1.5)
    
- [Source Code Download for Robotics Developer Studio 2008](http://www.conscious-robots.com/es/descargas-./services-for-robotics-developer-studio-2008/index.php).
    

## Instrucciones de Instalación

Descarga el archivo ZIP y descomprímelo en el directorio raíz de MSRS. Se supone que el directorio raíz es:

_**C:\\Microsoft Robotics Studio (1.5)**_

Cuando se descomprime el archivo, se crea un proyecto en el directorio Apps\\UC3M bajo la instalación de MSRS:

_**Apps\\UC3M\\SimulatedPioneerBumper**_

Si quieres recompilar el proyecto, abrelo y usa la función rebuild:

_**msbuild Apps\\UC3m\\SimulatedPioneerBumper\\SimulatedPioneerBumper.sln**_

## Descripción

El servicio SimulatedPioneerBumper crea una entidad visual que modela los paneles de paragolpes frontales y traseros de un robot Pioneer. Adicionalmente, el servicio implementa el contrato genérico de sensor de contacto. Por lo tanto, se puede usar desde cualquier servicio que trate con sensores de contacto. Este servicio enviará notificaciones a sus servicios suscritos cada vez que los paragolpes entren en contacto con cualquier superficie del mundo simulado.

El estado de este servicio mantiene un conjunto de 10 sensores de contacto, identificados por los nombres:  b1, b2, b3, b4, b5, b9, b10, b11, b12 y b13 como se muestra a continuación:

Los bumpers frontales y traseros del Pioneer 3 DX proporcionan puntos de percepción y lecturas individuales por cada panel de contacto, los cuales se pueden reproducir en el entorno de simulación de Robotics Studio gracias a este servicio. Cada panel mide unos 10 cm x 2.5 cm de ancho. Los segmentos se distribuyen alrededor del robot en ángulos de  -52, -19, 0, 19, and 52 grados, tal y como se muestra en la siguiente figura:

Sin embargo, hemos modificado ligeramente estas dimensiones y orientaciones para adaptar los paragolpes al modelo del robot Pioneer que viene con Robotics Studio.

Además, hemos añadido una representación gráfica de los paragolpes en el servicio CRANIUM Dashboard. La siguiente figura muestra como los paneles del paragolpes frontal b1 y b2 están presionados, mientras que los demás están libres:

## Licencia

Este programa se distribuye bajo los términos de la licencia Creative Commons Reconocimiento - No Comercial - Compartir Igual 3.0 Unported; puedes redistribuirlo y modificarlo de acuerdo a sus términos y condiciones:

**Reconocimiento - No comercial - Compartir igual:** Este programa puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de licencia que el trabajo original.

Este programa se distribuye con la intención de que sea útil, pero sin ninguna garantía para ningún propósito particular.

[<img src="/legacy-images/images/cc.png" alt="Creative Commons License" />](http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es)
