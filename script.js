document.addEventListener('DOMContentLoaded', function() {
    // ===== CÓDIGO EXISTENTE =====
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

    // Fecha o menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.innerHTML = '<span class="hamburger"></span>';
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const receitasBusca = [
        // Receitas EXCLUSIVAS para a busca (não estão no grid inicial)
        { nome: "Pavê de Chocolate", categoria: "Sobremesas", url: "receita-pave.html" },
        { nome: "Risoto de Cogumelos", categoria: "Italiana", url: "receita-risoto.html" },
        { nome: "Moqueca de Peixe", categoria: "Nordestina", url: "receita-moqueca.html" },
        { nome: "Coxinha de Frango", categoria: "Salgados", url: "receita-coxinha.html" },
        { nome: "Torta Holandesa", categoria: "Sobremesas", url: "receita-torta.html" },
        
    ];
    console.log("Receitas disponíveis para busca:", receitasBusca);

    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Mostra/oculta resultados ao digitar
    searchInput.addEventListener('input', function() {
        const termo = this.value.toLowerCase().trim();
        searchResults.innerHTML = '';

        if (termo.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        const resultados = receitas.filter(receita => 
            receita.nome.toLowerCase().includes(termo) || 
            receita.categoria.toLowerCase().includes(termo)
        );

        if (resultados.length > 0) {
            resultados.forEach(receita => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.innerHTML = `
                    <strong>${receita.nome}</strong>
                    <span>${receita.categoria}</span>
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

    // Fecha resultados ao clicar fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });

    // Fecha resultados ao pressionar ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchResults.style.display = 'none';
        }
    });
});