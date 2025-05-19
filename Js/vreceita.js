// Dados das receitas principais (adicione macarrao-carbonara aqui)
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
    },
    'macarrao-carbonara': {
        titulo: 'Macarrão à Carbonara',
        descricao: 'Massa al dente com molho cremoso de ovos, queijo e pancetta.',
        imagem: 'imagens/macarrao-carbonara.webp'
    }
};

// Função que cria os cards dinamicamente
function criarCards() {
    const container = document.querySelector('.container-dos-cards');
    container.innerHTML = ''; // limpa o container antes de criar

    for (const id in receitasPrincipais) {
        const receita = receitasPrincipais[id];

        const card = document.createElement('div');
        card.classList.add('recipe-card');

        // Adiciona classe especial só no card do carbonara
        if (id === 'macarrao-carbonara') {
            card.classList.add('ajuste-carbonara');
        }

        card.innerHTML = `
            <img src="${receita.imagem}" alt="${receita.titulo}">
            <h3>${receita.titulo}</h3>
            <p>${receita.descricao}</p>
            <button class="ver-receita" data-id="${id}">Ver Receita</button>
        `;

        container.appendChild(card);
    }

    // Depois de criar os cards, adiciona os event listeners nos botões
    document.querySelectorAll('.ver-receita').forEach(botao => {
        botao.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            const receita = receitasPrincipais[id];

            if (receita) {
                document.getElementById('titulo-receita').textContent = receita.titulo;
                document.getElementById('descricao-receita').textContent = receita.descricao;
                document.getElementById('imagem-receita').src = receita.imagem;
                document.getElementById('imagem-receita').alt = receita.titulo;

                document.querySelector('main').style.display = 'none';
                document.getElementById('pagina-receita').style.display = 'block';
            }
        });
    });
}

// Botão de voltar
document.getElementById('voltar-btn').addEventListener('click', function () {
    document.getElementById('pagina-receita').style.display = 'none';
    document.querySelector('main').style.display = 'block';
});

// Executa a função para criar os cards quando a página carregar
window.addEventListener('DOMContentLoaded', criarCards);
