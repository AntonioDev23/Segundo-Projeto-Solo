
document.addEventListener('DOMContentLoaded', function () {
  const linkReceitas = document.querySelector('#linkNossasReceitas'); // id do botão/menu

  if (linkReceitas) {
    linkReceitas.addEventListener('click', function (e) {
      e.preventDefault();

      // Esconder conteúdo principal
      const paginaInicial = document.querySelector('main');
      paginaInicial.style.display = 'none';

      // Mostrar nova seção
      const novasReceitas = document.querySelector('#nossas-receitas');
      novasReceitas.style.display = 'block';

      // Adicionar receitas dinamicamente
      const grid = document.querySelector('#novas-receitas-grid');

      // Evita duplicar se já adicionou
      if (grid.children.length === 0) {
        const novaReceita1 = document.createElement('div');
        novaReceita1.className = 'recipe-card';
        novaReceita1.innerHTML = `
          <img src="imagens/receita1.webp" alt="Receita 1">
          <h3>Bolo de Milho</h3>
          <p>Tradicional e saboroso.</p>
          <a href="#" class="btn">Ver Receita</a>
        `;
        
        const novaReceita2 = document.createElement('div');
        novaReceita2.className = 'recipe-card';
        novaReceita2.innerHTML = `
          <img src="imagens/receita2.webp" alt="Receita 2">
          <h3>Torta de Frango</h3>
          <p>Fácil e cremosa.</p>
          <a href="#" class="btn">Ver Receita</a>
        `;

        grid.appendChild(novaReceita1);
        grid.appendChild(novaReceita2);
      }
    });
  }
});
