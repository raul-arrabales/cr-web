---
title: "ExplorerSimSonar Application"
date: 2007-11-09
categories: 
  - "robotics"
---

##### _ExplorerSimSonar_ Application

ExplorerSimSonar Application is a set of MSRS services used to recreate a virtual maze-like environment and experiment with a simulated Pioneer 3 DX robot equipped with a frontal Sonar array.

The archive available for download include serveral Robotics Studio services that are used to simulate a robot sonar array, recreate a maze virtual world, and autonomously control a robot within this environment using the sonar readings.

Most of the code is based on Trevor Taylor's QUT Applications for Robotics Studio (see[http://sky.fit.qut.edu.au/~taylort2/MSRS/](http://sky.fit.qut.edu.au/~taylort2/MSRS/)).

## Background

ARCOS based robots (like the [Pioneer 3 DX](/en/blog/2007/mobilerobots-pioneer-3-p3-dx/)) can integrate up to four Sonar rings, each with eight transducers. These sensors provide object detection and distance information. The Robotics Studio platform comes with a sample service called Explorer that uses the Laser Range Finder as sensing device. However, as I don't have such a device, I wanted to use the P3DX frontal sonar ring instead.

The original ExplorerSim service written by Trevor Taylor builds a map using the laser scans that the explorer is retrieving as the robot wanders around. In this version (ExplorerSimSonar) I've added support for a [simulated sonar](/en/blog/2007/simulated-sonar-service/). Therefore, the map is created based on frontal sonar scans.

## Services included in this Application:

\- [SimulatedSonar](/en/blog/2007/simulated-sonar-service/) -> Implements a simulated Sonar. - [CraniumDashBoard](/en/blog/2007/control-panel-service-dashboard/) -> Control panel window (formelly known as Control Panel service). - [MazeSimulatorRA](/en/blog/2007/maze-simulator-service/) -> a version of Maze Simulator. - [ExplorerSimSonar](/en/blog/2007/explorer-sim-sonar-service/) -> Autonomous robot control. - [DifferentialDriveTT](http://sky.fit.qut.edu.au/~taylort2/MSRS/DifferentialDriveTT/DiffDrive.htm) -> Trevor's DifferentialDrive.

## Application Download

- [ExplorerSimSonar Application Download](http://www.conscious-robots.com/en/download/software-components-for-robotics/explorersimsonar-application-v11-/details.html)

## Installation Instructions - Usage

Download the ZIP file and unzip it into your MSRS directory. Note that this is assumed to be:  C:\\Microsoft Robotics Studio (1.5)

When you unzip the file, it creates four projects in the Apps\\UC3M directory under your MSRS installation:

\- SimulatedSonar - CraniumDashboard - MazeSimulatorRA - ExplorerSimSonar

And one project under Apps\\QUT directory:

\- DifferentialDriveTT (this is an unmodified service from Trevor Taylor). Use the following scripts provided within this application distribution:

These commands must be run from the MSRS root directory, in an MSRS DOS Command Prompt window.

**1.** Rebuild ExplorerSimSonar Services and all dependencies by running

_**RebuildExplorerSimSonar.bat**_

**2.** Run the ExplorerSimSonar application

_**RunExplorerSimSonar.bat**_ - Please refer to the readme.txt files located under each service directory for more details.

## Last Version Information

Update 11. November 9, 2007.

Portions of code have been rewritten in this update in order to remove all vision services. The idea is to generate a clean environment for testing and experimentation of autonomous robot navigation using Sonar sensors.

I hope to release a future set of services including the vision processing stuff.

## DISCLAIMER:

This program is free software; you can redistribute it and/or modify it. (If you build any application using this software, I'd like to know it, please [provide feedback](/en/pages/contact-me/)). This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
