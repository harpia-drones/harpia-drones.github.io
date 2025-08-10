---
title: "Harpia"
date: 2025-08-10T02:15:09-03:00
draft: false
description: "Harpia is an Unmanned Aerial Vehicle (UAV) project capable of performing autonomous tasks such as navigating unknown environments, recognizing and classifying objects, planning trajectories, and executing safe landing procedures."
imagem: "/img/harpia.jpeg"
status_projeto: em-andamento
---

<img id="project-main-image" src="/img/harpia.jpeg" alt="Imagem principal do projeto" class="main-image">

<section>

## About the Project

Harpia is the newest project from the UFRJ Nautilus team and consists of developing an Unmanned Aerial Vehicle (UAV) capable of performing autonomous tasks, such as navigating unknown environments, recognizing and classifying objects, planning trajectories, and carrying out safe landing procedures.

</section>

<section>

## Key Technologies and Tools

Our system is built on a robust technological foundation, using cutting-edge tools for each subsystem:

- **Software:** The brain of our drone runs on ROS 2 (Robot Operating System), which manages communication between all software and hardware components. Localization and environmental mapping are carried out using SLAM (Simultaneous Localization and Mapping) and an Extended Kalman Filter (EKF). For object detection and classification, we apply computer vision techniques such as Contour Analysis and the Hough Circle Transform. The entire system is orchestrated by a state machine that makes decisions and coordinates the robot’s actions. For testing and validation, we use the Gazebo simulation software.

- **Electronics:** The electronics are divided into power supply and control systems. With custom PCBs designed for safe power distribution, we ensure integrity and performance. The control system ensures actuators respond precisely to the tasks as designed.

- **Mechanics:** The drone is assembled on a commercial X500 V2 frame, chosen for its reinforced carbon-fiber structure and ample internal space. The entire mechanical design — including component placement, center of gravity analysis, and the development of custom parts such as grippers and mounts — is done using SOLIDWORKS. Custom parts are manufactured on 3D printers using PETG and ABS filaments. The propulsion system features Hobbywing SkyWalker 1250KV brushless motors, selected for their efficiency and performance.

</section>

<section>

## Gallery

<div id="project-gallery" class="imagem-gallery">

<img src="/img/harpia-1.jpeg" width="300px">
<img src="/img/harpia-2.jpeg" width="300px">
<img src="/img/harpia-3.jpeg" width="300px">

</div>

</section>

<div class="back-link-container">
<a href="/pt/projetos" class="back-link">&larr; Back to all projects</a>
</div>



