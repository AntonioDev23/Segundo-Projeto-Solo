document.addEventListener('DOMContentLoaded', function() {
    // ========== GERAL ========== //
    // Atualiza o ano no footer
    document.getElementById('year').textContent = new Date().getFullYear();

    
    // MENU HAMBÚRGUER
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
    // Cria os 3 riscos do ícone (caso não existam no HTML)
    if (!navToggle.querySelector('span')) {
        navToggle.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
    }

    const spans = navToggle.querySelectorAll('span');

    navToggle.addEventListener('click', () => {
        // Alterna menu
        nav.classList.toggle('active');
        navToggle.classList.toggle('active');

        // Animação do ícone
        if (nav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        }
    });

    // Fecha o menu ao clicar em links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            navToggle.classList.remove('active');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });
}

// (Mantenha o resto do seu código existente: busca, filtros, etc.)

    // ========== BARRA DE BUSCA ========== //
    const receitasBusca = [
        { nome: "Bolo de Chocolate", categoria: "Doces", url: "#" },
        { nome: "Pizza Caseira", categoria: "Massas", url: "#" },
        { nome: "Lasanha", categoria: "Massas", url: "#" },
        { nome: "Escondidinho de Carne Moída", categoria: "Carnes", url: "#" },
        { nome: "Feijão Tropeiro", categoria: "Tradicional", url: "#" },
        { nome: "Cuscuz", categoria: "Café da Manhã", url: "#" }
    ];

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
        
        // Aqui você implementaria a filtragem real das receitas
        filterDropdown.classList.remove('show');
    }

    // ========== SCROLL SUAVE ========== //
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});