
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

    // Escurece ou clareia o fundo conforme a seção
    if (targetId === 'nossas-receitas') {
      document.body.classList.add('fundo-escurecido');
      carregarNovasReceitas();
    } else {
      document.body.classList.remove('fundo-escurecido');
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
        imagem: 'imagens/Carne seca.png',
        link: '#'
    },
    {
        nome: 'Panqueca de Frango',
        descricao: 'Panquecas recheadas com frango desfiado e molho de tomate.',
        imagem: 'imagens/Panqueca de frango.png',
        link: '#'
    },
    {
        nome: 'Strogonoff de Frango',
        descricao: 'Frango cremoso com champignon e batata palha.',
        imagem: 'imagens/Strogonoff de frango.png',
        link: '#'
    },
    {
        nome: 'Lasanha à Bolonhesa',
        descricao: 'Camadas de massa, carne moída e molho branco.',
        imagem: 'imagens/Lasanha bolonhesa.png',
        link: '#'
    },
    {
        nome: 'Feijoada',
        descricao: 'Prato típico brasileiro com feijão preto e carnes variadas.',
        imagem: 'imagens/Feijoada.png',
        link: '#'
    },
    {
        nome: 'Bolo de Cenoura',
        descricao: 'Bolo fofinho com cobertura de chocolate.',
        imagem: 'imagens/Bolo de cenoura.png',
        link: '#'
    },
    {
        nome: 'Macarrão à Carbonara',
        descricao: 'Massa italiana com bacon, ovos e queijo.',
        imagem: 'imagens/Macarrao carbonara.png',
        link: '#'
    },
    {
        nome: 'Quiche de Queijo e Alho-Poró',
        descricao: 'Torta salgada com recheio cremoso e massa crocante.',
        imagem: 'imagens/Quiche queijo alho.png',
        link: '#'
    },
    {
        nome: 'Moqueca de Peixe',
        descricao: 'Prato típico brasileiro com peixe, pimentões e leite de coco.',
        imagem: 'imagens/Moqueca de peixe.png',
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
