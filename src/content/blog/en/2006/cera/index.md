---
title: "CERA"
date: 2006-11-17
categories: 
  - "machine-consciousness"
tags: 
  - "arrabales"
  - "cera"
  - "cranium"
---

CERA (Conscious and Emotional Reasoning Architecture) is a software architecture that allows the integration of different cognitive components into a single autonomous system. It is designed to be a flexible research framework in which different consciousness and emotion models can be integrated and tested. The CERA native components have been already implemented following the object oriented design methodology. Original design requirements are to fulfil nine modules of reasoning consciousness and their associated functionality \[1\]. These foundation classes can be extended and modified in a way that the desired models are represented and interrelated. This software engineering process is called CERA instantiation, as it produces a domain specific instance of CERA.

An instantiation called K-CERA (Khepera CERA) is described in \[1\], where we have adapted the foundation classes for the specific domain of unknown environment exploration using the Khepera robot. CERA foundation classes are designed to integrate reasoning consciousness with the rest of possible cognitive components of a model of the mind. CERA is structured in a three-layer architecture.

CERA layered design. The core layer is where the reasoning consciousness model foundation classes are located. Then, the instantiation layer adds the domain-specific cognitive systems. Finally, the top layer encloses the agent-specific perception and motor systems.

The inner layer, called CERA Core, encloses the reasoning consciousness model. Next layer is the instantiation layer, which contains the domain-specific cognitive components as discussed above. On top of the instantiation layer, an additional so called physical layer is required to adapt the cognitive components to the actual sensorimotor machinery of the autonomous robot.

The CERA core, which comprises the reasoning consciousness modules, defines a framework for implementing versatile cognitive processes. However, the knowledge representation is not concretely defined in this layer. An abstract knowledge class is used in CERA core in order to make the high level RCM processes definition representation-independent. This means that CERA core per se cannot be instantiated. A domain-specific instantiation layer is always required in order to build a complete cognitive model. Analogously, the physical layer is required in order to implement the actual autonomous agent control system.

\[1\] Arrabales Moreno, R. and Sanchis de Miguel, A. "A Machine Consciousness Approach to Autonomous Mobile Robotics". In: 5th International Cognitive Robotics Workshop. AAAI-06. Boston, MA. July 2006.
