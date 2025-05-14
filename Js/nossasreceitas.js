
// Seleciona todos os links do menu com a classe 'nav-link'
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link (não muda a URL)

    const targetId = this.getAttribute('data-id'); // Pega o id da seção para mostrar
    
    // Lista todas as seções que queremos controlar
    const sectionsToToggle = ['pagina-inicial', 'nossas-receitas'];

    // Esconde todas as seções
    sectionsToToggle.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        section.style.display = 'none';
      }
    });

    // Exibe somente a seção clicada
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = 'block';
    }

    // Se a seção "nossas-receitas" for mostrada, também chama a função para carregar as receitas (caso queira)
    if(targetId === 'nossas-receitas'){
      carregarNovasReceitas();
    }
  });
});

// Função que cria e exibe as novas receitas na seção "nossas-receitas"
function carregarNovasReceitas() {
  const novasReceitas = [
      {
          nome: 'Torta de Maçã',
          descricao: 'Uma sobremesa clássica, deliciosa e reconfortante.',
          imagem: 'imagens/torta-de-maca.webp',
          link: '#'
      },
      {
          nome: 'Bife à Parmegiana',
          descricao: 'Uma deliciosa combinação de carne empanada e molho de tomate.',
          imagem: 'imagens/bife-parmegiana.webp',
          link: '#'
      },
      {
          nome: 'Salada de Frutas',
          descricao: 'Uma opção fresca e saudável para qualquer momento.',
          imagem: 'imagens/salada-frutas.webp',
          link: '#'
      }
  ];

  const grid = document.getElementById('novas-receitas-grid');
  grid.innerHTML = ''; // Limpa o conteúdo antes de inserir

  // Cria cards para cada receita e adiciona na grid
  novasReceitas.forEach(receita => {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe-card');

      recipeCard.innerHTML = `
          <div class="tooltip">${receita.descricao}</div>
          <img src="${receita.imagem}" alt="${receita.nome}">
          <h3>${receita.nome}</h3>
          <p>${receita.descricao}</p>
          <a href="${receita.link}" class="btn">Ver Receita</a>
      `;

      grid.appendChild(recipeCard);
  });
}
