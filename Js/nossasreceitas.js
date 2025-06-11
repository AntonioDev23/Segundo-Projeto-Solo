const navLinks = document.querySelectorAll('.nav-link');
let overlayBlur = null;

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const targetId = this.getAttribute('data-id');
    const sectionsToToggle = ['pagina-inicial', 'nossas-receitas'];

    sectionsToToggle.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        section.style.display = 'none';
      }
    });

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = 'block';
    }

    const receitas = document.getElementById('nossas-receitas');
    const footer = document.querySelector('footer');

    if (targetId === 'nossas-receitas') {
      if (!overlayBlur) {
        overlayBlur = document.createElement('div');
        overlayBlur.style.position = 'fixed';
        overlayBlur.style.top = '0';
        overlayBlur.style.left = '0';
        overlayBlur.style.width = '100%';
        overlayBlur.style.height = '100%';
        overlayBlur.style.backdropFilter = 'blur(15px)';
        overlayBlur.style.zIndex = '1';
        overlayBlur.style.pointerEvents = 'none';
        document.body.appendChild(overlayBlur);
      }

      if (receitas) {
        receitas.style.position = 'relative';
        receitas.style.zIndex = '2';
      }

      if (footer) {
        footer.style.position = 'relative';
        footer.style.zIndex = '2';
      }

      carregarNovasReceitas();
      
    } else {
      if (overlayBlur) {
        overlayBlur.remove();
        overlayBlur = null;
      }

      if (receitas) {
        receitas.style.position = '';
        receitas.style.zIndex = '';
      }
      if (footer) {
        footer.style.position = '';
        footer.style.zIndex = '';
      }
    }
  });
});

function criarEstrelas(container, nota = 5, callback = null, interativo = false) {
  container.innerHTML = '';

  for (let i = 1; i <= 5; i++) {
    const estrela = document.createElement('span');
    estrela.innerHTML = i <= nota ? '★' : '☆';
    estrela.style.fontSize = '24px';
    estrela.style.color = '#FFD700';

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

function carregarNovasReceitas() {
  const novasReceitas = [
    { nome: 'Torta de Maçã',
    descricao: 'Uma sobremesa clássica, deliciosa e reconfortante.',
    imagem: 'imagens/Torta de maçã.png',
    link: '#',
    tempo: '40min',
    avaliacao: 4,
    modoPreparo: `1. Pré-aqueça o forno a 180ºC.
2. Descasque e fatie as maçãs.
3. Misture as maçãs com açúcar, canela e suco de limão.
4. Forre uma forma com massa folhada e coloque o recheio.
5. Cubra com outra camada de massa, faça furos para o vapor sair.
6. Asse por 40 minutos ou até dourar.
7. Deixe esfriar antes de servir.`
  },
  {
    nome: 'Bife à Parmegiana',
    descricao: 'Uma deliciosa combinação de carne empanada e molho de tomate.',
    imagem: 'imagens/Bife a parmegiana.png',
    link: '#',
    tempo: '1h',
    avaliacao: 4,
    modoPreparo: `1. Tempere os bifes com sal e pimenta.
2. Passe-os na farinha de trigo, ovo batido e farinha de rosca.
3. Frite até dourar.
4. Coloque em um refratário, cubra com molho de tomate e queijo mussarela.
5. Leve ao forno a 200ºC até o queijo derreter.
6. Sirva com arroz e batata frita.`
  },
  {
    nome: 'Salada de Frutas',
    descricao: 'Uma opção fresca e saudável para qualquer momento.',
    imagem: 'imagens/Salada de frutas.png',
    link: '#',
    tempo: '15min',
    avaliacao: 4,
    modoPreparo: `1. Lave e corte todas as frutas em pedaços pequenos.
2. Misture todas as frutas em uma tigela grande.
3. Adicione suco de laranja ou limão a gosto.
4. Misture bem e leve à geladeira antes de servir.`
  },
  {
    nome: 'Escondidinho de Carne Seca',
    descricao: 'Purê de mandioca com carne seca desfiada e queijo gratinado.',
    imagem: 'imagens/Carne seca.png',
    link: '#',
    tempo: '1h',
    avaliacao: 5,
    modoPreparo: `1. Dessalgue e cozinhe a carne seca, depois desfie.
2. Cozinhe a mandioca até ficar macia e faça um purê.
3. Refogue a carne seca com cebola, alho e temperos.
4. Em um refratário, coloque uma camada de purê, depois a carne seca e mais purê por cima.
5. Cubra com queijo ralado e leve ao forno para gratinar.
6. Sirva quente.`
  },
  {
    nome: 'Panqueca de Frango',
    descricao: 'Panquecas recheadas com frango desfiado e molho de tomate.',
    imagem: 'imagens/Panqueca de frango.png',
    link: '#',
    tempo: '45min',
    avaliacao: 4,
    modoPreparo: `1. Prepare a massa da panqueca com farinha, ovos, leite e sal.
2. Cozinhe o frango e desfie.
3. Refogue o frango com cebola, alho e molho de tomate.
4. Faça as panquecas na frigideira.
5. Recheie cada panqueca com o frango e enrole.
6. Coloque as panquecas em um refratário, cubra com molho de tomate e queijo.
7. Leve ao forno para gratinar.`
  },
  {
    nome: 'Strogonoff de Frango',
    descricao: 'Frango cremoso com champignon e batata palha.',
    imagem: 'imagens/Strogonoff de frango.png',
    link: '#',
    tempo: '40min',
    avaliacao: 5,
    modoPreparo: `1. Corte o frango em cubos e tempere.
2. Doure o frango em uma panela.
3. Adicione cebola, alho e champignon fatiado.
4. Acrescente molho de tomate, creme de leite e ajuste o sal.
5. Cozinhe até o molho engrossar.
6. Sirva com arroz branco e batata palha.`
  },
  {
    nome: 'Lasanha à Bolonhesa',
    descricao: 'Camadas de massa, carne moída e molho branco.',
    imagem: 'imagens/Lasanha bolonhesa.png',
    link: '#',
    tempo: '1h 15min',
    avaliacao: 5,
    modoPreparo: `1. Cozinhe a massa para lasanha e reserve.
2. Prepare o molho bolonhesa com carne moída, tomate, cebola e temperos.
3. Faça molho branco (bechamel) com manteiga, farinha e leite.
4. Em um refratário, intercale camadas de massa, molho bolonhesa e molho branco.
5. Repita até acabar os ingredientes e finalize com queijo ralado.
6. Asse no forno preaquecido a 180ºC por cerca de 1 hora.
7. Deixe descansar antes de servir.`
  },
  {
    nome: 'Feijoada',
    descricao: 'Prato típico brasileiro com feijão preto e carnes variadas.',
    imagem: 'imagens/Feijoada.png',
    link: '#',
    tempo: '2h',
    avaliacao: 4,
    modoPreparo: `1. Deixe o feijão preto de molho por algumas horas.
2. Cozinhe o feijão com água, folhas de louro e temperos.
3. Cozinhe as carnes separadamente (costelinha, linguiça, carne seca).
4. Junte as carnes ao feijão e cozinhe até tudo ficar macio.
5. Ajuste o sal e sirva com arroz branco, couve e farofa.`
  },
  {
    nome: 'Bolo de Cenoura',
    descricao: 'Bolo fofinho com cobertura de chocolate.',
    imagem: 'imagens/Bolo de cenoura.png',
    link: '#',
    tempo: '50min',
    avaliacao: 5,
    modoPreparo: `1. Bata no liquidificador cenoura, óleo e ovos.
2. Misture os ingredientes secos (farinha, açúcar, fermento) em uma tigela.
3. Adicione o líquido batido aos secos e misture.
4. Asse em forno preaquecido a 180ºC por cerca de 40 minutos.
5. Para a cobertura, derreta chocolate com leite e açúcar.
6. Cubra o bolo após esfriar.`
  },
  {
    nome: 'Macarrão à Carbonara',
    descricao: 'Massa italiana com bacon, ovos e queijo.',
    imagem: 'imagens/Macarrao carbonara.png',
    link: '#',
    tempo: '25min',
    avaliacao: 4,
    modoPreparo: `1. Cozinhe o macarrão até ficar al dente.
2. Frite o bacon até ficar crocante.
3. Em uma tigela, bata ovos com queijo ralado e pimenta.
4. Misture o macarrão quente com o bacon e a mistura de ovos rapidamente.
5. Sirva imediatamente.`
  },
  {
    nome: 'Quiche de Queijo e Alho-Poró',
    descricao: 'Torta salgada com recheio cremoso e massa crocante.',
    imagem: 'imagens/Quiche queijo alho.png',
    link: '#',
    tempo: '1h',
    avaliacao: 5,
    modoPreparo: `1. Prepare a massa com farinha, manteiga e água, e asse parcialmente.
2. Refogue alho-poró e misture com creme de leite e queijo ralado.
3. Despeje o recheio sobre a massa.
4. Asse no forno a 180ºC até firmar e dourar.
5. Deixe esfriar um pouco antes de servir.`
  },
  {
    nome: 'Moqueca de Peixe',
    descricao: 'Prato típico brasileiro com peixe, pimentões e leite de coco.',
    imagem: 'imagens/Moqueca de peixe.png',
    link: '#',
    tempo: '1h',
    avaliacao: 5,
    modoPreparo: `1. Tempere o peixe com sal, limão e alho.
2. Refogue cebola, pimentões e tomate em azeite de dendê.
3. Coloque o peixe na panela, cubra com leite de coco e coentro.
4. Cozinhe em fogo baixo até o peixe estar macio.
5. Sirva com arroz branco e farinha de mandioca.`
  }
];
  

  const grid = document.getElementById('novas-receitas-grid');
  grid.innerHTML = '';

  // Criar modal (estilo inline)
  const modal = document.createElement('div');
  modal.id = 'receita-modal';
  modal.style.display = 'none';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  modal.style.zIndex = '1000';
  modal.style.overflow = 'auto';
  document.body.appendChild(modal);

  // Fechar modal ao clicar no "X" ou fora
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('fechar-modal')) {
      modal.style.display = 'none';
    }
  });

  // Renderizar cards de receita
  novasReceitas.forEach(receita => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    const idEstrelas = `avaliacao-${receita.nome.replace(/\s+/g, '-').toLowerCase()}`;

    recipeCard.innerHTML = `
      <div class="tooltip">${receita.descricao}</div>
      <img src="${receita.imagem}" alt="${receita.nome}">
      <div class="avaliacao-estrelas" id="${idEstrelas}"></div>
      <h3>${receita.nome} <small style="font-size: 0.7em; color: gray; font-weight: normal;">⏱️ ${receita.tempo}</small></h3>
      <button class="btn ver-receita-btn" data-receita='${JSON.stringify(receita)}'>Ver Receita</button>
    `;

    grid.appendChild(recipeCard);

    // Adicionar estrelas
    const divEstrelas = recipeCard.querySelector(`#${idEstrelas}`);
    criarEstrelas(divEstrelas, receita.avaliacao, null, false);
  });

  // Evento para abrir modal
  document.querySelectorAll('.ver-receita-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const receitaData = JSON.parse(btn.getAttribute('data-receita'));
      
      // Conteúdo da modal (estilo inline)
      // Conteúdo da modal (com verificação de ingredientes)
    modal.innerHTML = `
      <div style="background: white; max-width: 600px; margin: 50px auto; padding: 20px; border-radius: 8px; position: relative;">
        <span class="fechar-modal" style="position: absolute; top: 10px; right: 10px; font-size: 24px; cursor: pointer;">&times;</span>
        <h2 style="margin-top: 0;">${receitaData.nome}</h2>
        <img src="${receitaData.imagem}" alt="${receitaData.nome}" style="width: 100%; border-radius: 5px;">
        
        ${receitaData.ingredientes ? `
          <h3 style="margin-bottom: 5px;">Ingredientes</h3>
          <ul style="margin-top: 0;">${receitaData.ingredientes.map(ing => `<li>${ing}</li>`).join('')}</ul>
        ` : ''}
        
        <h3 style="margin-bottom: 5px;">Modo de Preparo</h3>
        <p style="white-space: pre-line; margin-top: 0;">${receitaData.modoPreparo}</p>
      </div>
    `;

    modal.style.display = 'block';
  });
});
}