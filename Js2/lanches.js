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


// Função para mostrar os lanches
export function mostrarLanches() {
  // Remove container antigo, se houver
  const containerAntigo = document.getElementById('lanches-container');
  if (containerAntigo) containerAntigo.remove();

  const container = document.createElement('div');
  container.id = 'lanches-container';
  container.style.position = 'fixed';
  container.style.top = '50px';
  container.style.right = '20px';
  container.style.width = '500px';
  container.style.maxHeight = '70vh';
  container.style.overflowY = 'auto';
  container.style.backgroundColor = '#fff';
  container.style.border = '2px solid #ff6b00';
  container.style.borderRadius = '8px';
  container.style.padding = '20px';
  container.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
  container.style.zIndex = '10000';

  const titulo = document.createElement('h2');
  titulo.textContent = 'Receitas de Lanches';
  titulo.style.color = '#ff6b00';
  titulo.style.textAlign = 'center';
  container.appendChild(titulo);

  for (const chave in receitasLanches) {
    if (receitasLanches.hasOwnProperty(chave)) {
      const lanche = receitasLanches[chave];

      const lancheDiv = document.createElement('div');
      lancheDiv.style.marginBottom = '15px';
      lancheDiv.style.display = 'flex';
      lancheDiv.style.justifyContent = 'space-between';
      lancheDiv.style.alignItems = 'center';
      lancheDiv.style.lineHeight = '1.2';
      lancheDiv.style.padding = '8px 12px';
      lancheDiv.style.border = '1.5px solid #ff6b00';
      lancheDiv.style.borderRadius = '8px';
      lancheDiv.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
      lancheDiv.style.cursor = 'pointer';

      lancheDiv.addEventListener('mouseenter', () => {
        lancheDiv.style.transform = 'translateY(-5px)';
        lancheDiv.style.boxShadow = '0 4px 12px rgba(255, 107, 0, 0.4)';
      });
      lancheDiv.addEventListener('mouseleave', () => {
        lancheDiv.style.transform = 'translateY(0)';
        lancheDiv.style.boxShadow = 'none';
      });

      const nomeLanche = document.createElement('strong');
      nomeLanche.textContent = lanche.titulo;
      lancheDiv.appendChild(nomeLanche);

      const btnDetalhes = document.createElement('button');
      btnDetalhes.textContent = 'Receita';
      btnDetalhes.style.marginLeft = '10px';
      btnDetalhes.style.cursor = 'pointer';
      btnDetalhes.style.backgroundColor = '#ff6b00';
      btnDetalhes.style.color = '#fff';
      btnDetalhes.style.border = 'none';
      btnDetalhes.style.borderRadius = '4px';
      btnDetalhes.style.padding = '6px 12px';
      btnDetalhes.style.transition = 'background-color 0.3s ease';

      btnDetalhes.addEventListener('mouseenter', () => {
        btnDetalhes.style.backgroundColor = '#8b0000';
      });
      btnDetalhes.addEventListener('mouseleave', () => {
        btnDetalhes.style.backgroundColor = '#ff6b00';
      });

      btnDetalhes.addEventListener('click', () => {
        criarModalDetalhesLanches(lanche);
      });

      lancheDiv.appendChild(btnDetalhes);
      container.appendChild(lancheDiv);
    }
  }

  // Botão para fechar o container de lanches
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
    container.remove();
  });

  container.appendChild(btnFechar);

  document.body.appendChild(container);
}


