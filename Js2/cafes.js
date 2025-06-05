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


// Lista de cafés da manhã
export function mostrarCafeDaManha() {
  const containerAntigo = document.getElementById('cafe-container');
  if (containerAntigo) containerAntigo.remove();

  const container = document.createElement('div');
  container.id = 'cafe-container';
  container.style.position = 'fixed';
  container.style.top = '50px';
  container.style.right = '20px';
  container.style.width = '500px';
  container.style.maxHeight = '70vh';
  container.style.overflowY = 'auto';
  container.style.backgroundColor = '#fff';
  container.style.border = '2px solid #ff6b00';  // borda laranja
  container.style.borderRadius = '8px';
  container.style.padding = '20px';
  container.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
  container.style.zIndex = '10000';

  const titulo = document.createElement('h2');
  titulo.textContent = 'Receitas de Café da Manhã';
  titulo.style.color = '#ff6b00'; // título laranja
  titulo.style.textAlign = 'center';
  container.appendChild(titulo);

  for (const cafe of cafes) {
    const cafeDiv = document.createElement('div');
    cafeDiv.style.marginBottom = '15px';
    cafeDiv.style.display = 'flex';
    cafeDiv.style.justifyContent = 'space-between';
    cafeDiv.style.alignItems = 'center';
    cafeDiv.style.lineHeight = '1.2';
    cafeDiv.style.padding = '8px 12px';
    cafeDiv.style.border = '1.5px solid #ff6b00'; // borda laranja
    cafeDiv.style.borderRadius = '8px';
    cafeDiv.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
    cafeDiv.style.cursor = 'pointer';

    cafeDiv.addEventListener('mouseenter', () => {
      cafeDiv.style.transform = 'translateY(-5px)';
      cafeDiv.style.boxShadow = '0 4px 12px rgba(255, 107, 0, 0.4)'; // sombra laranja
    });
    cafeDiv.addEventListener('mouseleave', () => {
      cafeDiv.style.transform = 'translateY(0)';
      cafeDiv.style.boxShadow = 'none';
    });

    const nomeCafe = document.createElement('strong');
    nomeCafe.textContent = cafe.titulo;
    cafeDiv.appendChild(nomeCafe);

    const btnDetalhes = document.createElement('button');
    btnDetalhes.textContent = 'Receita';
    btnDetalhes.style.marginLeft = '10px';
    btnDetalhes.style.cursor = 'pointer';
    btnDetalhes.style.backgroundColor = '#ff6b00'; // botão laranja
    btnDetalhes.style.color = '#fff';
    btnDetalhes.style.border = 'none';
    btnDetalhes.style.borderRadius = '4px';
    btnDetalhes.style.padding = '6px 12px';
    btnDetalhes.style.transition = 'background-color 0.3s ease';

    btnDetalhes.addEventListener('mouseenter', () => {
      btnDetalhes.style.backgroundColor = '#8b0000'; // vinho escuro
    });
    btnDetalhes.addEventListener('mouseleave', () => {
      btnDetalhes.style.backgroundColor = '#ff6b00';
    });

    btnDetalhes.addEventListener('click', () => {
      criarModalDetalhesCafe(cafe); // função que você deve ter criada para mostrar os detalhes do café
    });

    cafeDiv.appendChild(btnDetalhes);
    container.appendChild(cafeDiv);
  }

  const btnFechar = document.createElement('button');
  btnFechar.textContent = 'Fechar';
  btnFechar.style.marginTop = '20px';
  btnFechar.style.width = '100%';
  btnFechar.style.padding = '10px';
  btnFechar.style.backgroundColor = '#8b0000'; // vinho escuro
  btnFechar.style.color = '#fff';
  btnFechar.style.border = 'none';
  btnFechar.style.borderRadius = '5px';
  btnFechar.style.fontWeight = 'bold';
  btnFechar.style.cursor = 'pointer';

  btnFechar.addEventListener('click', () => {
    container.remove();
  });

  container.appendChild(btnFechar);
  document.body.appendChild(container);
}


