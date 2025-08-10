---
title: "Harpia"
date: 2025-08-10T02:15:09-03:00
draft: false
description: "O Harpia consiste na criação de um Veículo Aéreo Não Tripulado (VANT) capaz de realizar tarefas de forma autônoma, como navegação em ambientes desconhecidos, reconhecimento e classificação de objetos, planejamento de trajetória e procedimentos de pouso seguros."
imagem: "/img/harpia.jpeg"
status_projeto: em-andamento
---

<img id="project-main-image" src="/img/harpia.jpeg" alt="Imagem principal do projeto" class="main-image">

<section>

## Sobre o Projeto

O Harpia é o mais recente projeto da equipe UFRJ Nautilus e consiste na criação de um Veículo Aéreo Não Tripulado (VANT) capaz de realizar tarefas de forma autônoma, como navegação em ambientes desconhecidos, reconhecimento e classificação de objetos, planejamento de trajetória e procedimentos de pouso seguros.

</section>

<section>

## Principais Tecnologias e Ferramentas

Nosso sistema é construído sobre uma base tecnológica robusta, utilizando ferramentas de ponta para cada subsistema:

- Software: O cérebro do nosso drone opera com ROS 2 (Robot Operating System), que gerencia a comunicação entre todos os componentes de software e hardware. A localização e o mapeamento do ambiente são realizados através de SLAM (Simultaneous Localization and Mapping) e um Filtro Estendido de Kalman (EKF). Para a detecção e classificação de objetos, utilizamos técnicas de visão computacional como Análise de Contornos e a Transformada de Hough Circle. Todo o sistema é orquestrado por uma máquina de estados que toma as decisões e coordena as ações do robô. Para testes e validação, usamos o software de simulação Gazebo.

- Eletrônica: O sistema eletrônico é dividido em alimentação e controle. Com PCBs peronalizadas para distriubuir potência de forma segura, garantimos integridade e perfomance. O Controle é feito para que atuadores respondam às tarefas da maneira projetada.

- Mecânica: O drone é montado sobre um frame comercial X500 V2, escolhido por sua maior resistência estrutural em fibra de carbono e maior espaço interno. Todo o projeto mecânico, incluindo o posicionamento de componentes, análise de centro de gravidade e o desenvolvimento de peças customizadas como garras e suportes, é realizado no software SOLIDWORKS. As peças customizadas são fabricadas em impressoras 3D, utilizando filamentos PETG e ABS. O sistema de propulsão conta com motores brushless Hobbywing SkyWalker 1250KV, selecionados por sua eficiência e desempenho.

</section>

<section>

## Galeria

<div id="project-gallery" class="imagem-gallery">

<img src="/img/harpia-1.jpeg" width="300px">
<img src="/img/harpia-2.jpeg" width="300px">
<img src="/img/harpia-3.jpeg" width="300px">

</div>

</section>

<div class="back-link-container">
<a href="/pt/projetos" class="back-link">&larr; Voltar para todos os projetos</a>
</div>



