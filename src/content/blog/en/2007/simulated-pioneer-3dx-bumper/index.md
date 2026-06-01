---
title: "Simulated Pioneer 3DX Bumper"
date: 2007-12-11
categories: 
  - "robotics"
---

##### SimulatedPioneerBumper Service

Microsoft Robotics Studio comes with a simulated Pioneer 3DX entity that can be used in the Visual Simulation Environment. This simulated robot can be equipped with several simulated sensors, like the LRF or the simulated bumper. Usually the P3DX bumper is modeled as just one frontal contact sensor and one rear contact sensor. However, the real Pioneer robot usually comes with two bumper rings, each having five bump panels:

## Background

Given the need to use more accurate models of the real sensors, we have been working in additional simulation services, like the [Simulated Sonar Service](http://www.conscious-robots.com/en/robotics-studio/robotics-studio-services/simulated-sonar-service-3.html). In this case, we wanted to accurately simulate the frontal and rear bumper rings of the Pioneer Arcos robot base. The Simulated Pioneer Bumper service models the ten bumper panels using ten BoxShapes located approximately at the same possition that corresponds to the real robot. Note the boxes that represent the simulated contact sensors in the following pictures:

**NOTE:** _the boxshapes arranges at angles around the robot are used to calculate the physics collisions with other elements of the simulated world. Altering their positions will impact robot physical behavior._

## Service Download

- [Source Code Download](http://www.conscious-robots.com/en/download/software-components-for-robotics/simulatedpioneerbumper-service/details.html) (for Microsoft Robotics Studio 1.5)
    
- [Source Code Download for Robotics Developer Studio 2008](http://www.conscious-robots.com/en/download-./services-for-robotics-developer-studio-2008/index.php).
    

## Installation Instructions

Download the ZIP file and unzip it into your MSRS directory. Note that this is assumed to be:

_**C:\\Microsoft Robotics Studio (1.5)**_

When you unzip the file, it creates one project in the Apps\\UC3M directory under your MSRS installation:

_**Apps\\UC3M\\SimulatedPioneerBumper**_

If you want to compile the projects yourself, then open the project and do a rebuild:

_**Apps\\UC3m\\SimulatedPioneerBumper\\SimulatedPioneerBumper.sln**_

## Description

The SimulatedPioneerBumper services creates a visual entity that models the front and rear bumper panels of a Pioneer robot base. Additionally, the service implements the generic contract for Contact Sensor, therefore it can be used by any code that deals with a contact sensor. It will send notifications to subscribed services everytime a bumper hits any surface in the simulated world.

The state of this service maintain a set of ten contact sensors, identified by the names b1, b2, b3, b4, b5, b9, b10, b11, b12, and b13 as depicted below:

Pioneer 3 DX front and rear bumper pair provide five points of sensing and one reading per bumper panel, which can be reproduced in the Microsoft Robotics Studio Simulator thanks to this service. Each bump panel is 3.97 in x 1 in wide. The segments are distributed at angles around the robot. Real distribution is -52, -19, 0, 19, and 52 degrees, as shown in the picture below:

However, we have slightly adapted the orientation and size of segments to match the 3D model provided with Robotics Studio.

Additionally, we've added a graphical representation of the bumpers state in the Cranium Dasboard (the following figure depicts the state when bump panels b1 and b2 are pressed):

## Disclaimer and License

This program is licensed under the terms of Creative Commons _**Attribution-Noncommercial-Share Alike**_ 3.0 Unported License; you can redistribute it and/or modify it. (If you build any application using this software, I'd like to know it, please [provide feedback](http://www.conscious-robots.com/en/contact-us/index.php)).

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

 [<img src="/legacy-images/images/cc.png" alt="Creative Commons License" />](http://creativecommons.org/licenses/by-nc-sa/3.0/)
