document.addEventListener('DOMContentLoaded', function() {
    // ========== GERAL ========== //
    // Atualiza o ano no footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // ========== MENU HAMBÚRGUER ========== //
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const body = document.body;
const searchWrapper = document.querySelector('.search-wrapper'); // Seleciona a barra de busca

// Cria overlay
const overlay = document.createElement('div');
overlay.className = 'nav-overlay';
document.body.appendChild(overlay);

// Move a barra de busca e filtros para dentro do menu mobile
function moveElementsToMenu() {
  if (window.innerWidth <= 768) {
    nav.insertBefore(searchWrapper, nav.firstChild); // Insere a busca no topo do menu
  }
}

// Abre/fecha menu
navToggle.addEventListener('click', function(e) {
  e.stopPropagation(); // Impede propagação do clique
  this.classList.toggle('active');
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
  body.classList.toggle('no-scroll');
  
  if (nav.classList.contains('active')) {
    moveElementsToMenu(); // Reorganiza os elementos quando o menu abre
  }
});

// Fecha menu ao clicar no overlay ou em links
overlay.addEventListener('click', closeMenu);
document.querySelectorAll('.nav-links a, .search-wrapper').forEach(element => {
  element.addEventListener('click', closeMenu);
});

function closeMenu() {
  navToggle.classList.remove('active');
  nav.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('no-scroll');
}

// Reposiciona elementos ao redimensionar a tela
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    // Retorna a busca para o header no desktop
    const headerContainer = document.querySelector('.header-container');
    headerContainer.insertBefore(searchWrapper, nav);
  }
});
    // ========== BARRA DE BUSCA ========== //
    const receitasBusca = [
        { nome: "Bolo de Chocolate", categoria: "Doces", url: "#" },
        { nome: "Pizza Caseira", categoria: "Massas", url: "#" },
        { nome: "Lasanha", categoria: "Massas", url: "#" },
        { nome: "Escondidinho", categoria: "Carnes", url: "#" },
        { nome: "Feijão Tropeiro", categoria: "Tradicional", url: "#" },
        { nome: "Cuscuz", categoria: "Café da Manhã", url: "#" }
    ];

    // Funciona para busca desktop e mobile
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const termo = this.value.toLowerCase().trim();
            searchResults.innerHTML = '';

            if (termo.length < 2) {
                searchResults.style.display = 'none';
                return;
            }

            const resultados = receitasBusca.filter(receita => 
                receita.nome.toLowerCase().includes(termo) || 
                receita.categoria.toLowerCase().includes(termo)
            );

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
                        searchResults.style.display = 'none';
                    });
                    searchResults.appendChild(item);
                });
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = '<div class="search-result-item">Nenhuma receita encontrada</div>';
                searchResults.style.display = 'block';
            }
        });

        // Fecha resultados ao clicar fora
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container') && !e.target.matches('#searchInput')) {
                searchResults.style.display = 'none';
            }
        });
    }

    // ========== FILTROS ========== //
    const filterToggle = document.getElementById('filterToggle');
    const filterDropdown = document.getElementById('filterDropdown');
    const applyBtn = document.getElementById('applyFilters');

    if (filterToggle && filterDropdown) {
        filterToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            filterDropdown.classList.toggle('show');
        });

        // Seleção de chips
        document.querySelectorAll('.filter-chip').forEach(chip => {
            chip.addEventListener('click', function() {
                const group = this.closest('.filter-options');
                group.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Botão "Aplicar"
        if (applyBtn) {
            applyBtn.addEventListener('click', applyFilters);
        }

        // Fechar ao clicar fora
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.filter-dropdown') && !e.target.matches('#filterToggle')) {
                filterDropdown.classList.remove('show');
            }
        });
    }

    function applyFilters() {
        const selectedTime = document.getElementById('filterTime').value;
        const selectedDifficulty = document.querySelector('.filter-chip[data-difficulty].active')?.dataset.difficulty;
        const selectedDiet = document.querySelector('.filter-chip[data-diet].active')?.dataset.diet;
        
        console.log("Filtros aplicados:", {
            tempo: selectedTime,
            dificuldade: selectedDifficulty,
            dieta: selectedDiet
        });
        
        // Aqui você implementaria a filtragem real
        filterDropdown.classList.remove('show');
    }

    // ========== SCROLL SUAVE ========== //
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
});
