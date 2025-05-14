
// Navegação SPA-like para mostrar e esconder seções com base no atributo data-id dos links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Evita que o link recarregue a página

    const sectionId = link.getAttribute('data-id'); // Pega o id da seção que deve ser mostrada

    // Esconde todas as seções principais (dentro do main e a seção de novas receitas)
    document.querySelectorAll('main > section, #nossas-receitas').forEach(section => {
      section.style.display = 'none';
    });

    // Exibe a seção correspondente ao id selecionado
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.style.display = 'block';
    }
  });
});


// Script para exibir novas receitas ao clicar no botão de filtros (filterToggle)
document.getElementById('filterToggle').addEventListener('click', function() {
  // Array com as novas receitas para serem exibidas dinamicamente
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
  grid.innerHTML = ''; // Limpa o conteúdo existente da grid antes de adicionar as novas receitas

  // Para cada receita no array, cria um card de receita e adiciona à grid
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

    grid.appendChild(recipeCard); // Adiciona o card ao container da grid
  });

  // Exibe a seção de novas receitas quando o botão de filtro é clicado
  document.getElementById('nossas-receitas').style.display = 'block';
});
