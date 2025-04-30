document.addEventListener('DOMContentLoaded', function () {
    // ========== MENU HAMBÚRGUER ========== //
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
            if (nav && searchWrapper) {
                nav.insertBefore(searchWrapper, nav.firstChild);
            }
            if (navLinks) {
                navLinks.forEach(link => {
                    link.style.pointerEvents = 'auto';
                });
            }
        }
    }

    function closeMenu() {
        navToggle.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
    }

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

    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && headerContainer) {
            headerContainer.insertBefore(searchWrapper, nav.nextSibling);
        }
    });

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

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container') && !e.target.matches('#searchInput')) {
                searchResults.style.display = 'none';
            }
        });
    }

    // ========== FILTROS NO HEADER ========== //
    const filterToggle = document.getElementById('filterToggle');
    const filterDropdown = document.getElementById('filterDropdown');
    const applyBtn = document.getElementById('applyFilters');

    if (filterToggle && filterDropdown) {
        filterToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            filterDropdown.classList.toggle('show');
        });

        document.querySelectorAll('.filter-chip').forEach(chip => {
            chip.addEventListener('click', function () {
                const group = this.closest('.filter-options');
                group.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
                this.classList.add('active');
            });
        });

        if (applyBtn) {
            applyBtn.addEventListener('click', () => {
                const selectedTime = document.getElementById('filterTime')?.value;
                const selectedDifficulty = document.querySelector('.filter-chip[data-difficulty].active')?.dataset.difficulty;
                const selectedDiet = document.querySelector('.filter-chip[data-diet].active')?.dataset.diet;

                console.log("Filtros aplicados:", {
                    tempo: selectedTime,
                    dificuldade: selectedDifficulty,
                    dieta: selectedDiet
                });

                filterDropdown.classList.remove('show');

                // Limpa os filtros visuais após aplicar
                document.querySelectorAll('.filter-chip.active').forEach(chip => chip.classList.remove('active'));
                document.getElementById('filterTime').value = "";
            });
        }

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.filter-dropdown') && !e.target.matches('#filterToggle')) {
                filterDropdown.classList.remove('show');
            }
        });
    }
});
