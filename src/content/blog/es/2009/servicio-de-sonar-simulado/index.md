---
title: "Servicio de SONAR Simulado"
date: 2009-02-18
categories: 
  - "robots"
---

El servicio de SONAR Simulado proporciona acceso a un anillo sonar simulado. Usa los mecanismos de trazado de rayos del simulador de Robotics Studio para simular los transductores Sonar. Usando este servicio puede probar la detección de objetos y la medición de distancias con un robot simulado en el entorno visual de MSRS.

**Introducción:**

Los robots basado en ARCOS (como el Pioneer P3-DX) pueden integrar hasta cuatro anillos Sonar, cada uno con ocho transductores. La plataforma Robotics Studio no incluye un servicio de Sonar Simulado que pueda usarse en el entorno visual (como es el caso del LRF). Sin embargo, sí que existe un contrato genérico para un sensor Sonar que quería implementar para el caso específico de un anillo frontal Sonar para el robot simulado Pioneer 3 DX.

**NOTA:** También hay disponible un servicio de Sonar real para ARCOS (no simulado): http://www.conscious-robots.com/es/robotics-studio/robotics-studio-services/arcos-sonar-service.html

 Con respecto a la simulación del Sonar esta es la sugerencia por parte de Microsoft:

_"puedes hacer un sensor sonar simulado haciendo algo similar al telémetro laser. En vez de lanzar cientos de rayos en un patrón como el del laser, configura un manojo de rayos en un cono que coincida con la apertura del sensor sonar que quieres simular. En tu código, mira los resultados de las distancias devueltas por cada rayo y configura el valor de retorno del sonar como la intersección más cercana."_

He escrito un servicio llamado SimulatedSonar intentando seguir estas instrucciones - El código fuente está disponible en la sección de descargas.

**NOTA:** La versión actual del Sonar Simulado no genera un cono 3D usando el trazado de rayos. En su lugar se genera una sección en 2D para calcular la intersección más cercana. Por lo tanto, el robot simulado sólo "ve" en un plano 2D (situado a la altura del dispositivo Sonar). Con el objetido de simular con más exactitud el sensor Sonar hay que pasar a una representación 3D. También se debería añadir ruido para modelar mejor un sonar real.

Puedes suscribirte a este servicio SimulatedSonar desde tu aplicación y así obtener facilmente lecturas sonar en tu código MSRS (en principio este código vale para cualquier robot simulado, sólo necesitas añadir la entidad a tu robot y configurar los parámetros y la posición del Sonar).

**Descarga del Servicio:**

- [Source Code download](http://www.conscious-robots.com/en/download/software-components-for-robotics/simulated-sonar-beta1/details.html) (for MSRS 1.5).
    
- [Source Code Download](http://www.conscious-robots.com/es/descargas-./services-for-robotics-developer-studio-2008/index.php) (for Microsoft Robotics Developer Studio 2008).
    

**Instrucciones de Instalación (para el archivo zip con el código fuente):**

SimulatedSonar es un pequeño servicio DSS (Servicio de Robotics Studio) que te permite acceder a las lecturas de un Sonar Simulado para el robot Pioneer 3 DX. El archivo zip contiene el código fuente y el proyecto de Visual Studio.

Descomprime los contenidos del archivo en el directorio raíz de MSRS. El código fuente se encuentra bajo el directorio Apps\\UC3M. Compílalo usando Visual Studio.

Mira el fichero readme.txt incluido en el paquete de distribución para ver instrucción detalladas  y la historia de versiones anteriores. Es importante que instales el servicio en la misma versión de MSRS que se indica en el fichero readme.txt. Siempre intento actualizar todas las distribuciones con la última versión disponible de MSRS, por favor comprueba regularmente las actualizaciones.

**Detalles del Servicio:**

**Identificador de Contrato:**     _http://www.conscious-robots.com/2007/07/simulatedsonar.html_

**Contrato Genérico Implementado:**     _Microsoft.Robotics.Services.Sonar_

**Servicios Asociados:**     _Subscription Manager_

**Permite Suscripciones:** Sí_._

**Estado del Servicio:** _Microsoft.Robotics.Services.Sonar.Proxy.SonarState_

**Descripción:**

El anillo frontal Sonar del Pioneer 3 DX está compuesto de ocho transductores colocados en ángulos de -90, -50, -30, -10, 10, 30, 50 y 90 grados. Su estado se consulta secuencialmente a una cadencia configurable (normalmente 25 Hz - 50 ms. por transductor por anillo).

El servicio Simulated_Sonar_ pretende simular un Sonar real por medio de los mecanismos de trazado de rayos disponibles en el simulador de MSRS. El anillo frontal de Sonar del P3DX abarca 180 grados. Pero los transductores laterales están centrados a 90 grados, por lo que considero una apertura de 196 grados. Considerando una apertura de cono de 16 grados (los trasductores hardware reales del P3DX tienen una apertura de 15 grados):

_\_state.AngularRange = 196;  // 180 plus two halfs of lateral transducers._

Usando los mecanismos de trazado de rayos genero un rayo por grado formando una proyección en 2D de cada cono. Por ello, sólo considero los rayos que caen dentro de los ángulos cubiertos por cada transductor Sonar (las mediciones obtenidas por el resto de rayos se descartan ya que pertenecen a los ángulos muertos entre los transductores), y para cada transductor cojo la intersección más cercana (la distancia mínima). Ver figura: los rayos azules representan las medidas que se descartan. Los rayos rojos corresponden a las medidas tomadas por cada transductor Sonar. El punto amarillo simula la posición del dispositivo sonar (el origen de todos los rayos).

Cuando las medidas obtenidas de los rayos (que corresponden a las medidas simuladas obtenidas por los transductores sonar) experimentan un cambio sustancial, el servicio SimulatedSonar envía un mensaje Replace a todos sus suscriptores notificando el cambio de estado.

Dentro del objeto SonarState, se crea un vector de ocho posiciones de tipo double. Este vector (array), llamado _DistanceMeasurements\[\]_ contiene las lecturas de distancias correspondientes a los transductores sonar simulados.
