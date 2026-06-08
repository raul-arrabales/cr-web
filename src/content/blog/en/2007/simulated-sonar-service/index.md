---
title: "Simulated SONAR Service"
date: 2007-08-02
categories: 
  - "robotics"
---

The Simulated SONAR Service provides access to a simulated SONAR array. It uses Robotics Studio Simulator raycasting to simulate SONAR transducers. Using this service you are able to test SONAR object detection and distance measurement in the MSRS Visual Environment.

**Background:**

ARCOS based robots (like the [Pioneer P3-DX](/en/blog/2007/mobilerobots-pioneer-3-p3-dx/)) can integrate up to four SONAR rings, each with eight transducers. These sensors provide object detection and distance information. The Robotics Studio platform doesn’t include a simulated SONAR service that could be use in the Visual Environment. However, there exists a generic contract for SONAR that I wanted to implement for the specific case of my SIMULATED P3-DX frontal SONAR array.

**NOTE:** A real (not simulated) ARCOS SONAR service is available at: [this discontinued legacy resource](/en/pages/discontinued-resource/)

 I asked Microsoft and I got the following answer:

_"you can make a reasonable simulated sonar sensor by doing something similar to the simulated laser rangefinder.  Instead of casting hundreds of rays in a scanline pattern like the laser rangefinder does, cast a handful of rays in a  cone that matches the aperture of the sonar sensor you want to simulate.  In  your code, look at the distance results returned by each ray and then set the sonar return value to be the closest intersection."_

Trying to follow these instructions I wrote a service called SimulatedSonar – Source code is available in the [download section](/en/pages/discontinued-resource/).

**NOTE:** Current version of SimulatedSonar don't generate a 3D cone using raycasting, instead a 2D pie is generated and used to calculate the closest intersection. Therefore, the robot only sees in a 2D plane (situated at the height of the SONAR device pose). In order to build a more realistic SONAR, this needs to be fixed. Additionally, noise should be added in the simulation in order to get as closest as possible to a real SONAR.

You can subscribe to this SimulatedSonar service from your application and easily get SONAR readings in your MSRS code (I think this code will be valid for any simulated robot, you just need to add the SimulatedSonar entity to your robot).

**Service Download:**

- [Source Code download](/en/pages/discontinued-resource/) (for MSRS 1.5).
    
- [Source Code Download](/en/pages/discontinued-resource/) (for Microsoft Robotics Developer Studio 2008).
    

**Installation instructions (for source code zip archive):**

SimulatedSonar is a small Robotics Studio Service (DSS Service) that allows you to access a simulated SONAR array. The zip file contains the source code and Visual Studio project.

Decompress the contents of the file under MSRS home directory. Note that the service source code is located under Apps directory. Build it using Visual Studio.

See the readme.txt file included in the distribution package for detailed instructions and version history. It is important that you install the service in a machine with the same version of MSRS that is indicated in the readme.txt file. I always try to update the distribution file with the latest available version of MSRS, please check regularly for updates.

**Service Details:**

**Service Contract Identifier:**     _/en/pages/discontinued-resource/_

**Implements generic contract:**     _Microsoft.Robotics.Services.Sonar_

**Service partners:**     _Subscription Manager_

**Allow Susbscriptions:** _Yes._

**Service State:** _Microsoft.Robotics.Services.Sonar.Proxy.SonarState_

**{mosimage}**

**Description:**

Each Pioneer 3 DX SONAR ring is composed of eight transducers arranged at angles -90, -50, -30, -10, 10, 30, 50, and 90 degrees. They are polled sequentially at a configurable rate (usually 25 Hz – 50 ms per transducer per array).

The Simulated_Sonar_ service aims to simulate a real SONAR by using the raycasting facility of the MSRS simulator. P3DX front ring sonar is 180 degress. But lateral transducers are centered at 90 degrees, so I consider: 196 degrees. I considered the aperture of one transducer is 16 degrees (real hardware transducers have an aperture of 15 degrees). Therefore,

_\_state.AngularRange = 196;  // 180 plus two halfs of lateral transducers._

Using the raycasting facility, I generate one ray per degree forming a 2D pie of rays. Then I only consider the rays that fall within the angles covered by each SONAR transducer (the measures obtained from the rest are discarded as the fall in the blind spots between transducers), and for each transducer I retrieve the closest intersection (minimum distance). See figure: blue rays represent discarded measurements. Red rays correspond to measures taken for sonar transducers. The yellow spot is the simulates sonar pose (origin of all rays).

Whenever a substantial change occurs in the raycasting readings that correspond to the simulated SONAR transducers the _SimulatedSonar_ service issue a replace message to all its subscribers notifying a state change.

Within the _SonarState_ object, an eight position array of double values is created. This array (called_DistanceMeasurements\[\]_) contains the distance readings corresponding to the simulated SONAR transducers.
