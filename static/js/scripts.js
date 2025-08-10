// ===================================================
// ARQUIVO DE SCRIPTS GLOBAIS DO SITE
// ===================================================



// --- Dados dos Projetos ---
const projetos = [
    {
        id: 1,
        titulo: "Aeronave VANT Harpia V3",
        link: "projeto-nx.html?id=1", // Link para a página de detalhes com o ID
        imagem: "https://placehold.co/1200x600/4a077a/f0f0f0?text=Harpia+V3",
        descricao: "O Harpia V3 é a terceira iteração da nossa principal aeronave para competições de aerodesign. O projeto foi otimizado para maximizar a capacidade de carga útil sem comprometer a estabilidade e a manobrabilidade.",
        status: "Concluído",
        especificacoes: [
            "Envergadura: 3 metros",
            "Peso vazio: 8 kg",
            "Capacidade de carga: 12 kg",
            "Motorização: Elétrica Brushless 5060",
            "Material: Fibra de carbono e de vidro"
        ],
        galeria: [
            "https://placehold.co/400x300/1a1a1a/f0f0f0?text=V3-Detalhe1",
            "https://placehold.co/400x300/1a1a1a/f0f0f0?text=V3-Detalhe2",
            "https://placehold.co/400x300/1a1a1a/f0f0f0?text=V3-Detalhe3"
        ]
    },
    {
        id: 2,
        titulo: "Sistema de Controle de Voo Autônomo",
        link: "projeto-nx.html?id=2", // Link para a página de detalhes com o ID
        imagem: "https://placehold.co/1200x600/32CD32/1a1a1a?text=Software",
        descricao: "Este projeto foca no desenvolvimento de um sistema de piloto automático customizado, utilizando uma placa Raspberry Pi como computador de bordo para realizar voos autônomos por waypoints.",
        status: "Em Andamento",
        especificacoes: [
            "Plataforma: Raspberry Pi 4",
            "Linguagem: Python",
            "Sensores: IMU (MPU-6050), GPS (NEO-6M)",
            "Comunicação: Telemetria via rádio 433MHz",
            "Frameworks: MAVLink, DroneKit"
        ],
        galeria: [
            "https://placehold.co/400x300/1a1a1a/f0f0f0?text=Software-Placa",
            "https://placehold.co/400x300/1a1a1a/f0f0f0?text=Software-Codigo"
        ]
    },
    {
        id: 3,
        titulo: "Estrutura com Compósitos Leves",
        link: "projeto-nx.html?id=3", // Adicionei um link de exemplo
        imagem: "https://placehold.co/400x200/1a1a1a/f0f0f0?text=Estrutura",
        descricao: "Pesquisa e aplicação de materiais compósitos, como fibra de carbono e de vidro, para a construção de uma fuselagem mais leve e resistente.",
        status: "Em Andamento",
        especificacoes: [ // Adicionei especificações de exemplo
            "Material Principal: Fibra de Carbono Toray T700",
            "Resina: Epóxi de alta performance",
            "Técnica de Laminação: Vácuo",
            "Redução de Peso Estimada: 25%"
        ],
        galeria: [] // Galeria vazia por enquanto
    }
];


const membros = [
    // --- EQUIPE DE SOFTWARE ---
    {
        area: "Software",
        nome: "Carla Lins",
        cargo: "Diretora de Software",
        foto: "https://placehold.co/150x150/f0f0f0/1a1a1a?text=Carla",
        descricao: "Desenvolve a inteligência artificial, os sistemas de controle e a interface de comunicação da aeronave."
    },
    {
        area: "Software",
        nome: "Felipe Lima",
        cargo: "Desenvolvedor de Firmware",
        foto: "https://placehold.co/150x150/f0f0f0/1a1a1a?text=Felipe",
        descricao: "Responsável pela programação de baixo nível dos microcontroladores e otimização do sistema embarcado."
    },
    // --- EQUIPE DE MECÂNICA ---
    {
        area: "Mecânica",
        nome: "Ana Souza",
        cargo: "Capitã e Diretora de Mecânica",
        foto: "https://placehold.co/150x150/4a077a/f0f0f0?text=Ana",
        descricao: "Líder do projeto, responsável pela coordenação geral e pelo design estrutural da aeronave."
    },
    {
        area: "Mecânica",
        nome: "Bruno Costa",
        cargo: "Especialista em Aerodinâmica",
        foto: "https://placehold.co/150x150/32CD32/1a1a1a?text=Bruno",
        descricao: "Responsável pelo design da fuselagem, asas e pela performance de voo da aeronave."
    },
    // --- EQUIPE DE ELETRÔNICA ---
    {
        area: "Eletrônica",
        nome: "Daniel Martins",
        cargo: "Diretor de Eletrônica",
        foto: "https://placehold.co/150x150/1a1a1a/f0f0f0?text=Daniel",
        descricao: "Projeta e monta todos os circuitos, incluindo a seleção de sensores, motores e controladores."
    },
    // --- EQUIPE DE GESTÃO ---
    {
        area: "Gestão",
        nome: "Mariana Silva",
        cargo: "Gerente de Projetos",
        foto: "https://placehold.co/150x150/4a077a/f0f0f0?text=Mariana",
        descricao: "Coordena os prazos, recursos e a comunicação entre as diferentes áreas da equipe Harpia."
    },
    // --- EQUIPE DE MARKETING ---
    {
        area: "Marketing",
        nome: "Lucas Pereira",
        cargo: "Diretor de Marketing",
        foto: "https://placehold.co/150x150/32CD32/1a1a1a?text=Lucas",
        descricao: "Responsável pela imagem da equipe, redes sociais e contato com patrocinadores."
    }
];






// --- Lógica para o Menu Hambúrguer (para todas as páginas) ---
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}


// --- Lógica que será executada quando a página carregar ---
window.onload = function() {


    // 2. LÓGICA PARA A PÁGINA DE DETALHES DE UM PROJETO (projeto-nx.html)
    const detailContainer = document.getElementById('project-detail-container');
    if (detailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const projetoId = parseInt(urlParams.get('id'));
        const projeto = projetos.find(p => p.id === projetoId);

        if (projeto) {
            const statusColor = projeto.status.toLowerCase() === 'concluído' ? 'status-completed' : 'status-inprogress';
            const projectHTML = `
                <div class="project-header">
                    <h1>${projeto.titulo}</h1>
                    <span class="status ${statusColor}">${projeto.status}</span>
                </div>
                <img src="${projeto.imagem}" alt="Imagem principal do projeto ${projeto.titulo}" class="main-image">
                <div class="project-body">
                    <section class="project-section">
                        <h2>Sobre o Projeto</h2>
                        <p>${projeto.descricao}</p>
                    </section>
                    <section class="project-section">
                        <h2>Especificações Técnicas</h2>
                        <ul class="tech-specs">
                            ${projeto.especificacoes.map(spec => `<li>${spec}</li>`).join('')}
                        </ul>
                    </section>
                    <section class="project-section">
                        <h2>Galeria de Imagens</h2>
                        <div class="image-gallery">
                            ${projeto.galeria.map(img => `<img src="${img}" alt="Foto da galeria do projeto">`).join('')}
                        </div>
                    </section>
                </div>
            `;
            detailContainer.innerHTML = projectHTML;
        } else {
            detailContainer.innerHTML = "<h1>Projeto não encontrado</h1><p>O projeto que você está tentando acessar não existe ou o link está quebrado.</p>";
        }
    }

    // scripts.js

// ... (A lógica do Menu e da Página de Projetos continua aqui em cima, sem alterações) ...

// 3. LÓGICA PARA A PÁGINA DA EQUIPE (nossa-equipe.html) - CÓDIGO NOVO
const teamsContainer = document.getElementById('teams-container');

// Garante que o código só rode na página da equipe
if (teamsContainer) { 
    // Agrupa os membros pela "area"
    const equipes = membros.reduce((acc, membro) => {
        acc[membro.area] = acc[membro.area] || [];
        acc[membro.area].push(membro);
        return acc;
    }, {});

    // Define a ordem desejada das equipes
    const ordemEquipes = ["Software", "Mecânica", "Eletrônica", "Gestão", "Marketing"];

    // Itera sobre a ordem definida para criar as seções
    ordemEquipes.forEach(nomeEquipe => {
        const membrosDaEquipe = equipes[nomeEquipe];

        if (membrosDaEquipe) {
            // Cria a seção da equipe
            const section = document.createElement('section');
            section.className = 'team-section';

            // Adiciona o título da equipe
            const title = document.createElement('h2');
            title.className = 'team-title';
            title.textContent = nomeEquipe;
            section.appendChild(title);

            // Cria a grade para os cards
            const grid = document.createElement('div');
            grid.className = 'team-grid';

            // Adiciona os cards de cada membro na grade
            membrosDaEquipe.forEach(membro => {
                const cardHTML = `
                    <div class="team-member-card">
                        <img src="${membro.foto}" alt="Foto de ${membro.nome}" onerror="this.onerror=null;this.src='https://placehold.co/150x150/1a1a1a/f0f0f0?text=Erro';">
                        <h3>${membro.nome}</h3>
                        <p class="role">${membro.cargo}</p>
                        <p class="description">${membro.descricao}</p>
                    </div>
                `;
                grid.innerHTML += cardHTML;
            });

            section.appendChild(grid);
            teamsContainer.appendChild(section);
        }
    });
}
};
