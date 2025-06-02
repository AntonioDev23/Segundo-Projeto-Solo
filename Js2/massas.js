const receitasMassas = {
  'pizza-caseira': {
    titulo: 'Pizza Caseira',
    descricao: 'Massa fininha e crocante, molho caseiro e muito queijo derretido.',
    imagem: 'imagens/Pizza caseira.webp',
    ingredientes: [
      '2 xícaras de farinha de trigo',
      '1 colher (sopa) de fermento biológico seco',
      '1 colher (chá) de sal',
      '3/4 xícara de água morna',
      '2 colheres (sopa) de azeite',
      '1/2 xícara de molho de tomate caseiro',
      '200g de mussarela ralada',
      'Tomate em rodelas',
      'Orégano a gosto'
    ],
    preparo: [
      'Misture a farinha, o fermento e o sal.',
      'Adicione a água morna e o azeite, e amasse até formar uma massa homogênea.',
      'Deixe a massa descansar por 1 hora, coberta com pano.',
      'Abra a massa em formato de pizza e espalhe o molho de tomate.',
      'Cubra com mussarela, tomate e orégano.',
      'Asse em forno preaquecido a 220°C por 15-20 minutos.'
    ],
    tempo: '1h 30min',
    avaliacao: 5,
    link: '#'
  },
  'lasanha': {
    titulo: 'Lasanha',
    descricao: 'Camadas generosas de massa, carne moída temperada e muito queijo gratinado.',
    imagem: 'imagens/Lasanha.webp',
    ingredientes: [
      '500g de massa para lasanha',
      '500g de carne moída',
      '1 cebola picada',
      '2 dentes de alho picados',
      '400g de molho de tomate',
      '300g de queijo mussarela fatiado',
      '200g de presunto fatiado',
      '200g de queijo parmesão ralado',
      'Sal e pimenta a gosto'
    ],
    preparo: [
      'Refogue a cebola e o alho até dourar.',
      'Adicione a carne moída, tempere com sal e pimenta e cozinhe até dourar.',
      'Acrescente o molho de tomate e deixe cozinhar por 10 minutos.',
      'Em um refratário, monte camadas: massa, molho, presunto, mussarela e repita.',
      'Finalize com queijo parmesão ralado.',
      'Leve ao forno preaquecido a 180°C por 30 minutos ou até gratinar.'
    ],
    tempo: '1h 15min',
    avaliacao: 5,
    link: '#'
  },
  'panqueca-de-frango': {
    titulo: 'Panqueca de Frango',
    descricao: 'Panquecas recheadas com frango desfiado e molho de tomate.',
    imagem: 'imagens/Panqueca de frango.png',
    ingredientes: [
      '1 xícara de farinha de trigo',
      '1 xícara de leite',
      '1 ovo',
      '1 pitada de sal',
      '300g de frango desfiado',
      '1/2 cebola picada',
      '2 dentes de alho picados',
      '1/2 xícara de molho de tomate',
      'Queijo ralado a gosto'
    ],
    preparo: [
      'Misture a farinha, leite, ovo e sal até formar uma massa lisa.',
      'Em uma frigideira antiaderente, faça as panquecas finas e reserve.',
      'Refogue a cebola e alho, adicione o frango desfiado e o molho de tomate, cozinhando por 10 minutos.',
      'Recheie as panquecas com o frango, enrole e coloque em um refratário.',
      'Cubra com queijo ralado e leve ao forno a 180°C por 20 minutos.'
    ],
    tempo: '45min',
    avaliacao: 4,
    link: '#'
  },
  'lasanha-a-bolonhesa': {
    titulo: 'Lasanha à Bolonhesa',
    descricao: 'Camadas de massa, carne moída e molho branco.',
    imagem: 'imagens/Lasanha bolonhesa.png',
    ingredientes: [
      '500g de massa para lasanha',
      '400g de carne moída',
      '1 cebola picada',
      '2 dentes de alho picados',
      '400g de molho de tomate',
      '500ml de molho branco (béchamel)',
      '200g de queijo mussarela fatiado',
      '100g de queijo parmesão ralado',
      'Sal e pimenta a gosto'
    ],
    preparo: [
      'Refogue a cebola e o alho, adicione a carne moída e cozinhe até dourar.',
      'Acrescente o molho de tomate e cozinhe por 15 minutos.',
      'Prepare o molho branco e reserve.',
      'Monte camadas em um refratário: massa, molho à bolonhesa, molho branco e queijo mussarela.',
      'Finalize com queijo parmesão ralado.',
      'Asse em forno preaquecido a 180°C por 35 minutos.'
    ],
    tempo: '1h 15min',
    avaliacao: 5,
    link: '#'
  },
  'macarrao-a-carbonara': {
    titulo: 'Macarrão à Carbonara',
    descricao: 'Massa italiana com bacon, ovos e queijo.',
    imagem: 'imagens/Macarrao carbonara.png',
    ingredientes: [
      '250g de espaguete',
      '150g de bacon picado',
      '2 ovos',
      '1/2 xícara de queijo parmesão ralado',
      '2 dentes de alho picados',
      'Sal e pimenta do reino a gosto',
      'Salsinha picada para decorar'
    ],
    preparo: [
      'Cozinhe o espaguete até ficar al dente.',
      'Frite o bacon até ficar crocante, adicione o alho e refogue rapidamente.',
      'Em uma tigela, bata os ovos com o queijo parmesão.',
      'Misture o macarrão quente com o bacon e depois com a mistura de ovos, mexendo rápido para não cozinhar os ovos.',
      'Tempere com sal, pimenta e decore com salsinha.'
    ],
    tempo: '25min',
    avaliacao: 4,
    link: '#'
  },

  // Agora os 5 criados por mim:
  'nhoque-de-batata': {
    titulo: 'Nhoque de Batata',
    descricao: 'Deliciosos nhoques macios de batata com molho de tomate.',
    imagem: 'imagens/Nhoque de batata.webp',
    ingredientes: [
      '1kg de batata',
      '1 ovo',
      '1 1/2 xícara de farinha de trigo',
      'Sal a gosto',
      'Molho de tomate para servir'
    ],
    preparo: [
      'Cozinhe as batatas com casca até ficarem macias.',
      'Descasque e amasse as batatas ainda quentes.',
      'Misture o ovo, sal e a farinha até formar uma massa lisa.',
      'Modele os nhoques e cozinhe em água fervente até subirem à superfície.',
      'Sirva com molho de tomate quente.'
    ],
    tempo: '1h',
    avaliacao: 4,
    link: '#'
  },
  'ravioli-de-queijo': {
    titulo: 'Ravioli de Queijo',
    descricao: 'Massa recheada com queijo cremoso, servido com molho manteiga e sálvia.',
    imagem: 'imagens/Ravioli de queijo.webp',
    ingredientes: [
      '300g de massa fresca para ravioli',
      '200g de queijo ricota',
      '100g de queijo parmesão ralado',
      '1 ovo',
      'Sal e noz-moscada a gosto',
      'Manteiga e folhas de sálvia para molho'
    ],
    preparo: [
      'Misture a ricota, parmesão, ovo, sal e noz-moscada para o recheio.',
      'Abra a massa e corte em quadrados.',
      'Coloque o recheio e feche formando os raviolis.',
      'Cozinhe em água fervente até subirem.',
      'Derreta manteiga com sálvia e sirva sobre os raviolis.'
    ],
    tempo: '1h 10min',
    avaliacao: 5,
    link: '#'
  },
  'fettuccine-ao-molho-branco': {
    titulo: 'Fettuccine ao Molho Branco',
    descricao: 'Massa fettuccine cremosa com molho branco e queijo parmesão.',
    imagem: 'imagens/Fettuccine ao molho branco.webp',
    ingredientes: [
      '250g de fettuccine',
      '2 colheres de manteiga',
      '2 colheres de farinha de trigo',
      '500ml de leite',
      '100g de queijo parmesão ralado',
      'Sal, noz-moscada e pimenta do reino a gosto'
    ],
    preparo: [
      'Cozinhe o fettuccine até al dente.',
      'Faça um roux com manteiga e farinha.',
      'Acrescente o leite aos poucos, mexendo até engrossar.',
      'Adicione o queijo parmesão, sal, noz-moscada e pimenta.',
      'Misture o molho ao fettuccine e sirva quente.'
    ],
    tempo: '40min',
    avaliacao: 4,
    link: '#'
  },
  'espaguete-ao-alho-e-oleo': {
    titulo: 'Espaguete ao Alho e Óleo',
    descricao: 'Simples e saboroso espaguete com alho dourado e azeite.',
    imagem: 'imagens/Espaguete ao alho e oleo.webp',
    ingredientes: [
      '250g de espaguete',
      '4 dentes de alho fatiados',
      '1/4 xícara de azeite de oliva',
      'Sal, pimenta e salsinha a gosto'
    ],
    preparo: [
      'Cozinhe o espaguete até ficar al dente.',
      'Aqueça o azeite e doure o alho.',
      'Misture o espaguete no azeite com alho.',
      'Tempere com sal, pimenta e salsinha.',
      'Sirva imediatamente.'
    ],
    tempo: '20min',
    avaliacao: 5,
    link: '#'
  },
  'talharim-com-camarao': {
    titulo: 'Talharim com Camarão',
    descricao: 'Talharim ao molho cremoso com camarões suculentos.',
    imagem: 'imagens/Talharim com camarao.webp',
    ingredientes: [
      '250g de talharim',
      '300g de camarões limpos',
      '2 dentes de alho picados',
      '200ml de creme de leite',
      '1 colher de manteiga',
      'Salsinha, sal e pimenta a gosto'
    ],
    preparo: [
      'Cozinhe o talharim até al dente.',
      'Refogue o alho na manteiga, adicione os camarões e cozinhe até ficarem rosados.',
      'Acrescente o creme de leite, tempere com sal e pimenta.',
      'Misture o talharim no molho e decore com salsinha.',
      'Sirva quente.'
    ],
    tempo: '35min',
    avaliacao: 4,
    link: '#'
  }
};
