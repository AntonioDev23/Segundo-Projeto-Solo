
document.addEventListener('DOMContentLoaded', function() {
    // ========== CÓDIGO EXISTENTE (MENU, SCROLL, ETC.) ========== //
    // Atualiza o ano no footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Menu Hamburguer
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        this.innerHTML = this.classList.contains('active') ? '✕' : '<span class="hamburger"></span>';
    });

    // Fecha o menu ao clicar em um link (mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.innerHTML = '<span class="hamburger"></span>';
        });
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ========== BARRA DE BUSCA (CÓDIGO ATUALIZADO) ========== //
    const receitasBusca = [
        // Receitas EXCLUSIVAS para busca
        { nome: "Pavê de Chocolate", categoria: "Sobremesas", url: "#" },
        { nome: "Risoto de Cogumelos", categoria: "Italiana", url: "#" },
        { nome: "Moqueca de Peixe", categoria: "Nordestina", url: "#" },
        { nome: "Coxinha de Frango", categoria: "Salgados", url: "#" },
        { nome: "Torta Holandesa", categoria: "Sobremesas", url: "#" },
        
        // Receitas do grid inicial (opcional)
        { nome: "Bolo de Chocolate", categoria: "Doces", url: "#" },
        { nome: "Pizza Caseira", categoria: "Massas", url: "#" }
    ];

    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function() {
        const termo = this.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
        searchResults.innerHTML = '';

        if (termo.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        const resultados = receitasBusca.filter(receita => {
            const nomeNormalizado = receita.nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            const categoriaNormalizada = receita.categoria.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            return nomeNormalizado.includes(termo) || categoriaNormalizada.includes(termo);
        });

        if (resultados.length > 0) {
            resultados.forEach(receita => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.innerHTML = `
                    <strong>${receita.nome}</strong>
                    <span class="categoria-busca">${receita.categoria}</span>
                `;
                item.addEventListener('click', () => {
                    window.location.href = receita.url;
                });
                searchResults.appendChild(item);
            });
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = '<div class="search-result-item">Nenhuma receita encontrada</div>';
            searchResults.style.display = 'block';
        }
    });

    // Fecha resultados ao clicar fora ou pressionar ESC
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchResults.style.display = 'none';
        }
    });
});

// Controle do Menu de Filtros
const filterToggle = document.getElementById('filterToggle');
const filterDropdown = document.getElementById('filterDropdown');

// Mostrar/ocultar filtros
filterToggle.addEventListener('click', () => {
    filterDropdown.classList.toggle('show');
});

// Fechar ao clicar fora
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        filterDropdown.classList.remove('show');
    }
});

// Lógica dos Filtros (similar à anterior, mas aplicada junto com a busca)
function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const timeFilter = document.getElementById('filterTime').value;
    const difficultyFilter = document.querySelector('.filter-chip[data-difficulty].active')?.dataset.difficulty || 'all';
    const dietFilter = document.querySelector('.filter-chip[data-diet].active')?.dataset.diet || 'all';
    
    // Filtra receitas...
}

// Ativar chips
document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', function() {
        const group = this.closest('.filter-options');
        group.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
    });
});