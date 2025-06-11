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
  {
    nome: 'Torta de Maçã',
    descricao: 'Uma sobremesa clássica, deliciosa e reconfortante.',
    imagem: 'imagens/Torta de maçã.png',
    tempo: '40min',
    avaliacao: 4,
    ingredientes: [
      "4 maçãs médias",
      "2 xícaras de farinha de trigo",
      "1 xícara de açúcar",
      "1 colher de chá de canela",
      "1 massa folhada pronta",
      "Suco de 1 limão"
    ],
    modoPreparo: `1. Pré-aqueça o forno a 180ºC.\n2. Descasque e fatie as maçãs.\n3. Misture as maçãs com açúcar, canela e suco de limão.\n4. Forre uma forma com massa folhada e coloque o recheio.\n5. Cubra com outra camada de massa, faça furos para o vapor sair.\n6. Asse por 40 minutos ou até dourar.\n7. Deixe esfriar antes de servir.`
  },
  {
    nome: 'Bife à Parmegiana',
    descricao: 'Uma deliciosa combinação de carne empanada e molho de tomate.',
    imagem: 'imagens/Bife a parmegiana.png',
    tempo: '1h',
    avaliacao: 4,
    ingredientes: [
      "4 bifes de carne (filé mignon ou alcatra)",
      "2 ovos batidos",
      "1 xícara de farinha de trigo",
      "1 xícara de farinha de rosca",
      "200g de queijo mussarela",
      "1 xícara de molho de tomate"
    ],
    modoPreparo: `1. Tempere os bifes com sal e pimenta.\n2. Passe-os na farinha de trigo, ovo batido e farinha de rosca.\n3. Frite até dourar.\n4. Coloque em um refratário, cubra com molho de tomate e queijo mussarela.\n5. Leve ao forno a 200ºC até o queijo derreter.\n6. Sirva com arroz e batata frita.`
  },
  {
    nome: 'Salada de Frutas',
    descricao: 'Uma opção fresca e saudável para qualquer momento.',
    imagem: 'imagens/Salada de frutas.png',
    tempo: '15min',
    avaliacao: 4,
    ingredientes: [
      "1 maçã",
      "1 banana",
      "1 manga",
      "1 xícara de morangos",
      "1 xícara de uvas",
      "Suco de 1 laranja"
    ],
    modoPreparo: `1. Lave e corte todas as frutas em pedaços pequenos.\n2. Misture todas as frutas em uma tigela grande.\n3. Adicione suco de laranja ou limão a gosto.\n4. Misture bem e leve à geladeira antes de servir.`
  },
  {
    nome: 'Escondidinho de Carne Seca',
    descricao: 'Purê de mandioca com carne seca desfiada e queijo gratinado.',
    imagem: 'imagens/Carne seca.png',
    tempo: '1h',
    avaliacao: 5,
    ingredientes: [
      "500g de carne seca dessalgada",
      "1kg de mandioca cozida",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 xícara de queijo ralado",
      "2 colheres de manteiga"
    ],
    modoPreparo: `1. Dessalgue e cozinhe a carne seca, depois desfie.\n2. Cozinhe a mandioca até ficar macia e faça um purê.\n3. Refogue a carne seca com cebola, alho e temperos.\n4. Em um refratário, coloque uma camada de purê, depois a carne seca e mais purê por cima.\n5. Cubra com queijo ralado e leve ao forno para gratinar.\n6. Sirva quente.`
  },
  {
    nome: 'Panqueca de Frango',
    descricao: 'Panquecas recheadas com frango desfiado e molho de tomate.',
    imagem: 'imagens/Panqueca de frango.png',
    tempo: '45min',
    avaliacao: 4,
    ingredientes: [
      "2 xícaras de farinha de trigo",
      "2 ovos",
      "1 1/2 xícara de leite",
      "1 peito de frango cozido e desfiado",
      "1 cebola picada",
      "2 dentes de alho picados"
    ],
    modoPreparo: `1. Prepare a massa da panqueca com farinha, ovos, leite e sal.\n2. Cozinhe o frango e desfie.\n3. Refogue o frango com cebola, alho e molho de tomate.\n4. Faça as panquecas na frigideira.\n5. Recheie cada panqueca com o frango e enrole.\n6. Coloque as panquecas em um refratário, cubra com molho de tomate e queijo.\n7. Leve ao forno para gratinar.`
  },
  {
    nome: 'Strogonoff de Frango',
    descricao: 'Frango cremoso com champignon e batata palha.',
    imagem: 'imagens/Strogonoff de frango.png',
    tempo: '40min',
    avaliacao: 5,
    ingredientes: [
      "500g de peito de frango em cubos",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 lata de champignons em conserva",
      "1 caixa de creme de leite",
      "1/2 xícara de ketchup"
    ],
    modoPreparo: `1. Corte o frango em cubos e tempere.\n2. Doure o frango em uma panela.\n3. Adicione cebola, alho e champignon fatiado.\n4. Acrescente molho de tomate, creme de leite e ajuste o sal.\n5. Cozinhe até o molho engrossar.\n6. Sirva com arriz branco e batata palha.`
  },
  {
    nome: 'Lasanha à Bolonhesa',
    descricao: 'Camadas de massa, carne moída e molho branco.',
    imagem: 'imagens/Lasanha bolonhesa.png',
    tempo: '1h 15min',
    avaliacao: 5,
    ingredientes: [
      "500g de massa para lasanha",
      "500g de carne moída",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 lata de molho de tomate",
      "200g de queijo mussarela ralado"
    ],
    modoPreparo: `1. Cozinhe a massa para lasanha e reserve.\n2. Prepare o molho bolonhesa com carne moída, tomate, cebola e temperos.\n3. Faça molho branco (bechamel) com manteiga, farinha e leite.\n4. Em um refratário, intercale camadas de massa, molho bolonhesa e molho branco.\n5. Repita até acabar os ingredientes e finalize com queijo ralado.\n6. Asse no forno preaquecido a 180ºC por cerca de 1 hora.\n7. Deixe descansar antes de servir.`
  },
  {
    nome: 'Feijoada',
    descricao: 'Prato típico brasileiro com feijão preto e carnes variadas.',
    imagem: 'imagens/Feijoada.png',
    tempo: '2h',
    avaliacao: 4,
    ingredientes: [
      "500g de feijão preto",
      "300g de carne seca",
      "200g de linguiça calabresa",
      "200g de costelinha de porco",
      "2 folhas de louro",
      "1 cebola picada"
    ],
    modoPreparo: `1. Deixe o feijão preto de molho por algumas horas.\n2. Cozinhe o feijão com água, folhas de louro e temperos.\n3. Cozinhe as carnes separadamente (costelinha, linguiça, carne seca).\n4. Junte as carnes ao feijão e cozinhe até tudo ficar macio.\n5. Ajuste o sal e sirva com arroz branco, couve e farofa.`
  },
  {
    nome: 'Bolo de Cenoura',
    descricao: 'Bolo fofinho com cobertura de chocolate.',
    imagem: 'imagens/Bolo de cenoura.png',
    tempo: '50min',
    avaliacao: 5,
    ingredientes: [
      "3 cenouras médias",
      "3 ovos",
      "1 xícara de óleo",
      "2 xícaras de açúcar",
      "2 xícaras de farinha de trigo",
      "1 colher de sopa de fermento em pó"
    ],
    modoPreparo: `1. Bata no liquidificador cenoura, óleo e ovos.\n2. Misture os ingredientes secos (farinha, açúcar, fermento) em uma tigela.\n3. Adicione o líquido batido aos secos e misture.\n4. Asse em forno preaquecido a 180ºC por cerca de 40 minutos.\n5. Para a cobertura, derreta chocolate com leite e açúcar.\n6. Cubra o bolo após esfriar.`
  },
  {
    nome: 'Macarrão à Carbonara',
    descricao: 'Massa italiana com bacon, ovos e queijo.',
    imagem: 'imagens/Macarrao carbonara.png',
    tempo: '25min',
    avaliacao: 4,
    ingredientes: [
      "500g de macarrão espaguete",
      "200g de bacon em cubos",
      "3 ovos",
      "1 xícara de queijo parmesão ralado",
      "2 dentes de alho picados"
    ],
    modoPreparo: `1. Cozinhe o macarrão até ficar al dente.\n2. Frite o bacon até ficar crocante.\n3. Em uma tigela, bata ovos com queijo ralado e pimenta.\n4. Misture o macarrão quente com o bacon e a mistura de ovos rapidamente.\n5. Sirva imediatamente.`
  },
  {
    nome: 'Quiche de Queijo e Alho-Poró',
    descricao: 'Torta salgada com recheio cremoso e massa crocante.',
    imagem: 'imagens/Quiche queijo alho.png',
    tempo: '1h',
    avaliacao: 5,
    ingredientes: [
      "1 massa podre pronta",
      "2 alhos-poró cortados em rodelas",
      "200g de queijo mussarela ralado",
      "3 ovos",
      "1 xícara de creme de leite"
    ],
    modoPreparo: `1. Prepare a massa com farinha, manteiga e água, e asse parcialmente.\n2. Refogue alho-poró e misture com creme de leite e queijo ralado.\n3. Despeje o recheio sobre a massa.\n4. Asse no forno a 180ºC até firmar e dourar.\n5. Deixe esfriar um pouco antes de servir.`
  },
  {
    nome: 'Moqueca de Peixe',
    descricao: 'Prato típico brasileiro com peixe, pimentões e leite de coco.',
    imagem: 'imagens/Moqueca de peixe.png',
    tempo: '1h',
    avaliacao: 5,
    ingredientes: [
      "1kg de peixe branco em postas",
      "2 pimentões vermelhos em rodelas",
      "1 cebola em rodelas",
      "2 tomates em rodelas",
      "1 xícara de leite de coco",
      "2 colheres de azeite de dendê"
    ],
    modoPreparo: `1. Tempere o peixe com sal, limão e alho.\n2. Refogue cebola, pimentões e tomate em azeite de dendê.\n3. Coloque o peixe na panela, cubra com leite de coco e coentro.\n4. Cozinhe em fogo baixo até o peixe estar macio.\n5. Sirva com arroz branco e farinha de mandioca.`
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

  // Evento para abrir modal - VERSÃO CORRIGIDA E TESTADA
document.querySelectorAll('.ver-receita-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Verifica se consegue parsear os dados corretamente
    try {
      const receitaData = JSON.parse(btn.getAttribute('data-receita'));
      
      // Debug: Mostra os dados no console para verificação
      console.log("Dados da receita:", receitaData);
      
      // Verifica se os dados essenciais existem
      if (!receitaData || !receitaData.nome || !receitaData.modoPreparo) {
        console.error("Dados da receita incompletos!");
        return;
      }

      // Cria o conteúdo da modal com tratamento seguro para ingredientes
      const ingredientesHTML = receitaData.ingredientes 
        ? receitaData.ingredientes.map(ing => `<li>${ing}</li>`).join('')
        : '<li>Ingredientes não informados</li>';

      modal.innerHTML = `
        <div style="background: white; max-width: 600px; margin: 50px auto; padding: 20px; border-radius: 8px; position: relative;">
          <span class="fechar-modal" style="position: absolute; top: 10px; right: 10px; font-size: 24px; cursor: pointer;">&times;</span>
          <h2 style="margin-top: 0; color:#8b0000; text-align: center; ">${receitaData.nome}</h2>
          ${receitaData.imagem ? `<img src="${receitaData.imagem}" alt="${receitaData.nome}" style="width: 100%; border-radius: 5px;">` : ''}
          
          <h3 style="margin-bottom: 5px; color:#8b0000; text-align: center;">Ingredientes</h3>
          <ul style="margin-top: 0;">${ingredientesHTML}</ul>
          
          <h3 style="margin-bottom: 5px; color:#8b0000; text-align: center;">Modo de Preparo</h3>
          <p style="white-space: pre-line; margin-top: 0;">${receitaData.modoPreparo}</p>
        </div>
      `;

      modal.style.display = 'block';

    } catch (error) {
      console.error("Erro ao exibir receita:", error);
      // Fallback caso ocorra erro
      modal.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 8px;">
          <h2>Erro ao carregar a receita</h2>
          <p>Por favor, tente novamente.</p>
        </div>
      `;
      modal.style.display = 'block';
    }
  });
});
}