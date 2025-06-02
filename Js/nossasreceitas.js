// Seleciona todos os links do menu com a classe 'nav-link'
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('data-id');
    const sectionsToToggle = ['pagina-inicial', 'nossas-receitas'];

    sectionsToToggle.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        section.style.display = 'none';
        section.style.filter = 'none'; // Remove blur ao esconder seção
      }
    });

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = 'block';
    }

    if (targetId === 'nossas-receitas') {
      document.body.style.filter = 'blur(5px)';
      if (targetSection) targetSection.style.filter = 'none'; // Remove blur da seção ativa
      carregarNovasReceitas();
    } else {
      document.body.style.filter = 'none';
    }
  });
});

// Função que cria estrelas (modo visual ou interativo)
function criarEstrelas(container, nota = 5, callback = null, interativo = false) {
  container.innerHTML = ''; // Limpa o container

  for (let i = 1; i <= 5; i++) {
    const estrela = document.createElement('span');
    if (i <= nota) {
      estrela.innerHTML = '★';  // estrela cheia
    } else {
      estrela.innerHTML = '☆';  // estrela vazia
    }
    estrela.style.fontSize = '24px';
    estrela.style.color = '#FFD700'; // cor gold para ambas

    if (interativo) {
      estrela.style.cursor = 'pointer';
      estrela.addEventListener('click', () => {
        const estrelas = container.querySelectorAll('span');
        estrelas.forEach((el, index) => {
          el.style.color = index < i ? '#FFD700' : '#ccc';
          el.innerHTML = index < i ? '★' : '☆';
        });
        if (callback) callback(i);
      });
    }

    container.appendChild(estrela);
  }
}

// Função que cria e exibe as novas receitas na seção "nossas-receitas"
function carregarNovasReceitas() {
  const novasReceitas = [
    {
      nome: 'Torta de Maçã',
      descricao: 'Uma sobremesa clássica, deliciosa e reconfortante.',
      imagem: 'imagens/Torta de maçã.png',
      link: '#',
      tempo: '40min',
      avaliacao: 4
    },
    {
      nome: 'Bife à Parmegiana',
      descricao: 'Uma deliciosa combinação de carne empanada e molho de tomate.',
      imagem: 'imagens/Bife a parmegiana.png',
      link: '#',
      tempo: '1h',
      avaliacao: 4
    },
    {
      nome: 'Salada de Frutas',
      descricao: 'Uma opção fresca e saudável para qualquer momento.',
      imagem: 'imagens/Salada de frutas.png',
      link: '#',
      tempo: '15min',
      avaliacao: 4
    },
    {
      nome: 'Escondidinho de Carne Seca',
      descricao: 'Purê de mandioca com carne seca desfiada e queijo gratinado.',
      imagem: 'imagens/Carne seca.png',
      link: '#',
      tempo: '1h',
      avaliacao: 5
    },
    {
      nome: 'Panqueca de Frango',
      descricao: 'Panquecas recheadas com frango desfiado e molho de tomate.',
      imagem: 'imagens/Panqueca de frango.png',
      link: '#',
      tempo: '45min',
      avaliacao: 4
    },
    {
      nome: 'Strogonoff de Frango',
      descricao: 'Frango cremoso com champignon e batata palha.',
      imagem: 'imagens/Strogonoff de frango.png',
      link: '#',
      tempo: '40min',
      avaliacao: 5
    },
    {
      nome: 'Lasanha à Bolonhesa',
      descricao: 'Camadas de massa, carne moída e molho branco.',
      imagem: 'imagens/Lasanha bolonhesa.png',
      link: '#',
      tempo: '1h 15min',
      avaliacao: 5
    },
    {
      nome: 'Feijoada',
      descricao: 'Prato típico brasileiro com feijão preto e carnes variadas.',
      imagem: 'imagens/Feijoada.png',
      link: '#',
      tempo: '2h',
      avaliacao: 4
    },
    {
      nome: 'Bolo de Cenoura',
      descricao: 'Bolo fofinho com cobertura de chocolate.',
      imagem: 'imagens/Bolo de cenoura.png',
      link: '#',
      tempo: '50min',
      avaliacao: 5
    },
    {
      nome: 'Macarrão à Carbonara',
      descricao: 'Massa italiana com bacon, ovos e queijo.',
      imagem: 'imagens/Macarrao carbonara.png',
      link: '#',
      tempo: '25min',
      avaliacao: 4
    },
    {
      nome: 'Quiche de Queijo e Alho-Poró',
      descricao: 'Torta salgada com recheio cremoso e massa crocante.',
      imagem: 'imagens/Quiche queijo alho.png',
      link: '#',
      tempo: '1h',
      avaliacao: 5
    },
    {
      nome: 'Moqueca de Peixe',
      descricao: 'Prato típico brasileiro com peixe, pimentões e leite de coco.',
      imagem: 'imagens/Moqueca de peixe.png',
      link: '#',
      tempo: '1h',
      avaliacao: 5
    }
  ];

  const grid = document.getElementById('novas-receitas-grid');
  grid.innerHTML = ''; // Limpa o conteúdo antes de inserir

  novasReceitas.forEach(receita => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    const idEstrelas = `avaliacao-${receita.nome.replace(/\s+/g, '-').toLowerCase()}`;

    recipeCard.innerHTML = `
      <div class="tooltip">${receita.descricao}</div>
      <img src="${receita.imagem}" alt="${receita.nome}">
      <div class="avaliacao-estrelas" id="${idEstrelas}"></div>
      <h3>${receita.nome} <small style="font-size: 0.7em; color: gray; font-weight: normal;">⏱️ ${receita.tempo}</small></h3>
      <p>${receita.descricao}</p>
      <a href="${receita.link}" class="btn">Ver Receita</a>
    `;

    grid.appendChild(recipeCard);

    const divEstrelas = recipeCard.querySelector(`#${idEstrelas}`);
    divEstrelas.classList.add('stars-visual');

    // Mostra a avaliação correta (4, 5, etc) sem interação
    criarEstrelas(divEstrelas, receita.avaliacao, null, false);
  });
}
