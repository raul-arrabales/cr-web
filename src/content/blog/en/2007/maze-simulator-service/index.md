---
title: "Maze Simulator Service"
date: 2007-08-09
categories: 
  - "robotics"
---

This Maze Simulator Service for Microsoft Robotics Studio is 99% based on the MSRS Maze Simulator by Trevor Taylor (find the original version following [this link to Trevor's page](http://sky.fit.qut.edu.au/~taylort2/MSRS/MazeSimulator/MazeSimulator.htm)). I just modified it to use my simulated Sonar service instead of the simulated Laser Range Finder (LRF). I called this branch of MazeSimulator MazeSimulatorRA and also changed the contract identifier, so you can have both versions in the same MSRS environment.

 **Background**

Please check original documentation available at the link provided above for a complete overview of this service. Basically this service allows you to simulate a maze composed of walls and blocks in the MSRS Visual Environment. I am using it to simulate a Pioneer 3 DX robot in a building-like environment. The service builds the 3D maze from a 2D color bitmap that especifies the position and color of the walls. I am using a bitmap image that resembles to my lab environment so I can test exploration and SLAM algorithms in the MSRS simulator.

As I am currently using SONAR sensors instead of a LRF I commented out the laser part of the original service and included my [simulated sonar service](/en/blog/2007/simulated-sonar-service/).

**Service Download**

\- [MazeSimulatorRa Source Code Download](http://www.conscious-robots.com/en/download/software-components-for-robotics/maze-simulator-for-robotics-studio-ra-version-1-/details.html) (for MSRS 1.5). - [Maze Simulator Source Code Download](http://www.conscious-robots.com/en/download-./services-for-robotics-developer-studio-2008/index.php) (for Robotics Developer Studio 2008).

**Installation Instructions (for source code zip archive)**

Please see readme.txt file included in the zip file for detailed instructions. The zip file contains the source code, resources, and visual studio solution. Download the ZIP file and unzip it into your MSRS root directory. This should create a directory called: <MSRS>\\Apps\\UC3M\\MazeSimulatorRA

**Service Details**

**Service Contract Identifier:**     _http://www.conscious-robots.com/2007/8/mazesimulatorra.html_

**Implements generic contract:**

**Service partners:**     _Microsoft.Robotics.Simulation.Engine.Proxy_

**Allow Susbscriptions:**     _No._

**Service State:** _Cranium.Simulation.Worlds.MazeSimulatorState_

**Service Implementation Description**

See [http://sky.fit.qut.edu.au/~taylort2/MSRS/MazeSimulator/MazeSimulator.htm](http://sky.fit.qut.edu.au/~taylort2/MSRS/MazeSimulator/MazeSimulator.htm) for more information about the implementation.
