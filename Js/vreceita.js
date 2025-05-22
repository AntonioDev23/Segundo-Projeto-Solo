// Dados das receitas principais
const receitasPrincipais = {
    'bolo-chocolate': {
        titulo: 'Bolo de Chocolate',
        descricao: 'Massa fofinha coberta com generosa calda quente de chocolate meio amargo.',
        imagem: 'imagens/Bolo de chocolate 2.webp'
    },
    'pizza-caseira': {
        titulo: 'Pizza Caseira',
        descricao: 'Massa fininha e crocante, molho caseiro e muito queijo derretido.',
        imagem: 'imagens/Pizza caseira.webp'
    },
    'lasanha': {
        titulo: 'Lasanha',
        descricao: 'Camadas generosas de massa, carne moída temperada e muito queijo gratinado.',
        imagem: 'imagens/Lasanha.webp'
    },
    'escondidinho': {
        titulo: 'Escondidinho de Carne Moída',
        descricao: 'Purê de batata cremoso escondendo carne moída bem temperada.',
        imagem: 'imagens/escondidinho.webp'
    },
    'feijao-tropeiro': {
        titulo: 'Feijão Tropeiro',
        descricao: 'Feijão com farinha, ovos, torresmo e cheiro-verde.',
        imagem: 'imagens/feijão.webp'
    },
    'cuscuz': {
        titulo: 'Cuscuz',
        descricao: 'Cuscuz amarelinho com legumes e temperos frescos.',
        imagem: 'imagens/Cuscuz.webp'
    }
};

// Ao clicar em "Ver Receita"
document.querySelectorAll('.ver-receita').forEach(botao => {
    botao.addEventListener('click', function () {
        const id = this.getAttribute('data-id');
        const receita = receitasPrincipais[id];

        if (receita) {
            // Preenche conteúdo
            document.getElementById('titulo-receita').textContent = receita.titulo;
            document.getElementById('descricao-receita').textContent = receita.descricao;
            document.getElementById('imagem-receita').src = receita.imagem;
            document.getElementById('imagem-receita').alt = receita.titulo;

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
        }
    });
});

// Botão de voltar
document.getElementById('voltar-btn').addEventListener('click', function () {
    document.getElementById('pagina-receita').style.display = 'none';
    document.querySelector('main').style.display = 'block';
});
