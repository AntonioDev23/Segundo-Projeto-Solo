export const fitnessReceitas = [
  {
    id: 1,
    titulo: "Omelete de Claras com Espinafre",
    ingredientes: [
      "4 claras de ovo",
      "1 punhado de espinafre fresco",
      "1 colher de chá de azeite",
      "Sal e pimenta a gosto"
    ],
    preparo: [
      "Bata as claras com sal e pimenta.",
      "Aqueça o azeite e refogue o espinafre.",
      "Despeje as claras batidas na frigideira.",
      "Cozinhe até firmar e dobre a omelete ao meio."
    ],
    descricao: "Omelete leve e proteica, ideal para café da manhã ou lanche rápido."
  },
  {
    id: 2,
    titulo: "Salada de Quinoa com Legumes",
    ingredientes: [
      "1 xícara de quinoa cozida",
      "Tomate-cereja",
      "Pepino",
      "Cenoura ralada",
      "Salsinha",
      "Suco de limão"
    ],
    preparo: [
      "Misture todos os ingredientes em uma tigela.",
      "Tempere com suco de limão e sal a gosto.",
      "Sirva fresca."
    ],
    descricao: "Salada nutritiva, rica em fibras e proteínas vegetais."
  },
  {
    id: 3,
    titulo: "Peito de Frango Grelhado com Brócolis",
    ingredientes: [
      "150g de peito de frango",
      "Brócolis cozido no vapor",
      "Alho picado",
      "Azeite",
      "Sal e pimenta"
    ],
    preparo: [
      "Tempere o frango com sal, pimenta e alho.",
      "Grelhe o frango até dourar.",
      "Cozinhe o brócolis no vapor.",
      "Sirva junto."
    ],
    descricao: "Refeição simples e rica em proteínas, perfeita para o almoço."
  },
  {
    id: 4,
    titulo: "Smoothie Verde Detox",
    ingredientes: [
      "1 maçã verde",
      "1 punhado de couve",
      "1 colher de sopa de chia",
      "200 ml de água de coco",
      "Gelo a gosto"
    ],
    preparo: [
      "Bata todos os ingredientes no liquidificador.",
      "Sirva gelado."
    ],
    descricao: "Bebida refrescante e detox, excelente para dar energia."
  },
  {
    id: 5,
    titulo: "Panqueca de Aveia e Banana",
    ingredientes: [
      "1 banana madura",
      "2 colheres de sopa de aveia",
      "1 ovo",
      "Canela a gosto"
    ],
    preparo: [
      "Amasse a banana e misture com os outros ingredientes.",
      "Despeje porções na frigideira quente.",
      "Cozinhe até dourar dos dois lados."
    ],
    descricao: "Panqueca saudável, rica em fibras e sem farinha refinada."
  },
  {
    id: 6,
    titulo: "Iogurte Natural com Granola e Mel",
    ingredientes: [
      "1 pote de iogurte natural desnatado",
      "2 colheres de sopa de granola",
      "1 colher de chá de mel"
    ],
    preparo: [
      "Coloque o iogurte em uma tigela.",
      "Adicione granola e mel por cima.",
      "Misture se desejar."
    ],
    descricao: "Lanche leve e nutritivo, ideal para o pré-treino."
  },
  {
    id: 7,
    titulo: "Wrap Integral com Atum e Abacate",
    ingredientes: [
      "1 pão wrap integral",
      "100g de atum em água",
      "Fatias de abacate",
      "Folhas de alface",
      "Tomate"
    ],
    preparo: [
      "Recheie o pão wrap com atum, abacate, alface e tomate.",
      "Enrole o wrap e sirva."
    ],
    descricao: "Sanduíche saudável e prático para o dia a dia."
  },
  {
    id: 8,
    titulo: "Bolinho de Batata Doce e Aveia",
    ingredientes: [
      "1 xícara de purê de batata doce",
      "3 colheres de sopa de aveia",
      "1 ovo",
      "Temperos a gosto"
    ],
    preparo: [
      "Misture todos os ingredientes.",
      "Modele bolinhos e asse por 25 minutos a 180°C."
    ],
    descricao: "Bolinho assado e nutritivo, ótimo para um lanche saudável."
  },
  {
    id: 9,
    titulo: "Salada de Grão-de-Bico com Atum",
    ingredientes: [
      "1 xícara de grão-de-bico cozido",
      "100g de atum",
      "Cebola roxa",
      "Salsinha",
      "Azeite e limão"
    ],
    preparo: [
      "Misture todos os ingredientes em uma tigela.",
      "Tempere com azeite e limão.",
      "Sirva fresca."
    ],
    descricao: "Salada rica em proteínas e fibras, ideal para manter a saciedade."
  },
  {
    id: 10,
    titulo: "Sopa de Legumes com Frango Desfiado",
    ingredientes: [
      "Caldo de legumes",
      "Cenoura",
      "Abobrinha",
      "Peito de frango desfiado",
      "Temperos a gosto"
    ],
    preparo: [
      "Cozinhe os legumes no caldo.",
      "Adicione o frango desfiado.",
      "Tempere e sirva quente."
    ],
    descricao: "Refeição leve e reconfortante, ótima para o jantar."
  }
];

// Função principal para exibir a lista de comidas fitness
export function mostrarFitness() {
  // Remove interface antiga
  const containerAntigo = document.getElementById('fitness-container');
  if (containerAntigo) containerAntigo.remove();

  const container = document.createElement('div');
  container.id = 'fitness-container';
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
  titulo.textContent = 'Receitas Fitness';
  titulo.style.color = '#ff6b00';
  titulo.style.textAlign = 'center';
  container.appendChild(titulo);

  for (const receita of fitnessReceitas) {
    const itemDiv = document.createElement('div');
    itemDiv.style.marginBottom = '15px';
    itemDiv.style.display = 'flex';
    itemDiv.style.justifyContent = 'space-between';
    itemDiv.style.alignItems = 'center';
    itemDiv.style.lineHeight = '1.2';
    itemDiv.style.padding = '8px 12px';
    itemDiv.style.border = '1.5px solid #ff6b00';
    itemDiv.style.borderRadius = '8px';
    itemDiv.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
    itemDiv.style.cursor = 'pointer';

    itemDiv.addEventListener('mouseenter', () => {
      itemDiv.style.transform = 'translateY(-5px)';
      itemDiv.style.boxShadow = '0 4px 12px rgba(255, 107, 0, 0.4)';
    });
    itemDiv.addEventListener('mouseleave', () => {
      itemDiv.style.transform = 'translateY(0)';
      itemDiv.style.boxShadow = 'none';
    });

    const nome = document.createElement('strong');
    nome.textContent = receita.titulo;
    nome.style.display = 'inline-block';
    nome.style.verticalAlign = 'middle';
    itemDiv.appendChild(nome);

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
      abrirModal(receita);
    });

    itemDiv.appendChild(btnDetalhes);
    container.appendChild(itemDiv);
  }

  document.body.appendChild(container);
}

// Função para abrir o modal com detalhes da receita
function abrirModal(receita) {
  // Criar o overlay do modal
  const modalOverlay = document.createElement('div');
  modalOverlay.style.position = 'fixed';
  modalOverlay.style.top = '0';
  modalOverlay.style.left = '0';
  modalOverlay.style.width = '100vw';
  modalOverlay.style.height = '100vh';
  modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  modalOverlay.style.display = 'flex';
  modalOverlay.style.justifyContent = 'center';
  modalOverlay.style.alignItems = 'center';
  modalOverlay.style.zIndex = '11000';

  // Criar o conteúdo do modal
  const modalContent = document.createElement('div');
  modalContent.style.backgroundColor = '#fff';
  modalContent.style.padding = '20px';
  modalContent.style.borderRadius = '10px';
  modalContent.style.width = '90%';
  modalContent.style.maxWidth = '600px';
  modalContent.style.maxHeight = '80vh';
  modalContent.style.overflowY = 'auto';
  modalContent.style.position = 'relative';

  // Botão fechar
  const btnFechar = document.createElement('button');
  btnFechar.textContent = 'X';
  btnFechar.style.position = 'absolute';
  btnFechar.style.top = '10px';
  btnFechar.style.right = '10px';
  btnFechar.style.background = 'transparent';
  btnFechar.style.border = 'none';
  btnFechar.style.fontSize = '20px';
  btnFechar.style.cursor = 'pointer';

  btnFechar.addEventListener('click', () => {
    modalOverlay.remove();
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.remove();
  });

  // Título da receita
  const titulo = document.createElement('h2');
  titulo.textContent = receita.titulo;
  titulo.style.color = '#ff6b00';

  // Descrição
  const descricao = document.createElement('p');
  descricao.textContent = receita.descricao;
  descricao.style.fontStyle = 'italic';
  descricao.style.marginBottom = '15px';

  // Ingredientes
  const ingredientesTitulo = document.createElement('h3');
  ingredientesTitulo.textContent = 'Ingredientes:';
  ingredientesTitulo.style.marginTop = '0';

  const ulIngredientes = document.createElement('ul');
  for (const ingrediente of receita.ingredientes) {
    const li = document.createElement('li');
    li.textContent = ingrediente;
    ulIngredientes.appendChild(li);
  }

  // Preparo
  const preparoTitulo = document.createElement('h3');
  preparoTitulo.textContent = 'Modo de Preparo:';
  preparoTitulo.style.marginTop = '15px';

  const ulPreparo = document.createElement('ol');
  if (receita.preparo && receita.preparo.length > 0) {
    for (const passo of receita.preparo) {
      const li = document.createElement('li');
      li.textContent = passo;
      ulPreparo.appendChild(li);
    }
  } else {
    const li = document.createElement('li');
    li.textContent = 'Modo de preparo não disponível.';
    ulPreparo.appendChild(li);
  }

  // Montar modal
  modalContent.appendChild(btnFechar);
  modalContent.appendChild(titulo);
  modalContent.appendChild(descricao);
  modalContent.appendChild(ingredientesTitulo);
  modalContent.appendChild(ulIngredientes);
  modalContent.appendChild(preparoTitulo);
  modalContent.appendChild(ulPreparo);
  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);
}
