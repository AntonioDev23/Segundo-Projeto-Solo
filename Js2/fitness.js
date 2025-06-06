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

  for (const chave in receitasFitness) {
    if (receitasFitness.hasOwnProperty(chave)) {
      const receita = receitasFitness[chave];

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
        criarModalDetalhesFitness(receita);
      });

      itemDiv.appendChild(btnDetalhes);
      container.appendChild(itemDiv);
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


// Detalhes da receita fitness
export function criarModalDetalhesFitness(fitness) {
  const modalAntigo = document.getElementById('modal-detalhes');
  if (modalAntigo) modalAntigo.remove();

  const overlay = document.createElement('div');
  overlay.id = 'modal-detalhes';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.zIndex = '20000';

  const modal = document.createElement('div');
  modal.style.backgroundColor = '#fff';
  modal.style.padding = '30px';
  modal.style.borderRadius = '10px';
  modal.style.width = '500px';
  modal.style.maxHeight = '80vh';
  modal.style.overflowY = 'auto';
  modal.style.boxShadow = '0 0 15px rgba(0,0,0,0.4)';
  modal.style.position = 'relative';

  const estrelas = document.createElement('div');
  estrelas.textContent = '★★★★★';
  estrelas.style.textAlign = 'center';
  estrelas.style.fontSize = '40px';
  estrelas.style.marginBottom = '15px';
  estrelas.style.color = 'gold';
  modal.appendChild(estrelas);

  const titulo = document.createElement('h2');
  titulo.textContent = fitness.titulo;
  titulo.style.color = '#8b0000';
  titulo.style.marginBottom = '20px';
  titulo.style.textAlign = 'center';
  modal.appendChild(titulo);

  if (fitness.imagem) {
    const img = document.createElement('img');
    img.src = fitness.imagem;
    img.alt = fitness.titulo;
    img.style.display = 'block';
    img.style.margin = '0 auto 20px';
    img.style.maxWidth = '100%';
    img.style.borderRadius = '8px';
    modal.appendChild(img);
  }

  const receitaTitulo = document.createElement('h3');
  receitaTitulo.textContent = 'Receita';
  receitaTitulo.style.color = '#8b0000';
  receitaTitulo.style.marginBottom = '10px';
  receitaTitulo.style.textAlign = 'center';
  modal.appendChild(receitaTitulo);

  const ingredientes = document.createElement('ul');
  ingredientes.style.marginBottom = '20px';
  ingredientes.style.paddingLeft = '20px';
  fitness.ingredientes.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ingredientes.appendChild(li);
  });
  modal.appendChild(ingredientes);

  const preparoTitulo = document.createElement('h3');
  preparoTitulo.textContent = 'Modo de preparo';
  preparoTitulo.style.color = '#8b0000';
  preparoTitulo.style.marginBottom = '10px';
  preparoTitulo.style.textAlign = 'center';
  modal.appendChild(preparoTitulo);

  const preparo = document.createElement('ol');
  preparo.style.paddingLeft = '20px';
  fitness.preparo.forEach(passo => {
    const li = document.createElement('li');
    li.textContent = passo;
    preparo.appendChild(li);
  });
  modal.appendChild(preparo);

  const btnFechar = document.createElement('button');
  btnFechar.textContent = 'Fechar';
  btnFechar.style.marginTop = '20px';
  btnFechar.style.width = '100%';
  btnFechar.style.padding = '10px';
  btnFechar.style.backgroundColor = '#8b0000';
  btnFechar.style.color = '#fff';
  btnFechar.style.border = 'none';
  btnFechar.style.borderRadius = '5px';
  btnFechar.style.fontWeight = 'bold';
  btnFechar.style.cursor = 'pointer';

  btnFechar.addEventListener('click', () => {
    overlay.remove();
  });

  modal.appendChild(btnFechar);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}


