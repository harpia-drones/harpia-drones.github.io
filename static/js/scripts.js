// ===================================================
// ARQUIVO DE SCRIPTS GLOBAIS DO SITE
// ===================================================

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

document.querySelectorAll('#language-switcher-desktop, #language-switcher-mobile')
  .forEach(el => {
    el.addEventListener('change', function() {
      if (this.value) {
        window.location.href = this.value;
      }
    });
  });


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
