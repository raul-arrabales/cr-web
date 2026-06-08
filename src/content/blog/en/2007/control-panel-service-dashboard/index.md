---
title: "Control Panel Service (Dashboard)"
date: 2007-08-14
categories: 
  - "robotics"
---

The Control Panel service is a version of the Dashboard service by Trevor Taylor in which a control for representing the [simulated Sonar](/en/blog/2007/simulated-sonar-service/) has been added. Dashboard is based on the MSRS Simple Dashboard service. Dashboard original code and documentation can be found in [Trevor's page](http://sky.fit.qut.edu.au/~taylort2/MSRS/Dashboard/Dashboard.htm).

This Control Panel Service provides access to a graphical representation of a simulated frontal SONAR array. The simulated Sonar service uses Robotics Studio Simulator raycasting to simulate SONAR transducers (simulation is not yet very realistic as it uses a single plane for raycasting instead of a 3D cone for each transducer. Additionally, readings are ideal, as no noise is simulated). Using this service you are able to test Simulated Sonar distance measurement in the MSRS Visual Environment. See the [Simulated Sonar service description](/en/blog/2007/simulated-sonar-service/) for details about how measurements are aquired.

**Background:**

ARCOS based robots (like the [Pioneer P3-DX](/en/blog/2007/mobilerobots-pioneer-3-p3-dx/)) can integrate up to four SONAR rings, each with eight transducers. These sensors provide object detection and distance information. The Robotics Studio platform doesn’t include a simulated SONAR service that could be use in the Visual Environment. However, there exists a generic contract for SONAR that I wanted to implement for the specific case of my SIMULATED P3-DX frontal SONAR array.

**NOTE:** A real (not simulated) ARCOS SONAR service is available at: [this discontinued legacy resource](/en/pages/discontinued-resource/)

**NOTE:** Current version of SimulatedSonar don't generate a 3D cone using raycasting, instead a 2D pie is generated and used to calculate the closest intersection. Therefore, the robot only sees in a 2D plane (situated at the height of the SONAR device pose). In order to build a more realistic SONAR, this needs to be fixed. Additionally, noise should be added in the simulation in order to get as closest as possible to a real SONAR.

You can subscribe to this SimulatedSonar service from your application and easily get SONAR readings in your MSRS code. Additionally, you can see a graphical representation of the Sonar readings using this Control Panel Service. For instance, you can use the [Maze Simulator Service](/en/blog/2007/maze-simulator-service/) and Control Panel service in order to see how Sonar sensors acquire measurement information from the virtual environment. Also, the same Control Panel service should work with a real Arcos Sonar service.

**Description:**

{mosimage} Each Pioneer 3 DX SONAR ring is composed of eight transducers arranged at angles -90, -50, -30, -10, 10, 30, 50, and 90 degrees. They are polled sequentially at a configurable rate (usually 25 Hz – 50 ms per transducer per array).

The Simulated_Sonar_ service aims to simulate a real SONAR by using the raycasting facility of the MSRS simulator. P3DX front ring sonar is 180 degress. But lateral transducers are centered at 90 degrees, so I consider: 196 degrees. I considered the aperture of one transducer is 16 degrees (real hardware transducers have an aperture of 15 degrees).

The graphical representation you can see in the Control Panel depicts each of the Sonar transducers reading as a 2D cone (the red line represents the scaled range measured by each Sonar transducer, the rest of blue lines represent the apperture of each Sonar transducer, and therefore the area which is free of obstacles according to Sonar readings. Note the blue lines get darker as closer obstacles are detected).

You can also check the actual values of measurement (in milimiters) obtained by the Sonar. They are the S0 to S7 values that appear to the right of the graphical representation.

**Service Download:**

- [Source Code download](/en/pages/discontinued-resource/)
    

**Installation instructions (for source code zip archive):**

Decompress the contents of the file under MSRS home directory. Note that the service source code is located under Apps directory. Build it using Visual Studio.

See the readme.txt file included in the distribution package for detailed instructions and version history. It is important that you install the service in a machine with the same version of MSRS that is indicated in the readme.txt file. I always try to update the distribution file with the latest available version of MSRS, please check regularly for updates.

**Service Details:**

**Service Contract Identifier:**     _/en/pages/discontinued-resource/_

**Implements generic contract:**     _N/A_

**Service partners:**     _Microsoft.Robotics.Services.GameController.Proxy_

**Allow Susbscriptions:** _Yes._

**Service State:**     _Cranium.Controls.ControlPanelState_
