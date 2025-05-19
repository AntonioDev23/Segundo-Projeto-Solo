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
            document.getElementById('titulo-receita').textContent = receita.titulo;
            document.getElementById('descricao-receita').textContent = receita.descricao;
            document.getElementById('imagem-receita').src = receita.imagem;
            document.getElementById('imagem-receita').alt = receita.titulo;

            // Oculta tudo
            document.querySelector('main').style.display = 'none';

            // Mostra a receita
            document.getElementById('pagina-receita').style.display = 'block';
        }
    });
});

// Botão de voltar
document.getElementById('voltar-btn').addEventListener('click', function () {
    document.getElementById('pagina-receita').style.display = 'none';
    document.querySelector('main').style.display = 'block';
});
