document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano no footer (mantém seu layout original)
    document.getElementById('year').textContent = new Date().getFullYear();

    // Menu Hamburguer (funcionalidade completa)
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        // Altera o ícone para "X" quando aberto
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

    // Smooth scroll para links internos (sem afetar layout)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});