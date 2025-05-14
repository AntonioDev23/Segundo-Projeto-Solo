
document.getElementById('filterToggle').addEventListener('click', function() {
    // Quando o botão de filtro for clicado, vamos exibir as novas receitas
    const novasReceitas = [
        {
            nome: 'Torta de Maçã',
            descricao: 'Uma sobremesa clássica, deliciosa e reconfortante.',
            imagem: 'imagens/torta-de-maca.webp',
            link: '#'
        },
        {
            nome: 'Bife à Parmegiana',
            descricao: 'Uma deliciosa combinação de carne empanada e molho de tomate.',
            imagem: 'imagens/bife-parmegiana.webp',
            link: '#'
        },
        {
            nome: 'Salada de Frutas',
            descricao: 'Uma opção fresca e saudável para qualquer momento.',
            imagem: 'imagens/salada-frutas.webp',
            link: '#'
        }
    ];

    const grid = document.getElementById('novas-receitas-grid');
    grid.innerHTML = ''; // Limpar o conteúdo existente

    novasReceitas.forEach(receita => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <div class="tooltip">${receita.descricao}</div>
            <img src="${receita.imagem}" alt="${receita.nome}">
            <h3>${receita.nome}</h3>
            <p>${receita.descricao}</p>
            <a href="${receita.link}" class="btn">Ver Receita</a>
        `;

        grid.appendChild(recipeCard); // Adiciona a receita à grid
    });

    // Exibe a seção de novas receitas
    document.getElementById('nossas-receitas').style.display = 'block';
});

