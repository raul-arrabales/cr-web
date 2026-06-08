---
title: "Explorer Sim Sonar Service"
date: 2007-09-19
categories: 
  - "robotics"
---

##### Explorer Sim Sonar Service

The ExplorerSimSonar Service is a modification of MSRS Explorer which works with the [simulated sonar](/en/blog/2007/simulated-sonar-service/), instead of using the Simulated Laser Range Finder. It is based on the [ExplorerSim](http://sky.fit.qut.edu.au/~taylort2/MSRS/ExplorerSim/Explorer.htm) service, which is an adaptation of the Explorer service to the simulation environment.

**Background**

ARCOS based robots (like the [Pioneer 3 DX](/en/blog/2007/mobilerobots-pioneer-3-p3-dx/)) can integrate up to four Sonar rings, each with eight transducers. These sensors provide object detection and distance information. The Robotics Studio platform comes with a sample service called Explorer that uses the Laser Range Finder as sensing device. However, as I don't have such a device, I wanted to use the P3DX frontal sonar ring instead.

The original [ExplorerSim](http://sky.fit.qut.edu.au/~taylort2/MSRS/ExplorerSim/Explorer.htm) service written by Trevor Taylor builds a map using the laser scans that the explorer is retrieving as the robot wanders around. In this version (ExplorerSimSonar) I've added support for a [simulated sonar](/en/blog/2007/simulated-sonar-service/). Therefore, the map is created based on frontal sonar scans.

**Service Download:**

- [Source code download](http://www.conscious-robots.com/en/download/software-components-for-robotics/explorersimsonar-service-update-2-/details.html). (For MSRS 1.5)
    
- [Source Code Download (for Microsoft Robotics Developer  Studio 2008)](http://www.conscious-robots.com/en/download-./services-for-robotics-developer-studio-2008/index.php)
    

**Installation instructions (for source code zip archive):**

ExplorerSimSonar is a Robotics Studio Service (DSS Service) that allows you to experiment with a simple explorer behavior for a differential drive robot. Navigation and mapper are based on Sonar scans retrieved by the robot. The zip file contains the source code and Visual Studio project.

Decompress the contents of the file under MSRS home directory. Note that the service source code is located under Apps directory. Build it using Visual Studio.

See the readme.txt file included in the distribution package for detailed instructions and version history. It is important that you install the service in a machine with the same version of MSRS that is indicated in the readme.txt file. I always try to update the distribution file with the latest available version of MSRS, please check regularly for updates.
