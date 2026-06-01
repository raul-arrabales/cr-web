---
title: "URBI. Universal Real-time Behavior Interface"
date: 2007-05-07
categories: 
  - "robotics"
---

It was a matter of time that Microsoft Robotics Studio had a competitor. Last month Gostai released URBI 1.0 RC2. Release candidate 1 was out just the same month (December 2006) Microsoft released their version 1.0 of MSRS. URBI is available under GPL license. (MSRS is also freely available under a Non-Commercial license).

URBI is very in the same line where MSRS is. The key idea of these sorts of products is to offer a general programming framework for robotics. And this is quite new. We were used to have software simulators, programming libraries for concrete robots or robot families. The great advantage of a product like this, is that you can focus on you robotic application without bothering too much about concurrency, asynchronous I/O, and distributed processing. Additionally, a robot controller written using these new tools should be easily portable from one platform to another (given analogous sensors and actuators).

URBI is based on a script language which offers new features like parallelism, event-driven programming, and distributed object management. Multiple programming languages can be used as the URBU functionality is enclosed in the liburbi library, which can be integrated languages like C++, Java, Matlab, Python, etc.

URBI allows you to import C++ objects and even use them remotely in a transparent way. Remote objects can be executed in Windows, Linux or Mac OSX. This is called the UObject architecture.

Dealing with parallelism and events is quite common and challenging in robotics. URBI integrates the management of these programming aspects in its language. Commands like 'whenever' simplify the task of parallel programming. For instance:

Whenever (ball.visible) { Camera.trackPosition( ball ); }

Other advances features have been included in the semantics of URBI as abstractions for parallel programming. For instance, conflicting simultaneous operations can be handled as specified by the programmer.

One key aspect of a platform like this is the availability of code and the contributions of a community. Urbiforge ([http://www.urbiforge.com/](http://www.urbiforge.com/)) is the site where this software and related contributions can be downloaded. Also, tutorials and forums are available in the same site. Interesting libraries include scripts for Aibo, Lego NXT, etc.
