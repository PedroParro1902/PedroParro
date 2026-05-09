// Dados dos repositórios
const repositorios = [
    {
        nome: "PedroParro1902",
        descricao: "Repositório pessoal",
        linguagem: null,
        url: "https://github.com/PedroParro1902/PedroParro1902",
        visibilidade: "public",
        stars: 0
    },
    {
        nome: "check-out-13",
        descricao: "Um jogo de navegador sobre escapar de um hotel que se transforma enquanto você tenta sair.",
        linguagem: "JavaScript",
        url: "https://github.com/PedroParro1902/check-out-13",
        visibilidade: "private",
        stars: 0
    },
    {
        nome: "PedroSystem",
        descricao: "Site oficial do PedroSystem",
        linguagem: null,
        url: "https://github.com/PedroParro1902/PedroSystem",
        visibilidade: "private",
        stars: 0
    },
    {
        nome: "LuteLivre",
        descricao: "Jogo de Plataforma Web",
        linguagem: "JavaScript",
        url: "https://github.com/PedroParro1902/LuteLivre",
        visibilidade: "public",
        stars: 0
    }
];

// Função para carregar os projetos
function carregarProjetos() {
    const grid = document.getElementById('projetos-grid');
    
    repositorios.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'projeto-card';
        
        const badgeClass = repo.visibilidade === 'public' ? 'public' : '';
        const badgeTexto = repo.visibilidade === 'public' ? 'Público' : 'Privado';
        
        let linguagemHTML = '';
        if (repo.linguagem) {
            linguagemHTML = `<span class="projeto-linguagem">${repo.linguagem}</span>`;
        }
        
        card.innerHTML = `
            <div class="projeto-header">
                <h3 class="projeto-titulo">${repo.nome}</h3>
                <span class="projeto-badge ${badgeClass}">${badgeTexto}</span>
            </div>
            <p class="projeto-descricao">${repo.descricao || 'Sem descrição disponível'}</p>
            <div class="projeto-meta">
                <div class="projeto-meta-item">
                    ${linguagemHTML}
                </div>
            </div>
            <a href="${repo.url}" target="_blank" class="projeto-link">Ver no GitHub</a>
        `;
        
        grid.appendChild(card);
    });
}

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Carrega os projetos quando a página carrega
document.addEventListener('DOMContentLoaded', carregarProjetos);
