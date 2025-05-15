
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
        imagem: 'imagens/Torta de maçã.png',
        link: '#'
    },
    {
        nome: 'Bife à Parmegiana',
        descricao: 'Uma deliciosa combinação de carne empanada e molho de tomate.',
        imagem: 'imagens/Bife a parmegiana.png',
        link: '#'
    },
    {
        nome: 'Salada de Frutas',
        descricao: 'Uma opção fresca e saudável para qualquer momento.',
        imagem: 'imagens/Salada de frutas.png',
        link: '#'
    },
    {
        nome: 'Escondidinho de Carne Seca',
        descricao: 'Purê de mandioca com carne seca desfiada e queijo gratinado.',
        imagem: 'imagens/escondidinho-carne-seca.webp',
        link: '#'
    },
    {
        nome: 'Panqueca de Frango',
        descricao: 'Panquecas recheadas com frango desfiado e molho de tomate.',
        imagem: 'imagens/panqueca-frango.webp',
        link: '#'
    },
    {
        nome: 'Strogonoff de Frango',
        descricao: 'Frango cremoso com champignon e batata palha.',
        imagem: 'imagens/strogonoff-frango.webp',
        link: '#'
    },
    {
        nome: 'Lasanha à Bolonhesa',
        descricao: 'Camadas de massa, carne moída e molho branco.',
        imagem: 'imagens/lasanha-bolonhesa.webp',
        link: '#'
    },
    {
        nome: 'Feijoada',
        descricao: 'Prato típico brasileiro com feijão preto e carnes variadas.',
        imagem: 'imagens/feijoada.webp',
        link: '#'
    },
    {
        nome: 'Bolo de Cenoura',
        descricao: 'Bolo fofinho com cobertura de chocolate.',
        imagem: 'imagens/bolo-cenoura.webp',
        link: '#'
    },
    {
        nome: 'Macarrão à Carbonara',
        descricao: 'Massa italiana com bacon, ovos e queijo.',
        imagem: 'imagens/macarrao-carbonara.webp',
        link: '#'
    },
    {
        nome: 'Quiche de Queijo e Alho-Poró',
        descricao: 'Torta salgada com recheio cremoso e massa crocante.',
        imagem: 'imagens/quiche-queijo-alho.webp',
        link: '#'
    },
    {
        nome: 'Moqueca de Peixe',
        descricao: 'Prato típico brasileiro com peixe, pimentões e leite de coco.',
        imagem: 'imagens/moqueca-peixe.webp',
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
