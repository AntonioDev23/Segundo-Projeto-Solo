document.addEventListener('DOMContentLoaded', function () {
    // ========== GERAL ========== //
    // Atualiza o ano no footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Menu Hamburguer
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const body = document.body;
    const searchWrapper = document.querySelector('.search-wrapper');
    const headerContainer = document.querySelector('.header-container');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Cria overlay
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    // Move elementos para o menu mobile
    function prepareMobileMenu() {
        if (window.innerWidth <= 768) {
            // Move a barra de busca e filtros
            if (nav && searchWrapper) {
                nav.insertBefore(searchWrapper, nav.firstChild);
            }

            // Garante que os links são clicáveis
            if (navLinks) {
                navLinks.forEach(link => {
                    link.style.pointerEvents = 'auto';
                });
            }
        }
    }

    // Fecha menu
    function closeMenu() {
        navToggle.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
    }

    // Eventos
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
            body.classList.toggle('no-scroll');

            if (nav.classList.contains('active')) {
                prepareMobileMenu();
            }
        });
    }

    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    // Fecha menu ao clicar nos links (e deixa o clique funcionar normalmente)
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                closeMenu();
            });
        });
    }

    // Restaura elementos no desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && headerContainer) {
            headerContainer.insertBefore(searchWrapper, nav.nextSibling);
        }
    });

    // Prepara o menu ao carregar em mobile
    if (window.innerWidth <= 768) prepareMobileMenu();

    // ========== BARRA DE BUSCA ========== //
    const receitasBusca = [
        { nome: "Bolo de Chocolate", categoria: "Doces", url: "#" },
        { nome: "Pizza Caseira", categoria: "Massas", url: "#" },
        { nome: "Lasanha", categoria: "Massas", url: "#" },
        { nome: "Escondidinho", categoria: "Carnes", url: "#" },
        { nome: "Feijão Tropeiro", categoria: "Tradicional", url: "#" },
        { nome: "Cuscuz", categoria: "Café da Manhã", url: "#" }
    ];

    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function () {
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
            chip.addEventListener('click', function () {
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
        const selectedTime = document.getElementById('filterTime')?.value;
        const selectedDifficulty = document.querySelector('.filter-chip[data-difficulty].active')?.dataset.difficulty;
        const selectedDiet = document.querySelector('.filter-chip[data-diet].active')?.dataset.diet;

        console.log("Filtros aplicados:", {
            tempo: selectedTime,
            dificuldade: selectedDifficulty,
            dieta: selectedDiet
        });

        // Aqui você implementaria a filtragem real
        filterDropdown.classList.remove('show');

        // Resetar filtros após aplicar
        resetFilters();
    }

    // Função para resetar filtros
    function resetFilters() {
        // Resetar o filtro de tempo para "Todos"
        document.getElementById('filterTime').value = 'all';

        // Desmarcar todos os filtros de dificuldade
        document.querySelectorAll('.filter-chip[data-difficulty]').forEach(chip => {
            chip.classList.remove('active');
        });

        // Desmarcar todos os filtros de dieta
        document.querySelectorAll('.filter-chip[data-diet]').forEach(chip => {
            chip.classList.remove('active');
        });
    }

    // ========== SCROLL SUAVE ========== //
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
});
