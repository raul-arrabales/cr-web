---
title: "Logitech Webcam Pan Tilt Service"
date: 2010-03-23
categories: 
  - "robotics"
---

##### Logitech Webcam Pan Tilt Service (PanTiltCam Service)

The CRUBOTS Pan Tilt Service for Logitech webcams (PanTiltCam service) is a component to be used with Microsoft Robotics Developer Studio to control the pan and tilt functions of a Logitech webcam like the Logitech Quickcam Sphere MP (also kown as Quickcam Orbit MP).

This service is based on the [Logitech Orbit/Sphere Mover DLL Library](http://comrade.ownz.com/projects/logimove.html) and permits to control the pan and tilt motors of the Logitech webcam from MRDS 2008 services using C# or any other .NET programming language.

**Service Source Code Download**

Pan Tilt Cam service source code is available at: [MRDS 2008 R2 Download section](/en/pages/discontinued-resource/).

**Service Details and Instructions**

{mosimage} To illustrate how the service works I've added Pan Tilt control buttons to the CRANIUM Dashboard service included in [CRUBOTS](/en/blog/2010/crubots/). As far as I know there is no simulated web cam that supports pan-tilt functions, therefore it can only be used with a real Logitech cam.

The CRANIUM Dashboard service is able to subscribe to a generic Pan Tilt Service, and expose the functionality of such a service in the form of Up, Down, Left, Right buttons. Every time you press these buttons the corresponding commands are sent to the Pan Tilt services you connected to.

The distribution ZIP file actually contains two services:

 - _**GenericPanTilt Service**_: The Generic Pan Tilt Service is a Robotics Developer Studio generic service for Pan Tilt actuators. In other words, this generic service defines the behavior (operations) that any pan tilt controller will support. This service is the one you should reference from your control code if you want it to be hardware independent.

 - _**PanTiltCam Service**_: The Pan Tilt Cam Service is an implementation of the Generic Pan Tilt Service which can control Logitech pan tilt cameras. It uses the Logimove dll library to communicate with the Logitech driver.

<iframe src="https://www.youtube.com/embed/TIZ2TaSBe-0" width="420" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Download the ZIP file to your MRDS home directory, when you unzip the file, it creates two directory projects in the packages\\crubots\\Actuators directory under your RDS installation:

The folder GenericPanTilt contains the source code of the generic service, and the folder PanTiltCam contains the Logitech pan tilt service.

If you want to compile the projects yourself, then open the project and do a rebuild (see the note below first!)

\*\*\* IMPORTANT NOTE: \*\*\*

The logimove.dll file has to be copied to the application working directory so the Logitech service finds it at runtime. It can be placed in the MRDS bin directory.

In order to have the project references working for your particular settings, you will need to run DssProjectMigration.exe. For instance (from the MRDS command prompt):

 bin\\DssProjectMigration.exe packages\\crubots\\Actuators

The Pan Tilt service includes just a new operation called **_PanTiltOperation_**, which takes a PanTiltOperationRequest object as parameter. This request is defined as follows:

    /// <summary> /// Pan Tilt Operation Request /// </summary> \[DataContract\] public class PanTiltOperationRequest { public enum OpType { MoveUp,     // Move the camera up MoveDown,   // Move the camera down MoveLeft,   // Move the camera left MoveRight,  // Move the camera right Reset       // Reset }

See Readme.txt file for more details. Use the [MRDS forum](/en/pages/discontinued-resource/) if you have any question about this service.
