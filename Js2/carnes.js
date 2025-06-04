// Exemplo: seu objeto com receitas de carnes (deve estar em outro arquivo ou na mesma base)
const receitasCarnes = {
  escondidinho: {
    titulo: 'Escondidinho de Carne Moída',
    descricao: 'Purê de batata cremoso escondendo carne moída bem temperada.',
    imagem: 'imagens/escondidinho.webp',
    ingredientes: [
      '500g de carne moída',
      '1 cebola picada',
      '2 dentes de alho picados',
      '4 xícaras de purê de batata',
      '2 colheres (sopa) de manteiga',
      '1/2 xícara de queijo mussarela ralado',
      'Sal, pimenta e cheiro-verde a gosto'
    ],
    preparo: [
      'Refogue a cebola e o alho até dourar.',
      'Adicione a carne moída, tempere e cozinhe até secar o líquido.',
      'Misture o purê de batata com manteiga e ajuste o sal.',
      'Em um refratário, coloque metade do purê, depois a carne, e cubra com o restante do purê.',
      'Salpique queijo mussarela por cima.',
      'Leve ao forno a 180°C até gratinar.'
    ]
  },
  bifeParmegiana: {
    titulo: 'Bife à Parmegiana',
    descricao: 'Uma deliciosa combinação de carne empanada e molho de tomate.',
    imagem: 'imagens/Bife a parmegiana.png',
    ingredientes: [
      '4 bifes de carne bovina',
      'Sal e pimenta a gosto',
      '2 ovos batidos',
      'Farinha de rosca para empanar',
      'Óleo para fritar',
      'Molho de tomate',
      'Queijo mussarela fatiado'
    ],
    preparo: [
      'Tempere os bifes com sal e pimenta.',
      'Passe os bifes nos ovos batidos e depois na farinha de rosca.',
      'Frite em óleo quente até dourar e reserve.',
      'Coloque os bifes em um refratário, cubra com molho de tomate e fatias de queijo.',
      'Leve ao forno para gratinar o queijo.'
    ]
  },
  escondidinhoCarneSeca: {
    titulo: 'Escondidinho de Carne Seca',
    descricao: 'Purê de mandioca com carne seca desfiada e queijo gratinado.',
    imagem: 'imagens/Carne seca.png',
    ingredientes: [
      '500g de carne seca dessalgada e desfiada',
      '1 kg de mandioca cozida e amassada',
      '1 cebola picada',
      '2 dentes de alho picados',
      '2 colheres de manteiga',
      'Sal e pimenta a gosto',
      'Queijo coalho ralado para gratinar'
    ],
    preparo: [
      'Refogue a cebola e o alho na manteiga.',
      'Acrescente a carne seca e refogue bem.',
      'Misture a mandioca amassada e tempere com sal e pimenta.',
      'Em um refratário, coloque metade do purê, a carne seca e cubra com o restante do purê.',
      'Salpique queijo coalho por cima e leve ao forno para gratinar.'
    ]
  },
  // ... aqui você adiciona mais 7 carnes que vou criar para você abaixo
};

// Vamos criar 7 receitas extras de carnes vermelhas (nome, descrição, imagem, ingredientes, preparo):

receitasCarnes.frangoAssado = {
  titulo: 'Frango Assado com Ervas',
  descricao: 'Frango temperado com ervas finas e assado até ficar dourado.',
  imagem: 'imagens/frango-assado.jpg',
  ingredientes: [
    '1 frango inteiro',
    'Sal e pimenta a gosto',
    '2 dentes de alho picados',
    'Ervas finas (alecrim, tomilho, manjericão)',
    'Azeite'
  ],
  preparo: [
    'Tempere o frango com sal, pimenta, alho e ervas.',
    'Regue com azeite e deixe marinar por 1 hora.',
    'Asse em forno pré-aquecido a 200°C por 1 hora ou até dourar.'
  ]
};

receitasCarnes.picanhaGrelhada = {
  titulo: 'Picanha Grelhada',
  descricao: 'Picanha suculenta grelhada no ponto perfeito.',
  imagem: 'imagens/picanha-grelhada.jpg',
  ingredientes: [
    '1 peça de picanha (aprox. 1kg)',
    'Sal grosso a gosto',
    'Pimenta do reino a gosto'
  ],
  preparo: [
    'Tempere a picanha com sal grosso e pimenta.',
    'Grelhe em fogo alto até o ponto desejado.',
    'Deixe descansar por 5 minutos antes de fatiar.'
  ]
};

receitasCarnes.costelaBarbecue = {
  titulo: 'Costela ao Barbecue',
  descricao: 'Costela assada lentamente com molho barbecue caseiro.',
  imagem: 'imagens/costela-barbecue.jpg',
  ingredientes: [
    '1 kg de costela bovina',
    'Sal e pimenta a gosto',
    'Molho barbecue'
  ],
  preparo: [
    'Tempere a costela com sal e pimenta.',
    'Asse em forno baixo (150°C) por 3 horas, regando com molho barbecue.',
    'Finalize com mais molho e sirva.'
  ]
};

receitasCarnes.alcatraAcebolada = {
  titulo: 'Alcatra Acebolada',
  descricao: 'Alcatra fatiada com cebolas douradas e temperos simples.',
  imagem: 'imagens/alcatra-acebolada.jpg',
  ingredientes: [
    '500g de alcatra em bifes finos',
    '2 cebolas grandes fatiadas',
    'Sal e pimenta a gosto',
    'Óleo para fritar'
  ],
  preparo: [
    'Tempere a alcatra com sal e pimenta.',
    'Frite os bifes rapidamente em óleo quente.',
    'Retire os bifes e na mesma panela doure as cebolas.',
    'Junte os bifes novamente e misture com as cebolas.'
  ]
};

receitasCarnes.maminhaAssada = {
  titulo: 'Maminha Assada',
  descricao: 'Maminha suculenta assada com alho e ervas.',
  imagem: 'imagens/maminha-assada.jpg',
  ingredientes: [
    '1 peça de maminha (aprox. 1kg)',
    'Sal, pimenta e alho a gosto',
    'Ervas finas',
    'Azeite'
  ],
  preparo: [
    'Tempere a maminha com sal, pimenta, alho e ervas.',
    'Regue com azeite e deixe marinar 1 hora.',
    'Asse em forno médio (180°C) por 1 hora.'
  ]
};

receitasCarnes.cupimNaBrasa = {
  titulo: 'Cupim na Brasa',
  descricao: 'Cupim assado na brasa com tempero simples e sabor intenso.',
  imagem: 'imagens/cupim-na-brasa.jpg',
  ingredientes: [
    '1 kg de cupim',
    'Sal grosso a gosto',
    'Alho amassado',
    'Pimenta do reino'
  ],
  preparo: [
    'Tempere o cupim com sal, alho e pimenta.',
    'Asse na churrasqueira em fogo médio por 4 horas.',
    'Vire ocasionalmente para dourar por igual.'
  ]
};

receitasCarnes.bifeAncho = {
  titulo: 'Bife de Ancho',
  descricao: 'Bife ancho grelhado com tempero simples para realçar sabor.',
  imagem: 'imagens/bife-ancho.jpg',
  ingredientes: [
    '2 bifes de ancho',
    'Sal grosso e pimenta do reino',
    'Azeite'
  ],
  preparo: [
    'Tempere os bifes com sal, pimenta e azeite.',
    'Grelhe em fogo alto até o ponto desejado.',
    'Deixe descansar por alguns minutos antes de servir.'
  ]
};

receitasCarnes.picadinho = {
  titulo: 'Picadinho de Carne',
  descricao: 'Carne cortada em cubos pequenos, cozida com temperos e legumes.',
  imagem: 'imagens/picadinho.jpg',
  ingredientes: [
    '500g de carne cortada em cubos',
    '1 cebola picada',
    '2 dentes de alho picados',
    '2 tomates picados',
    '1 cenoura em cubos',
    'Sal, pimenta e cheiro-verde a gosto'
  ],
  preparo: [
    'Refogue a cebola e o alho até dourar.',
    'Acrescente a carne e cozinhe até dourar.',
    'Adicione os tomates e a cenoura, tempere e cozinhe até amaciar.',
    'Finalize com cheiro-verde.'
  ]
};


// Função principal para exibir a lista de carnes
export function mostrarCarnes() {
  // Remove interface antiga
  const containerAntigo = document.getElementById('carnes-container');
  if (containerAntigo) containerAntigo.remove();

  const container = document.createElement('div');
  container.id = 'carnes-container';
  container.style.position = 'fixed';
  container.style.top = '50px';
  container.style.right = '20px'; 
  container.style.left = 'auto';
  container.style.transform = 'none';
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
  titulo.textContent = 'Receitas de Carnes';
  titulo.style.color = '#ff6b00';
  titulo.style.textAlign = 'center';
  container.appendChild(titulo);

  for (const chave in receitasCarnes) {
    if (receitasCarnes.hasOwnProperty(chave)) {
      const carne = receitasCarnes[chave];

      const carneDiv = document.createElement('div');
      carneDiv.style.marginBottom = '15px';
      carneDiv.style.display = 'flex';
      carneDiv.style.justifyContent = 'space-between';
      carneDiv.style.alignItems = 'center';
      carneDiv.style.lineHeight = '1.2';
      carneDiv.style.padding = '8px 12px';
      carneDiv.style.border = '1.5px solid #ff6b00';
      carneDiv.style.borderRadius = '8px';
      carneDiv.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
      carneDiv.style.cursor = 'pointer';

      carneDiv.addEventListener('mouseenter', () => {
        carneDiv.style.transform = 'translateY(-5px)';
        carneDiv.style.boxShadow = '0 4px 12px rgba(255, 107, 0, 0.4)';
      });
      carneDiv.addEventListener('mouseleave', () => {
        carneDiv.style.transform = 'translateY(0)';
        carneDiv.style.boxShadow = 'none';
      });

      const nomeCarne = document.createElement('strong');
      nomeCarne.textContent = carne.titulo;
      nomeCarne.style.display = 'inline-block';
      nomeCarne.style.verticalAlign = 'middle';
      carneDiv.appendChild(nomeCarne);

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
        criarModalDetalhesCarnes(carne);
      });

      carneDiv.appendChild(btnDetalhes);
      container.appendChild(carneDiv);
    }
  }

  const btnFechar = document.createElement('button');
  btnFechar.textContent = 'Fechar';
  btnFechar.style.marginTop = '15px';
  btnFechar.style.width = '100%';
  btnFechar.style.padding = '10px';
  btnFechar.style.cursor = 'pointer';
  btnFechar.style.backgroundColor = '#8b0000';
  btnFechar.style.color = '#fff';
  btnFechar.style.border = 'none';
  btnFechar.style.borderRadius = '4px';
  btnFechar.style.fontWeight = 'bold';

  btnFechar.addEventListener('click', () => {
    container.remove();
  });

  container.appendChild(btnFechar);
  document.body.appendChild(container);
}
