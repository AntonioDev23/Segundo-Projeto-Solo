document.addEventListener('DOMContentLoaded', function() {
    // ========== GERAL ========== //
    // Atualiza o ano no footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // ========== MENU HAMBÚRGUER ========== //
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    
    // Cria os 3 riscos do ícone hambúrguer se não existirem
    if (navToggle && !navToggle.querySelector('.hamburger-line')) {
        navToggle.innerHTML = `
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        `;
    }

    if (navToggle && nav) {
        const hamburgerLines = navToggle.querySelectorAll('.hamburger-line');
        
        navToggle.addEventListener('click', function() {
            // Alterna menu
            this.classList.toggle('active');
            nav.classList.toggle('active');
            
            // Animação do ícone
            if (this.classList.contains('active')) {
                hamburgerLines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                hamburgerLines[1].style.opacity = '0';
                hamburgerLines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                hamburgerLines.forEach(line => {
                    line.style.transform = 'none';
                    line.style.opacity = '1';
                });
            }
        });

        // Fecha o menu ao clicar em links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                navToggle.classList.remove('active');
                hamburgerLines.forEach(line => {
                    line.style.transform = 'none';
                    line.style.opacity = '1';
                });
            });
        });
    }

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
