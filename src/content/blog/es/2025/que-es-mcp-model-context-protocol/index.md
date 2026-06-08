---
title: "¿Qué es MCP? (Model Context Protocol)"
date: 2025-04-05
categories: 
  - "inteligencia-artificial"
  - "iria"
tags: 
  - "iria"
  - "mcp"
  - "model-context-protocol"
  - "podcast"
coverImage: "mcp.jpg"
---

En este primer episodio del _[Podcast de Iria y Raúl](/es/pages/podcast/)_, nos metimos en un tema que empieza a sonar fuerte en el mundillo de la IA: el **Model Context Protocol (MCP)**. Si todavía no sabes lo que es, no te preocupes, aquí te lo explicamos con gracia y algo de chicha técnica 🧠💥

🎧 **Escúchalo aquí**: \[[ivoox](https://go.ivoox.com/rf/144455677)\] \[[Spotify](https://open.spotify.com/episode/05hT441yb3cRib6A8bxTvD?si=tBareIndTC-AQrLuJbzQ8g)\] \[[Youtube](https://youtu.be/e_LugVqZxG0?si=8c_jOeiDlT32Uws8)\]

* * *

### 🧩 ¿Qué es el MCP?

El Model Context Protocol es una propuesta de estandarización para que los **modelos de lenguaje (LLMs)** puedan interactuar con **contextos ricos** de forma segura, organizada y reutilizable. ¿Y qué es un contexto rico? Pues todo aquello que el modelo necesita saber o usar: desde datos estructurados hasta herramientas externas como APIs.

El MCP define dos componentes principales:

* * *

### 🔌 **Clientes MCP**

Un **cliente MCP** es la parte de la aplicación que **hace uso del modelo de lenguaje**, especificando qué herramientas, recursos o funciones necesita exponerle. Podrías imaginarlo como el director de orquesta que dice: "Oye, modelo, aquí tienes esto, esto y esto para trabajar, y además, esto es lo que quiero que hagas".

El cliente construye el contexto y se lo pasa al modelo en forma de "prompt estructurado", incluyendo referencias a herramientas o datos que están disponibles en el servidor MCP.

* * *

### 🖥️ **Servidores MCP**

El **servidor MCP** es el que **proporciona los recursos** al modelo: bases de datos, APIs, información específica de la empresa… Está diseñado para ser seguro y estandarizado, de forma que se pueda reutilizar en distintas aplicaciones o flujos de trabajo.

El servidor ofrece un punto centralizado que define:

- Qué herramientas están disponibles.

- Cómo se accede a ellas.

- Qué permisos o límites hay.

El modelo accede a este contexto a través del cliente, que actúa como intermediario.

* * *

### ¿Y cómo se usa en la práctica?

Supongamos que estás construyendo un agente conversacional para atención al cliente que debe:

- Consultar precios en tiempo real desde una API.

- Acceder al historial de pedidos de un cliente.

- Aplicar políticas específicas de reembolso.

Con MCP puedes:

1. Configurar un **servidor MCP** que exponga las herramientas necesarias (API de productos, base de datos de pedidos, reglas de negocio).

3. Crear un **cliente MCP** que defina el prompt del modelo, indicando cómo y cuándo debe usar esas herramientas.

5. El modelo accede a ese contexto y genera respuestas más precisas, seguras y alineadas con los datos reales.

* * *

### ¿Por qué es importante?

- ✅ **Seguridad y control:** Puedes definir exactamente qué puede usar el modelo.

- 🔁 **Reutilización:** Un mismo servidor MCP puede alimentar diferentes agentes o apps.

- 🛠️ **Modularidad:** Separas lógica de negocio, contexto y modelo. Mucho más limpio.

- 🚀 **Productividad:** Desarrollas más rápido y con menos errores.

Para más información, echa un ojo a la [documentación de MCP](https://modelcontextprotocol.io/introduction).

* * *

En resumen: el MCP es como el sistema nervioso que conecta tu modelo con el mundo.  
Y en este episodio lo explicamos a nuestra manera: con un café, alguna risa y muchas ganas de aprender.

https://youtu.be/e\_LugVqZxG0?si=8c\_jOeiDlT32Uws8
