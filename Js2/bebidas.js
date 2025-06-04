export const bebidas = [
  {
    titulo: 'Suco de Laranja Natural',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/suco-de-laranja-730x548.jpeg',
    ingredientes: [
      '4 laranjas',
      'Açúcar a gosto',
      'Gelo'
    ],
    preparo: [
      'Esprema as laranjas.',
      'Coe o suco.',
      'Adoce se desejar e sirva com gelo.'
    ]
  },
  {
    titulo: 'Limonada com Hortelã',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/limonada-com-hortela-730x548.jpeg',
    ingredientes: [
      '2 limões',
      '1 litro de água',
      'Folhas de hortelã',
      'Açúcar a gosto',
      'Gelo'
    ],
    preparo: [
      'Esprema os limões.',
      'Misture com água, açúcar e hortelã amassada.',
      'Sirva com gelo.'
    ]
  },
  {
    titulo: 'Vitamina de Banana com Morango',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/vitamina-de-banana-e-morango-730x548.jpeg',
    ingredientes: [
      '1 banana',
      '5 morangos',
      '200ml de leite',
      '1 colher de mel'
    ],
    preparo: [
      'Bata todos os ingredientes no liquidificador.',
      'Sirva gelado.'
    ]
  },
  {
    titulo: 'Água de Coco com Abacaxi',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/agua-de-coco-com-abacaxi-730x548.jpeg',
    ingredientes: [
      '300ml de água de coco',
      '100g de abacaxi em cubos',
      'Gelo'
    ],
    preparo: [
      'Bata a água de coco com abacaxi no liquidificador.',
      'Sirva com gelo.'
    ]
  },
  {
    titulo: 'Chá Gelado de Hibisco',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/cha-gelado-de-hibisco-730x548.jpeg',
    ingredientes: [
      '2 colheres de hibisco seco',
      '1 litro de água',
      'Açúcar ou mel a gosto',
      'Gelo'
    ],
    preparo: [
      'Ferva a água e faça a infusão do hibisco por 10 minutos.',
      'Coe e adoce a gosto.',
      'Deixe esfriar e sirva com gelo.'
    ]
  },
  {
    titulo: 'Smoothie de Manga e Iogurte',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/smoothie-de-manga-730x548.jpeg',
    ingredientes: [
      '1 manga madura',
      '150g de iogurte natural',
      'Mel a gosto',
      'Gelo'
    ],
    preparo: [
      'Bata todos os ingredientes no liquidificador até ficar cremoso.',
      'Sirva gelado.'
    ]
  },
  {
    titulo: 'Suco Verde Detox',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/suco-verde-detox-730x548.jpeg',
    ingredientes: [
      '1 maçã verde',
      '1/2 pepino',
      '1 folha de couve',
      'Suco de 1 limão',
      '200ml de água'
    ],
    preparo: [
      'Bata todos os ingredientes no liquidificador.',
      'Coe se desejar.',
      'Sirva gelado.'
    ]
  },
  {
    titulo: 'Refrigerante Natural de Gengibre',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/refrigerante-natural-de-gengibre-730x548.jpeg',
    ingredientes: [
      '100g de gengibre ralado',
      '1 litro de água',
      'Suco de 2 limões',
      'Mel ou açúcar a gosto',
      'Água com gás'
    ],
    preparo: [
      'Ferva o gengibre em água por 15 minutos.',
      'Coe e adoce a gosto.',
      'Misture o suco de limão, deixe esfriar e complete com água com gás.'
    ]
  },
  {
    titulo: 'Suco de Melancia com Limão',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/suco-de-melancia-com-limao-730x548.jpeg',
    ingredientes: [
      '3 fatias grandes de melancia',
      'Suco de 1 limão',
      'Gelo'
    ],
    preparo: [
      'Bata a melancia com o suco de limão no liquidificador.',
      'Sirva com gelo.'
    ]
  },
  {
    titulo: 'Água Aromatizada com Frutas',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/agua-aromatizada-com-frutas-730x548.jpeg',
    ingredientes: [
      '1 litro de água',
      'Fatias de laranja, limão, morango',
      'Folhas de hortelã',
      'Gelo'
    ],
    preparo: [
      'Coloque as frutas e hortelã na água.',
      'Deixe na geladeira por 2 horas.',
      'Sirva gelado.'
    ]
  }
];


// Função para mostrar as bebidas
export function mostrarBebidas() {
  const containerAntigo = document.getElementById('bebidas-container');
  if (containerAntigo) containerAntigo.remove();

  const container = document.createElement('div');
  container.id = 'bebidas-container';
  container.style.position = 'fixed';
  container.style.top = '50px';
  container.style.right = '20px';
  container.style.width = '500px';
  container.style.maxHeight = '70vh';
  container.style.overflowY = 'auto';
  container.style.backgroundColor = '#fff';
  container.style.border = '2px solid #007bff'; // cor azul para diferenciar
  container.style.borderRadius = '8px';
  container.style.padding = '20px';
  container.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
  container.style.zIndex = '10000';

  const titulo = document.createElement('h2');
  titulo.textContent = 'Receitas de Bebidas';
  titulo.style.color = '#007bff';
  titulo.style.textAlign = 'center';
  container.appendChild(titulo);

  for (const bebida of bebidas) {
    const bebidaDiv = document.createElement('div');
    bebidaDiv.style.marginBottom = '15px';
    bebidaDiv.style.display = 'flex';
    bebidaDiv.style.justifyContent = 'space-between';
    bebidaDiv.style.alignItems = 'center';
    bebidaDiv.style.lineHeight = '1.2';
    bebidaDiv.style.padding = '8px 12px';
    bebidaDiv.style.border = '1.5px solid #007bff';
    bebidaDiv.style.borderRadius = '8px';
    bebidaDiv.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
    bebidaDiv.style.cursor = 'pointer';

    bebidaDiv.addEventListener('mouseenter', () => {
      bebidaDiv.style.transform = 'translateY(-5px)';
      bebidaDiv.style.boxShadow = '0 4px 12px rgba(0, 123, 255, 0.4)';
    });
    bebidaDiv.addEventListener('mouseleave', () => {
      bebidaDiv.style.transform = 'translateY(0)';
      bebidaDiv.style.boxShadow = 'none';
    });

    const nomeBebida = document.createElement('strong');
    nomeBebida.textContent = bebida.titulo;
    bebidaDiv.appendChild(nomeBebida);

    const btnDetalhes = document.createElement('button');
    btnDetalhes.textContent = 'Receita';
    btnDetalhes.style.marginLeft = '10px';
    btnDetalhes.style.cursor = 'pointer';
    btnDetalhes.style.backgroundColor = '#007bff';
    btnDetalhes.style.color = '#fff';
    btnDetalhes.style.border = 'none';
    btnDetalhes.style.borderRadius = '4px';
    btnDetalhes.style.padding = '6px 12px';
    btnDetalhes.style.transition = 'background-color 0.3s ease';

    btnDetalhes.addEventListener('mouseenter', () => {
      btnDetalhes.style.backgroundColor = '#004085';
    });
    btnDetalhes.addEventListener('mouseleave', () => {
      btnDetalhes.style.backgroundColor = '#007bff';
    });

    btnDetalhes.addEventListener('click', () => {
      criarModalDetalhesBebidas(bebida);
    });

    bebidaDiv.appendChild(btnDetalhes);
    container.appendChild(bebidaDiv);
  }

  const btnFechar = document.createElement('button');
  btnFechar.textContent = 'Fechar';
  btnFechar.style.marginTop = '20px';
  btnFechar.style.width = '100%';
  btnFechar.style.padding = '10px';
  btnFechar.style.backgroundColor = '#004085';
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


