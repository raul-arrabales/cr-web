---
title: "MobileRobots Pioneer 3 (P3 DX)"
date: 2007-04-10
categories: 
  - "robotics"
---

The Pioneer 3 DX is a robot base platform by MobileRobots Inc. (ActivMedia Robotics). This wheeled robot has been updated in its P3-DX8 version to carry loads more robustly and improve autonomy.

Although the P3-DX offers an embedded computer option it can be equipped with an onboard regular laptop computer thanks to the 23 Kg. allowed load. Obviously, embedded computer is a more robust and elegant solution, however it is more expensive as well. The main drawback of using an onboard laptop computer is the loss of the load surface where other sensor or actuator options could be installed (see image below).

As other MobileRobots robots, the P3DX8 is based on a core client-server model which provides a set of libraries and utilities for intelligent applications (the robots act as the servers). I will not get deeper in detail about this client-server architecture as my focus is using the Microsoft Robotics Studio to control these robots. We will visit this question again when we talk about software development for this robotic platform.

Salient hardware features of this unit are: ethernet based communications (optional), laser (optional), up to 252 watt-hour of hot-swappable batteries (which by the way add a great part ot the total unit weight), ring of 8 forward sonar, ring of 8 rear sonar (optional), two independent motors, two 19 cms. wheels and one caster wheel. Maximum speed is 1.6 m/s. Other interesting options are bumpers, grippers, vision, stereo rangefinders, compass, etc.

{mosimage} New Pioneer 3 Robots have a 32-bit Renesas SH2-7144 RISC microprocessor, including the P3-SH microcontroller with ARCOS. ARCOS is the Advanced Robot Control and Operations Software client-server interface. If you want to develop your own control software application you need to talk to ARCOS interface. I am not particularly interested in using a specific interface/platform like ARCOS but better use a common development platform like MSRS. Of course, ARCOS will be always called by MSRS services, so at the end, robot control is calling the same undelying native API.

Another higher level software component that comes with every MobileRobots platform is the Advanced Robotics Interface for Applications (ARIA) software. ARIA is a C++ based development environment that also provides TCP/IP communications with the robotic platform. Typical applications available through ARIA are: mapping, teleoperation, monitoring, etc. As I said before, I won't discuss further on ARCOS and ARIA as my focus is on MSRS.

The following video shows a P3-DX wandering around autonomously avoiding collisions:

<iframe src="https://www.youtube.com/embed/bfvlAaSLas0" width="420" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Manuals and other documentation are available at: [http://robots.mobilerobots.com/docs/](http://robots.mobilerobots.com/docs/)
