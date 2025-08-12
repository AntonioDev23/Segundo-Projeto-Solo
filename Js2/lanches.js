export const lanches = [
  {
    titulo: 'Sanduíche Natural de Frango',
    imagem: 'imagens/lanche-frango.png',
    ingredientes: [
      '2 fatias de pão integral',
      '1/2 xícara de frango desfiado',
      '2 colheres de sopa de maionese',
      '1 tomate',
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
    imagem: 'imagens/hamburguer-caseiro.png',
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
    imagem: 'imagens/cachorro-quente.png',
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
    imagem: 'imagens/tapioca-queijo.png',
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
    imagem: 'imagens/pao-queijo.png',
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
    imagem: 'imagens/beirute.png',
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
    imagem: 'imagens/mini-pizza.png',
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
    imagem: 'imagens/wrap-atum.png',
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
    imagem: 'imagens/misto-quente.png',
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
    imagem: 'imagens/croissant.png',
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

  for (const lanche of lanches) {
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


// Detalhes da receita e preparo
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

  // Botão fechar (X)
  const btnFecharX = document.createElement('button');
  btnFecharX.textContent = '×'; // caractere X estilizado
  btnFecharX.style.position = 'absolute';
  btnFecharX.style.top = '15px';
  btnFecharX.style.right = '15px';
  btnFecharX.style.background = 'transparent';
  btnFecharX.style.border = 'none';
  btnFecharX.style.fontSize = '24px';
  btnFecharX.style.cursor = 'pointer';
  btnFecharX.style.color = '#8b0000';
  btnFecharX.style.fontWeight = 'bold';
  btnFecharX.style.lineHeight = '1';

  btnFecharX.addEventListener('click', () => {
    overlay.remove();
  });

  modal.appendChild(btnFecharX);

  // Estrelas
  const estrelas = document.createElement('div');
  estrelas.textContent = '★★★★★';
  estrelas.style.textAlign = 'center';
  estrelas.style.fontSize = '40px';
  estrelas.style.marginBottom = '15px';
  estrelas.style.color = 'gold';
  modal.appendChild(estrelas);

  // Título
  const titulo = document.createElement('h2');
  titulo.textContent = lanche.titulo;
  titulo.style.color = '#8b0000';
  titulo.style.marginBottom = '20px';
  titulo.style.textAlign = 'center';
  modal.appendChild(titulo);

  // Imagem (se existir)
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

  // Título ingredientes
  const ingredientesTitulo = document.createElement('h3');
  ingredientesTitulo.textContent = 'Ingredientes';
  ingredientesTitulo.style.color = '#8b0000';
  ingredientesTitulo.style.marginBottom = '10px';
  ingredientesTitulo.style.textAlign = 'center';
  modal.appendChild(ingredientesTitulo);

  // Lista ingredientes
  const listaIngredientes = document.createElement('ul');
  listaIngredientes.style.marginBottom = '20px';
  listaIngredientes.style.paddingLeft = '20px';
  lanche.ingredientes.forEach(ingrediente => {
    const li = document.createElement('li');
    li.textContent = ingrediente;
    listaIngredientes.appendChild(li);
  });
  modal.appendChild(listaIngredientes);

  // Título preparo
  const preparoTitulo = document.createElement('h3');
  preparoTitulo.textContent = 'Modo de preparo';
  preparoTitulo.style.color = '#8b0000';
  preparoTitulo.style.marginBottom = '10px';
  preparoTitulo.style.textAlign = 'center';
  modal.appendChild(preparoTitulo);

  // Lista preparo
  const listaPreparo = document.createElement('ol');
  listaPreparo.style.paddingLeft = '20px';
  lanche.preparo.forEach(passo => {
    const li = document.createElement('li');
    li.textContent = passo;
    listaPreparo.appendChild(li);
  });
  modal.appendChild(listaPreparo);

  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}
