
const receitas = [
    {
        titulo: "Bolo de Chocolate",
        descricao: "Delicioso bolo fofinho com cobertura cremosa de chocolate amargo.",
        imagem: "imagens/0709fc0e-f780-463e-a717-67baad445ffc.webp"
    },
    {
        titulo: "Lasanha de Frango",
        descricao: "Camadas suculentas de frango, queijo e molho bechamel.",
        imagem: "imagens/lasanha.webp"
    },
    {
        titulo: "Salada Tropical",
        descricao: "Refrescante mistura de folhas, frutas e molho especial.",
        imagem: "imagens/salada.webp"
    }
    // Adicione mais receitas aqui
];

function carregarReceitas() {
    const container = document.getElementById('popularSection');
    container.innerHTML = `
        <h2 class="titulo-pagina">Nossas Receitas</h2>
        <div class="recipe-grid">
            ${receitas.map(receita => `
                <div class="recipe-card">
                    <img src="${receita.imagem}" alt="${receita.titulo}">
                    <h3>${receita.titulo}</h3>
                    <p>${receita.descricao}</p>
                    <a href="#" class="btn">Ver Receita</a>
                </div>
            `).join('')}
        </div>
    `;
    window.scrollTo({ top: container.offsetTop, behavior: 'smooth' });
}

// Ativa quando clicar em "Nossas Receitas"
document.querySelectorAll('[data-id="popular"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        carregarReceitas();
    });
});

