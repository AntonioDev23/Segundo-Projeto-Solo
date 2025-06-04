export const cafeDaManha = [
  {
    titulo: 'Pão na Chapa',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/pao-na-chapa-730x548.jpeg',
    ingredientes: [
      '2 fatias de pão francês',
      'Manteiga a gosto',
      'Café ou suco para acompanhar'
    ],
    preparo: [
      'Passe manteiga nas fatias de pão.',
      'Coloque na chapa quente até dourar.',
      'Sirva quente com café ou suco.'
    ]
  },
  {
    titulo: 'Tapioca com Queijo',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/tapioca-recheada-com-queijo-e-presunto-730x548.jpeg',
    ingredientes: [
      '3 colheres de sopa de goma de tapioca',
      '1 fatia de queijo mussarela',
      'Sal a gosto'
    ],
    preparo: [
      'Aqueça a frigideira e espalhe a goma de tapioca.',
      'Quando firmar, vire e adicione o queijo.',
      'Dobre ao meio e sirva quente.'
    ]
  },
  {
    titulo: 'Ovos Mexidos',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/ovos-mexidos-730x548.jpeg',
    ingredientes: [
      '3 ovos',
      'Sal e pimenta a gosto',
      'Manteiga para untar'
    ],
    preparo: [
      'Bata os ovos com sal e pimenta.',
      'Aqueça a manteiga na frigideira.',
      'Despeje os ovos e mexa até ficarem cremosos.',
      'Sirva quente.'
    ]
  },
  {
    titulo: 'Vitamina de Frutas',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/vitamina-de-frutas-730x548.jpeg',
    ingredientes: [
      '1 banana',
      '1/2 mamão',
      '1 copo de leite',
      'Mel a gosto'
    ],
    preparo: [
      'Bata todos os ingredientes no liquidificador.',
      'Sirva gelado.'
    ]
  },
  {
    titulo: 'Panqueca Simples',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/panqueca-simples-730x548.jpeg',
    ingredientes: [
      '1 xícara de farinha de trigo',
      '1 ovo',
      '1 xícara de leite',
      '1 colher de sopa de açúcar',
      'Manteiga para untar'
    ],
    preparo: [
      'Misture todos os ingredientes até formar uma massa homogênea.',
      'Unte a frigideira e despeje a massa.',
      'Cozinhe dos dois lados até dourar.',
      'Sirva com mel ou geleia.'
    ]
  },
  {
    titulo: 'Cuscuz Nordestino',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/cuscuz-nordestino-730x548.jpeg',
    ingredientes: [
      '1 xícara de farinha de milho para cuscuz',
      'Sal a gosto',
      'Manteiga para servir'
    ],
    preparo: [
      'Coloque a farinha em uma cuscuzeira.',
      'Cozinhe no vapor por 15 minutos.',
      'Sirva quente com manteiga.'
    ]
  },
  {
    titulo: 'Mingau de Aveia',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/mingau-de-aveia-730x548.jpeg',
    ingredientes: [
      '1/2 xícara de aveia em flocos',
      '2 xícaras de leite',
      'Mel ou açúcar a gosto'
    ],
    preparo: [
      'Misture a aveia e o leite em uma panela.',
      'Cozinhe em fogo médio até engrossar.',
      'Adoce a gosto e sirva quente.'
    ]
  },
  {
    titulo: 'Pão de Queijo',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/pao-de-queijo-730x548.jpeg',
    ingredientes: [
      '500g de polvilho doce',
      '200ml de leite',
      '100ml de óleo',
      '2 ovos',
      '200g de queijo minas ralado',
      'Sal a gosto'
    ],
    preparo: [
      'Ferva o leite com o óleo e o sal.',
      'Misture com o polvilho e espere amornar.',
      'Adicione ovos e queijo, misture bem.',
      'Forme bolinhas e asse em forno médio por 25 minutos.'
    ]
  },
  {
    titulo: 'Café com Leite',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/cafe-com-leite-730x548.jpeg',
    ingredientes: [
      '1 xícara de café forte',
      '1 xícara de leite quente',
      'Açúcar a gosto'
    ],
    preparo: [
      'Prepare o café forte.',
      'Aqueça o leite separadamente.',
      'Misture e adoce a gosto.',
      'Sirva quente.'
    ]
  },
  {
    titulo: 'Bolo de Fubá',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/bolo-de-fuba-730x548.jpeg',
    ingredientes: [
      '1 xícara de fubá',
      '1 xícara de farinha de trigo',
      '1 xícara de açúcar',
      '3 ovos',
      '1/2 xícara de óleo',
      '1 xícara de leite',
      '1 colher de sopa de fermento em pó'
    ],
    preparo: [
      'Misture todos os ingredientes, exceto o fermento.',
      'Adicione o fermento por último e misture delicadamente.',
      'Despeje em forma untada.',
      'Asse em forno médio por 40 minutos.'
    ]
  }
];

// Lista de cafés
function abrirModalListaCafes(listaCafes) {
  const modalAntigo = document.getElementById('modal-cafes');
  if (modalAntigo) modalAntigo.remove();

  const overlay = document.createElement('div');
  overlay.id = 'modal-cafes';
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
  modal.style.width = '400px';
  modal.style.maxHeight = '80vh';
  modal.style.overflowY = 'auto';
  modal.style.boxShadow = '0 0 15px rgba(0,0,0,0.4)';
  modal.style.position = 'relative';

  const titulo = document.createElement('h2');
  titulo.textContent = 'Cafés da Manhã';
  titulo.style.color = '#8b0000';
  titulo.style.marginBottom = '20px';
  titulo.style.textAlign = 'center';
  modal.appendChild(titulo);

  const lista = document.createElement('ul');
  lista.style.listStyle = 'none';
  lista.style.padding = '0';

  listaCafes.forEach(cafe => {
    const item = document.createElement('li');
    item.textContent = cafe.titulo;
    item.style.padding = '10px';
    item.style.cursor = 'pointer';
    item.style.borderBottom = '1px solid #ccc';
    item.addEventListener('click', () => {
      overlay.remove(); // Fecha o modal de lista
      criarModalDetalhesCafe(cafe); // Abre o modal com os detalhes
    });
    lista.appendChild(item);
  });

  modal.appendChild(lista);

  const botaoFechar = document.createElement('button');
  botaoFechar.textContent = 'Fechar';
  botaoFechar.style.marginTop = '20px';
  botaoFechar.style.padding = '10px 20px';
  botaoFechar.style.backgroundColor = '#8b0000';
  botaoFechar.style.color = '#fff';
  botaoFechar.style.border = 'none';
  botaoFechar.style.borderRadius = '5px';
  botaoFechar.style.cursor = 'pointer';
  botaoFechar.style.display = 'block';
  botaoFechar.style.marginLeft = 'auto';
  botaoFechar.style.marginRight = 'auto';
  botaoFechar.addEventListener('click', () => overlay.remove());

  modal.appendChild(botaoFechar);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}


// Detalhes da receita de cafés
function criarModalDetalhesCafe(cafe) {
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

  const titulo = document.createElement('h2');
  titulo.textContent = cafe.titulo;
  titulo.style.color = '#8b0000';
  titulo.style.marginBottom = '20px';
  titulo.style.textAlign = 'center';
  modal.appendChild(titulo);

  const img = document.createElement('img');
  img.src = cafe.imagem;
  img.alt = cafe.titulo;
  img.style.width = '100%';
  img.style.borderRadius = '8px';
  img.style.marginBottom = '20px';
  modal.appendChild(img);

  const ingredientesTitulo = document.createElement('h3');
  ingredientesTitulo.textContent = 'Ingredientes:';
  ingredientesTitulo.style.color = '#ff6b00';
  modal.appendChild(ingredientesTitulo);

  const listaIngredientes = document.createElement('ul');
  for (const ingrediente of cafe.ingredientes) {
    const li = document.createElement('li');
    li.textContent = ingrediente;
    listaIngredientes.appendChild(li);
  }
  modal.appendChild(listaIngredientes);

  const preparoTitulo = document.createElement('h3');
  preparoTitulo.textContent = 'Modo de Preparo:';
  preparoTitulo.style.color = '#ff6b00';
  preparoTitulo.style.marginTop = '20px';
  modal.appendChild(preparoTitulo);

  const listaPreparo = document.createElement('ol');
  for (const passo of cafe.preparo) {
    const li = document.createElement('li');
    li.textContent = passo;
    listaPreparo.appendChild(li);
  }
  modal.appendChild(listaPreparo);

  const btnFecharModal = document.createElement('button');
  btnFecharModal.textContent = 'Fechar';
  btnFecharModal.style.marginTop = '20px';
  btnFecharModal.style.padding = '10px 20px';
  btnFecharModal.style.backgroundColor = '#8b0000';
  btnFecharModal.style.color = '#fff';
  btnFecharModal.style.border = 'none';
  btnFecharModal.style.borderRadius = '5px';
  btnFecharModal.style.cursor = 'pointer';
  btnFecharModal.style.display = 'block';
  btnFecharModal.style.marginLeft = 'auto';
  btnFecharModal.style.marginRight = 'auto';

  btnFecharModal.addEventListener('click', () => overlay.remove());

  modal.appendChild(btnFecharModal);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}
