document.addEventListener('DOMContentLoaded', function() {
    // ==== GERAL ==== //
    // Atualiza o ano no footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // ==== MENU HAMBURGUER ==== //
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        this.innerHTML = this.classList.contains('active') ? '✕' : '☰'; // Ou use spans
    });

    // Fecha o menu ao clicar em links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.innerHTML = '☰';
        });
    });

    // ==== BARRA DE BUSCA ==== //
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

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
                item.innerHTML = `<strong>${receita.nome}</strong><span>${receita.categoria}</span>`;
                item.addEventListener('click', () => window.location.href = receita.url);
                searchResults.appendChild(item);
            });
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = '<div class="search-result-item">Nenhuma receita encontrada</div>';
            searchResults.style.display = 'block';
        }
    });

    // ==== FILTROS ==== //
    const filterToggle = document.getElementById('filterToggle');
    const filterDropdown = document.getElementById('filterDropdown');

    filterToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        filterDropdown.classList.toggle('show');
    });

    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            this.closest('.filter-options').querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.getElementById('applyFilters').addEventListener('click', applyFilters);

    function applyFilters() {
        // Implemente sua lógica de filtragem aqui
        console.log("Filtros aplicados!");
        filterDropdown.classList.remove('show');
    }
});