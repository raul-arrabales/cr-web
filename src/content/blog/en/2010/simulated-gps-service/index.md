---
title: "Simulated GPS Service"
date: 2010-01-20
categories: 
  - "robotics"
---

##### Simulated Pioneer GPS Service

The Simulated Pioneer GPS service provides a simple localization service to be used in the Microsoft Robotics Developer Studio simulator. It consists in a simple box shape entity (PioneerGPSEntity) that can be attached to a simulated robot, and a service (SimulatedPioneerGPS) that provides notifications indicating updated X, Y, Z coordinates of the robot in the simulated world.

 This service is based on the Simulated GPS service that comes with MRDS 2008 R2.

## Service Download

 Simulated Pioneer GPS source code for MRDS 2008 R2 is available [here](http://www.conscious-robots.com/en/docman/mrds-2008-r2-services/index.php).

## Installation Instructions

Download the ZIP file to your MRDS home directory, When you unzip the file, it creates one project in the packages\\crubots\\simulation\\sensors directory under your MSRS installation:

The folder SimulatedPioneerGPS will contain the source code.

If you want to compile the projects yourself, then open the project and do a rebuild (see the note below first!):

 SimulatedPioneerGPS\\SimulatedPioneerGPS.sln

\*\*\* IMPORTANT NOTE: \*\*\*

In order to have the project references working for your particular settings, you will need to run DssProjectMigration.exe. For instance (from the MRDS command prompt):

 bin\\DssProjectMigration.exe packages\\crubots\\simulation\\sensors\\SimulatedPioneerGPS

See Readme.txt file for more details. Use the [MRDS forum](http://www.conscious-robots.com/en/forums-./microsoft-robotics-studio/showcat-5.html) if you have any question about this service.
