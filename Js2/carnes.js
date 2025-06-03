const carnes = {
  'bife-a-parmegiana': {
    titulo: 'Bife à Parmegiana',
    descricao: 'Uma deliciosa combinação de carne empanada e molho de tomate.',
    imagem: 'imagens/Bife a parmegiana.png',
    ingredientes: [
      '4 bifes de contra-filé',
      'Sal e pimenta a gosto',
      '2 ovos para empanar',
      'Farinha de rosca para empanar',
      'Óleo para fritar',
      '2 xícaras de molho de tomate',
      '200g de queijo mussarela fatiado',
      'Queijo parmesão ralado para polvilhar'
    ],
    preparo: [
      'Tempere os bifes com sal e pimenta.',
      'Passe os bifes nos ovos batidos e depois na farinha de rosca.',
      'Frite os bifes em óleo quente até dourar e reserve.',
      'Coloque os bifes em um refratário, cubra com molho de tomate e fatias de mussarela.',
      'Polvilhe queijo parmesão e leve ao forno para gratinar por 15 minutos.'
    ]
  },

  'escondidinho-carne-seca': {
    titulo: 'Escondidinho de Carne Seca',
    descricao: 'Purê de mandioca com carne seca desfiada e queijo gratinado.',
    imagem: 'imagens/Carne seca.png',
    ingredientes: [
      '500g de carne seca dessalgada e desfiada',
      '1 kg de mandioca cozida e amassada',
      '2 colheres de manteiga',
      '1 cebola picada',
      '2 dentes de alho picados',
      '200g de queijo coalho ralado',
      'Sal e pimenta a gosto',
      'Cheiro-verde a gosto'
    ],
    preparo: [
      'Refogue a cebola e o alho na manteiga até dourar.',
      'Adicione a carne seca desfiada, ajuste o sal e a pimenta, e refogue por 5 minutos.',
      'Misture a mandioca amassada com manteiga e ajuste o sal.',
      'Em um refratário, coloque metade do purê, depois a carne seca refogada e cubra com o restante do purê.',
      'Salpique o queijo coalho por cima e leve ao forno a 180°C até gratinar.'
    ]
  },

  'escondidinho-carne-moida': {
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

  // Novas carnes com receita e preparo:
  
  'picanha-grelhada': {
    titulo: 'Picanha Grelhada',
    descricao: 'Picanha suculenta grelhada na brasa, com tempero simples.',
    imagem: 'imagens/picanha-grelhada.png',
    ingredientes: [
      '1 peça de picanha (aprox. 1kg)',
      'Sal grosso a gosto',
      'Pimenta-do-reino a gosto'
    ],
    preparo: [
      'Tempere a picanha com sal grosso e pimenta-do-reino.',
      'Deixe descansar por 30 minutos.',
      'Grelhe a picanha em fogo médio-alto, primeiro com a gordura para baixo.',
      'Vire e cozinhe até atingir o ponto desejado.',
      'Deixe descansar por 5 minutos antes de fatiar e servir.'
    ]
  },

  'costela-assada': {
    titulo: 'Costela Assada',
    descricao: 'Costela bovina assada lentamente até ficar macia e saborosa.',
    imagem: 'imagens/costela-assada.png',
    ingredientes: [
      '1 kg de costela bovina',
      'Sal grosso a gosto',
      'Alho picado',
      'Alecrim fresco'
    ],
    preparo: [
      'Tempere a costela com sal, alho e alecrim.',
      'Envolva em papel alumínio e leve ao forno a 150°C por cerca de 4 horas.',
      'Retire o papel alumínio e asse por mais 30 minutos para dourar.',
      'Sirva fatiada.'
    ]
  },

  'maminha-ao-forno': {
    titulo: 'Maminha ao Forno',
    descricao: 'Maminha macia assada com tempero especial.',
    imagem: 'imagens/maminha-ao-forno.png',
    ingredientes: [
      '1 peça de maminha (aprox. 1 kg)',
      'Sal e pimenta-do-reino a gosto',
      '2 dentes de alho picados',
      '1 cebola fatiada',
      '1 ramo de alecrim',
      'Azeite'
    ],
    preparo: [
      'Tempere a maminha com sal, pimenta e alho.',
      'Coloque em uma assadeira com a cebola e o alecrim.',
      'Regue com azeite e cubra com papel alumínio.',
      'Asse em forno pré-aquecido a 180°C por 1h30.',
      'Retire o papel alumínio e asse por mais 20 minutos para dourar.'
    ]
  },

  'filé-mignon-ao-molho': {
    titulo: 'Filé Mignon ao Molho',
    descricao: 'Filé mignon suculento servido com molho de vinho tinto.',
    imagem: 'imagens/file-mignon.png',
    ingredientes: [
      '4 medalhões de filé mignon',
      'Sal e pimenta a gosto',
      '2 colheres de manteiga',
      '1/2 xícara de vinho tinto',
      '1 dente de alho picado',
      '1 ramo de alecrim'
    ],
    preparo: [
      'Tempere os medalhões com sal e pimenta.',
      'Sele os medalhões na manteiga em fogo alto, cerca de 3 minutos de cada lado.',
      'Retire os medalhões e reserve.',
      'Na mesma panela, adicione o alho e o vinho, deixe reduzir pela metade.',
      'Volte os medalhões para a panela, acrescente o alecrim e cozinhe por mais 2 minutos.',
      'Sirva quente.'
    ]
  },

  'alcatra-grelhada': {
    titulo: 'Alcatra Grelhada',
    descricao: 'Alcatra grelhada, saborosa e macia, perfeita para churrasco.',
    imagem: 'imagens/alcatra-grelhada.png',
    ingredientes: [
      '1 peça de alcatra (aprox. 1kg)',
      'Sal grosso a gosto',
      'Pimenta-do-reino a gosto'
    ],
    preparo: [
      'Tempere a alcatra com sal grosso e pimenta.',
      'Grelhe em fogo alto até atingir o ponto desejado.',
      'Deixe descansar por alguns minutos antes de fatiar e servir.'
    ]
  },

  'contra-file': {
    titulo: 'Contra-filé ao Alho e Óleo',
    descricao: 'Contra-filé grelhado com alho dourado e azeite.',
    imagem: 'imagens/contra-file.png',
    ingredientes: [
      '4 bifes de contra-filé',
      '4 dentes de alho fatiados',
      'Sal e pimenta a gosto',
      'Azeite'
    ],
    preparo: [
      'Tempere os bifes com sal e pimenta.',
      'Aqueça azeite em uma frigideira e doure o alho.',
      'Grelhe os bifes no alho e óleo até o ponto desejado.',
      'Sirva quente.'
    ]
  },

  'cupim-assado': {
    titulo: 'Cupim Assado',
    descricao: 'Cupim macio e suculento assado lentamente com temperos.',
    imagem: 'imagens/cupim-assado.png',
    ingredientes: [
      '1 peça de cupim (aprox. 1,5kg)',
      'Sal, pimenta, alho e cebola a gosto',
      '1 folha de louro',
      '1 ramo de alecrim'
    ],
    preparo: [
      'Tempere o cupim com sal, pimenta, alho e cebola.',
      'Coloque o louro e o alecrim sobre o cupim.',
      'Envolva em papel alumínio e asse em forno baixo (150°C) por cerca de 5 horas.',
      'Retire o papel alumínio e asse por mais 30 minutos para dourar.'
    ]
  }
};


