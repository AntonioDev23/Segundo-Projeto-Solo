const receitasPrincipais = {
    'bolo-chocolate': {
        titulo: 'Bolo de Chocolate',
        descricao: 'Massa fofinha coberta com generosa calda quente de chocolate meio amargo.',
        imagem: 'imagens/Bolo de chocolate 2.webp',
        ingredientes: [
            '2 xícaras de farinha de trigo',
            '1 xícara de açúcar',
            '1 xícara de chocolate em pó',
            '1 colher (sopa) de fermento em pó',
            '3 ovos',
            '1 xícara de leite',
            '1/2 xícara de óleo'
        ],
        preparo: [
            'Preaqueça o forno a 180°C.',
            'Em uma tigela, misture os ingredientes secos: farinha, açúcar, chocolate e fermento.',
            'Adicione os ovos, leite e óleo. Misture até obter uma massa homogênea.',
            'Despeje em uma forma untada.',
            'Leve ao forno por 35 a 40 minutos ou até assar completamente.',
            'Deixe esfriar antes de desenformar.'
        ]
    },

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
            'Misture a farinha, o fermento e o sal em uma tigela.',
            'Adicione a água morna e o azeite, misturando até formar uma massa.',
            'Sove por 10 minutos e deixe descansar por 30 minutos.',
            'Abra a massa em uma assadeira untada.',
            'Espalhe o molho de tomate por cima.',
            'Adicione a mussarela, o tomate e o orégano.',
            'Asse em forno preaquecido a 200°C por 20 minutos ou até dourar.'
        ]
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
        ]
    },

    'escondidinho': {
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

    'feijao-tropeiro': {
        titulo: 'Feijão Tropeiro',
        descricao: 'Feijão com farinha, ovos, torresmo e cheiro-verde.',
        imagem: 'imagens/feijão.webp',
        ingredientes: [
            '2 xícaras de feijão carioca cozido',
            '100g de torresmo picado',
            '2 ovos',
            '1 xícara de farinha de mandioca',
            '1 cebola picada',
            '2 dentes de alho picados',
            'Cheiro-verde a gosto',
            'Sal e pimenta a gosto'
        ],
        preparo: [
            'Frite a cebola e o alho até dourar.',
            'Acrescente o feijão cozido e o torresmo.',
            'Frite os ovos mexidos separadamente e junte ao feijão.',
            'Adicione a farinha de mandioca aos poucos, mexendo até incorporar.',
            'Finalize com cheiro-verde, sal e pimenta.'
        ]
    },

    'cuscuz': {
        titulo: 'Cuscuz',
        descricao: 'Cuscuz amarelinho com legumes e temperos frescos.',
        imagem: 'imagens/Cuscuz.webp',
        ingredientes: [
            '2 xícaras de flocos de milho para cuscuz',
            '1 cenoura ralada',
            '1/2 xícara de ervilha',
            '1/2 xícara de milho verde',
            '1 tomate picado',
            '1 cebola picada',
            'Cheiro-verde a gosto',
            'Sal e azeite a gosto'
        ],
        preparo: [
            'Hidrate os flocos de milho conforme instruções da embalagem.',
            'Misture os legumes, tomate, cebola e cheiro-verde.',
            'Tempere com sal e azeite.',
            'Coloque na cuscuzeira e cozinhe por 20 minutos.',
            'Sirva quente.'
        ]
    }
};

// Ao clicar em "Ver Receita"
document.querySelectorAll('.ver-receita').forEach(botao => {
    botao.addEventListener('click', function () {
        const id = this.getAttribute('data-id');
        const receita = receitasPrincipais[id];

        if (receita) {
            // Preenche título, descrição e imagem
            document.getElementById('titulo-receita').textContent = receita.titulo;
            document.getElementById('descricao-receita').textContent = receita.descricao;
            document.getElementById('imagem-receita').src = receita.imagem;
            document.getElementById('imagem-receita').alt = receita.titulo;

            // Preenche ingredientes
            const ingredientesEl = document.getElementById('ingredientes-receita');
            ingredientesEl.innerHTML = receita.ingredientes
                .map(ingrediente => `<li>${ingrediente}</li>`)
                .join('');

            // Preenche modo de preparo
            const preparoEl = document.getElementById('preparo-receita');
            preparoEl.innerHTML = receita.preparo
                .map(passo => `<li>${passo}</li>`)
                .join('');

            // Oculta a página principal
            document.querySelector('main').style.display = 'none';

            // Mostra a página da receita
            const secaoReceita = document.getElementById('pagina-receita');
            secaoReceita.style.display = 'block';

            // Estilo da seção
            secaoReceita.style.backgroundColor = '#fffbe9';
            secaoReceita.style.padding = '40px 20px';
            secaoReceita.style.minHeight = '100vh';

            // Container
            const container = secaoReceita.querySelector('.container');
            container.style.maxWidth = '800px';
            container.style.margin = '0 auto';
            container.style.padding = '30px';
            container.style.borderRadius = '10px';
            container.style.boxShadow = '0 0 15px rgba(0,0,0,0.1)';
            container.style.backgroundColor = '#ffffff';
            container.style.textAlign = 'center';

            // Botão de voltar
            const voltarBtn = document.getElementById('voltar-btn');
            voltarBtn.style.backgroundColor = '#ff6347';
            voltarBtn.style.color = 'white';
            voltarBtn.style.border = 'none';
            voltarBtn.style.padding = '10px 20px';
            voltarBtn.style.marginBottom = '30px';
            voltarBtn.style.cursor = 'pointer';
            voltarBtn.style.borderRadius = '6px';
            voltarBtn.style.fontSize = '16px';

            // Título da receita
            const titulo = document.getElementById('titulo-receita');
            titulo.style.fontSize = '2rem';
            titulo.style.color = '#333';
            titulo.style.marginBottom = '20px';

            // Imagem da receita
            const imagem = document.getElementById('imagem-receita');
            imagem.style.maxWidth = '100%';
            imagem.style.borderRadius = '10px';
            imagem.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
            imagem.style.marginBottom = '20px';

            // Descrição
            const descricao = document.getElementById('descricao-receita');
            descricao.style.fontSize = '1.1rem';
            descricao.style.color = '#666';
            descricao.style.lineHeight = '1.6';

            // Estilo para ingredientes e preparo
            ingredientesEl.style.textAlign = 'left';
            ingredientesEl.style.marginBottom = '30px';
            ingredientesEl.style.fontSize = '1rem';
            ingredientesEl.style.color = '#444';

            preparoEl.style.textAlign = 'left';
            preparoEl.style.fontSize = '1rem';
            preparoEl.style.color = '#444';
        }
    });
});

// Botão de voltar
document.getElementById('voltar-btn').addEventListener('click', function () {
    document.getElementById('pagina-receita').style.display = 'none';
    document.querySelector('main').style.display = 'block';
});
