document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano no footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Sistema de favoritos
    document.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            // Aqui você pode adicionar lógica para salvar no localStorage
        });
    });
    
    // Filtro de receitas
    const filterButtons = document.querySelectorAll('.filters button');
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe active apenas no botão clicado
            button.classList.add('active');
            
            const filter = button.dataset.category;
            
            recipeCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Efeito smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.querySelector('.nav-toggle').addEventListener('click', function() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
    this.classList.toggle('active');
});