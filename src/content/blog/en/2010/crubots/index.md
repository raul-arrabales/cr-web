---
title: "CRUBOTS"
date: 2010-01-22
categories: 
  - "robotics"
tags: 
  - "crubots"
---

##### Conscious-Robots.com Utilities for Robot Simulation

(available at: [https://github.com/raul-arrabales/crubots](https://github.com/raul-arrabales/crubots))

CRUBOTS is a set of Robotics Developer Studio (MRDS) services developed as part of a research program in Machine Consciousness. Although these services were developed originally to work with the CERA-CRANIUM cognitive architecture, they can be reused in any robotics project.


As we work primarily with a Pioneer 3DX robot, most of the simulation services have been designed to be a reproduction of the real robotic mobile base.

CRUBOTS is distributed as a ZIP file containing the source code for all MRDS services. Each service code in enclosed in its own folder under packages/crubots in MRDS home directory.

See below for specific instructions and a description of the services included in CRUBOTS.

The following is a set of services included in the present release of CRUBOTS:

CRANIUM DASHBOARD

The Cranium Dashboard service is based on the Simple Dashboard service included in the MRDS and has been extended (based on [this older version](en/robotics-studio/robotics-studio-services/control-panel-service-dashb-2.html)) to display real-time information of other sensors: robot camera, sonar, bumpers, and GPS. Additionally, the simulation window with the Pursue Camera has been integrated in the same GUI:

<iframe src="https://www.youtube.com/embed/RcnZW3m6NuQ" width="420" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Using the Cranium Dashboard you can inspect the readings of all sensors (including the camera image) and have the simulation window, all in the same integrated GUI.

<img src="/legacy-images/images/sonar_control.jpg "Pioneer Sonar Representation"" alt="Pioneer Sonar Representation" />

 For instance, sonar readings from the Pioneer robot can be monitored graphically as well as quantitatively.

Each Pioneer 3 DX SONAR ring is composed of eight transducers arranged at angles -90, -50, -30, -10, 10, 30, 50, and 90 degrees. They are polled sequentially at a configurable rate (usually 25 Hz – 50 ms per transducer per array).

The graphical representation you can see in the Dashboard depicts each of the Sonar transducers reading as a 2D cone (the red line represents the scaled range measured by each Sonar transducer, the rest of blue lines represent the apperture of each Sonar transducer, and therefore the area which is free of obstacles according to Sonar readings. Note the blue lines get darker as closer obstacles are detected).

You can also check the actual values of measurement (in milimiters) obtained by the Sonar. They are the S0 to S7 values that appear to the right of the graphical representation.

<img src="/legacy-images/images/bumpers_dashboard.png "Pioneer Bumpers"" alt="Pioneer Bumpers" />

A graphical representation of the state of Pioneer robot's bumper panels is also available (the figure depicts the state when bump panels b1 and b2 are pressed).

Most of the code in the Cranium Dashboard also works with the real robot, hence it can be used for real robot monitoring and control as well.

Simulated GPS Service

The Simulated Pioneer GPS service provides a simple localization service to be used in the Microsoft Robotics Developer Studio simulator. It consists in a simple box shape entity (PioneerGPSEntity) that can be attached to a simulated robot, and a service (SimulatedPioneerGPS) that provides notifications indicating updated X, Y, Z coordinates of the robot in the simulated world.

[More information about Simulated GPS Service](en/robotics-studio/robotics-studio-services/simulated-gps-service.html).

Simulated Pioneer 3DX Bumpers

The Simulated Pioneer 3DX bumper service provides an accurate simulation of all the independent bump panels in both frontal and rear bumpers.

[More information about Simulated Pioneer 3DX Bumpers](en/robotics-studio/robotics-studio-services/simulated-pioneer-3dx-b.html).

Explorer Sim Sonar Service

This service is basically a modification of the Explorer service that comes with MRDS adapted to use sonar ranging for mapping.

[More information about ExplorerSimSonar service](en/robotics-studio/robotics-studio-services/explorer-sim-sonar-se.html).

Maze Simulator Service

<img src="/legacy-images/images/maze_simulator_ra_3.jpg "Maze simulator"" alt="Simulated Maze" />The Maze Simulator Service creates a simulated 3D world made of walls from a 2D bitmap (bmp) image. This service also creates (programatically) a simulated Pionner 3DX robot equiped with a frontal camera, frontal sonar, frontal and rear bumpers, and a Laser range finder (LRF).

The pixels is the 2D color bitmap specify the position, color, and textures of the walls.

[More information about the Maze Simulator Service](en/robotics-studio/robotics-studio-services/maze-simulator-service.html).

Source Code Download

CRUBOTS and related services can be downloaded from CR download pages, category [MRDS 2008 R2 Services](en/docman/mrds-2008-r2-services/index.php).

Any question, feedback or comment can be posted and shared at the [MRDS Forum](en/forums-./microsoft-robotics-studio/showcat-5.html).
