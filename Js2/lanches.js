export const lanches = [
  {
    titulo: 'Sanduíche Natural de Frango',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/sanduiche-natural-de-frango-730x548.jpeg',
    ingredientes: [
      '2 fatias de pão integral',
      '1/2 xícara de frango desfiado',
      '2 colheres de sopa de maionese',
      '1 colher de sopa de cenoura ralada',
      'Folhas de alface',
      'Sal a gosto',
    ],
    preparo: [
      'Misture o frango, maionese, cenoura e o sal.',
      'Monte o sanduíche com alface e a mistura.',
      'Feche e sirva gelado.'
    ]
  },
  {
    titulo: 'Hambúrguer Caseiro',
    imagem: 'https://static.itdg.com.br/images/1200-675/b4e03e3cf27433d4897d055d93bc9e97/328971-original.jpg',
    ingredientes: [
      '1 pão de hambúrguer',
      '1 hambúrguer de carne bovina',
      '1 fatia de queijo cheddar',
      '1 fatia de tomate',
      'Folhas de alface',
      'Ketchup e maionese a gosto'
    ],
    preparo: [
      'Grelhe o hambúrguer.',
      'Monte o lanche com o pão, queijo, tomate e alface.',
      'Finalize com ketchup e maionese.'
    ]
  },
  {
    titulo: 'Cachorro-Quente Simples',
    imagem: 'https://static.itdg.com.br/images/360-240/27d1e7eb0f64811ae3c303e3bbbdc25f/319823-original.jpg',
    ingredientes: [
      '1 pão de hot dog',
      '1 salsicha',
      'Molho de tomate',
      'Milho e batata palha a gosto'
    ],
    preparo: [
      'Cozinhe a salsicha.',
      'Coloque-a no pão com molho quente.',
      'Finalize com milho e batata palha.'
    ]
  },
  {
    titulo: 'Tapioca com Queijo e Presunto',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/tapioca-recheada-com-queijo-e-presunto-730x548.jpeg',
    ingredientes: [
      '3 colheres de sopa de goma de tapioca',
      '1 fatia de presunto',
      '1 fatia de queijo mussarela',
    ],
    preparo: [
      'Coloque a goma na frigideira e espalhe.',
      'Vire, adicione queijo e presunto.',
      'Dobre e sirva quente.'
    ]
  },
  {
    titulo: 'Pão de Queijo Recheado',
    imagem: 'https://static.itdg.com.br/images/1200-675/5bb0508f030a544f646166d716fc8a44/325521-original.jpg',
    ingredientes: [
      '6 pães de queijo prontos',
      '3 colheres de requeijão',
      'Orégano a gosto'
    ],
    preparo: [
      'Asse os pães de queijo.',
      'Corte ao meio e recheie com requeijão.',
      'Polvilhe orégano e sirva.'
    ]
  },
  {
    titulo: 'Beirute Tradicional',
    imagem: 'https://s2-receitas.glbimg.com/QTCSAj_Ltt-J_vRBhaDxHuvMGgM=/0x0:1920x1080/924x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2022/05/12/beirute_sanduiche.jpg',
    ingredientes: [
      '1 pão sírio',
      '1 filé de frango grelhado',
      'Presunto e mussarela',
      'Alface, tomate, maionese e ovo frito',
    ],
    preparo: [
      'Grelhe o frango e frite o ovo.',
      'Abra o pão sírio e recheie com todos os ingredientes.',
      'Feche, corte ao meio e sirva.'
    ]
  },
  {
    titulo: 'Mini Pizza de Pão de Forma',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/mini-pizza-de-pao-de-forma-730x548.jpeg',
    ingredientes: [
      '2 fatias de pão de forma',
      'Molho de tomate',
      'Queijo ralado',
      'Orégano',
      'Rodelas de calabresa ou tomate'
    ],
    preparo: [
      'Passe molho no pão.',
      'Adicione queijo e cobertura.',
      'Leve ao forno por 10 min e sirva.'
    ]
  },
  {
    titulo: 'Wrap de Atum',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/wrap-de-atum-730x548.jpeg',
    ingredientes: [
      '1 tortilha de trigo',
      '1/2 lata de atum',
      '1 colher de maionese',
      'Folhas de rúcula ou alface',
      'Rodelas de cenoura ou pepino'
    ],
    preparo: [
      'Misture o atum com maionese.',
      'Espalhe sobre a tortilha.',
      'Adicione vegetais, enrole e sirva.'
    ]
  },
  {
    titulo: 'Misto Quente Clássico',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/misto-quente-de-forno-730x548.jpeg',
    ingredientes: [
      '2 fatias de pão de forma',
      '1 fatia de presunto',
      '1 fatia de queijo',
      'Manteiga para dourar'
    ],
    preparo: [
      'Monte o lanche com o queijo e presunto.',
      'Doure na frigideira dos dois lados.',
      'Sirva ainda quente.'
    ]
  },
  {
    titulo: 'Croissant de Presunto e Queijo',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/croissant-de-presunto-e-queijo-730x548.jpeg',
    ingredientes: [
      '1 croissant grande',
      'Presunto e queijo a gosto',
      'Orégano (opcional)'
    ],
    preparo: [
      'Corte o croissant ao meio.',
      'Adicione presunto e queijo.',
      'Leve ao forno por 5 min até derreter.'
    ]
  }
];




// Detalhes da receita de lanche
function criarModalDetalhesLanches(lanche) {
  const modalAntigo = document.getElementById('modal-detalhes');
  if (modalAntigo) modalAntigo.remove();

  const overlay = document.createElement('div');
  overlay.id = 'modal-detalhes';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.zIndex = '20000';

  const modal = document.createElement('div');
  modal.style.backgroundColor = '#fff';
  modal.style.padding = '30px';
  modal.style.borderRadius = '10px';
  modal.style.width = '500px';
  modal.style.maxHeight = '80vh';
  modal.style.overflowY = 'auto';
  modal.style.boxShadow = '0 0 15px rgba(0,0,0,0.4)';
  modal.style.position = 'relative';

  // Estrelas (padrão)
  const estrelas = document.createElement('div');
  estrelas.textContent = '★★★★★';
  estrelas.style.textAlign = 'center';
  estrelas.style.fontSize = '40px';
  estrelas.style.marginBottom = '15px';
  estrelas.style.color = 'gold';
  modal.appendChild(estrelas);

  // Título do lanche
  const titulo = document.createElement('h2');
  titulo.textContent = lanche.titulo;
  titulo.style.color = '#8b0000';
  titulo.style.marginBottom = '20px';
  titulo.style.textAlign = 'center';
  modal.appendChild(titulo);

  // Imagem do lanche (se existir)
  if (lanche.imagem) {
    const img = document.createElement('img');
    img.src = lanche.imagem;
    img.alt = lanche.titulo;
    img.style.display = 'block';
    img.style.margin = '0 auto 20px';
    img.style.maxWidth = '100%';
    img.style.borderRadius = '8px';
    modal.appendChild(img);
  }

  // Título "Receita"
  const receitaTitulo = document.createElement('h3');
  receitaTitulo.textContent = 'Receita';
  receitaTitulo.style.color = '#8b0000';
  receitaTitulo.style.marginBottom = '10px';
  receitaTitulo.style.textAlign = 'center';
  modal.appendChild(receitaTitulo);

  // Lista de ingredientes
  const ingredientes = document.createElement('ul');
  ingredientes.style.marginBottom = '20px';
  ingredientes.style.paddingLeft = '20px';
  lanche.ingredientes.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ingredientes.appendChild(li);
  });
  modal.appendChild(ingredientes);

  // Título "Modo de preparo"
  const preparoTitulo = document.createElement('h3');
  preparoTitulo.textContent = 'Modo de preparo';
  preparoTitulo.style.color = '#8b0000';
  preparoTitulo.style.marginBottom = '10px';
  preparoTitulo.style.textAlign = 'center';
  modal.appendChild(preparoTitulo);

  // Lista de preparo
  const preparo = document.createElement('ol');
  preparo.style.paddingLeft = '20px';
  lanche.preparo.forEach(passo => {
    const li = document.createElement('li');
    li.textContent = passo;
    preparo.appendChild(li);
  });
  modal.appendChild(preparo);

  // Botão fechar
  const btnFechar = document.createElement('button');
  btnFechar.textContent = 'Fechar';
  btnFechar.style.marginTop = '20px';
  btnFechar.style.width = '100%';
  btnFechar.style.padding = '10px';
  btnFechar.style.backgroundColor = '#8b0000';
  btnFechar.style.color = '#fff';
  btnFechar.style.border = 'none';
  btnFechar.style.borderRadius = '5px';
  btnFechar.style.fontWeight = 'bold';
  btnFechar.style.cursor = 'pointer';

  btnFechar.addEventListener('click', () => {
    overlay.remove();
  });

  modal.appendChild(btnFechar);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}
