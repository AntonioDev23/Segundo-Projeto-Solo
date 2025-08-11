// Dados das sobremesas
const receitasSobremesas = {
  1: {
    titulo: "Pavê de Chocolate",
    ingredientes: [
      "200g de biscoito champagne",
      "500ml de leite",
      "1 lata de leite condensado",
      "2 colheres de sopa de amido de milho",
      "200g de chocolate meio amargo",
      "Chantilly para decorar"
    ],
    preparo: [
      "Misture leite, leite condensado e amido em uma panela.",
      "Leve ao fogo até engrossar mexendo sempre.",
      "Derreta o chocolate e misture no creme.",
      "Faça camadas alternadas de biscoito e creme em um refratário.",
      "Finalize com chantilly e leve à geladeira por 3 horas."
    ],
    imagem: "imagens/pave.png"
  },
  2: {
    titulo: "Mousse de Maracujá",
    ingredientes: [
      "1 lata de leite condensado",
      "1 lata de creme de leite",
      "1 lata de suco de maracujá concentrado",
      "1 envelope de gelatina sem sabor"
    ],
    preparo: [
      "Hidrate a gelatina conforme instruções.",
      "Bata no liquidificador leite condensado, creme de leite e suco de maracujá.",
      "Adicione a gelatina hidratada e bata novamente.",
      "Coloque em taças e leve à geladeira por 4 horas."
    ],
    imagem: "imagens/mousse-maracuja.png"
  },
  3: {
    titulo: "Brigadeiro de Colher",
    ingredientes: [
      "1 lata de leite condensado",
      "1 colher de sopa de manteiga",
      "4 colheres de sopa de chocolate em pó",
      "Granulado para decorar"
    ],
    preparo: [
      "Misture leite condensado, manteiga e chocolate em pó.",
      "Leve ao fogo médio mexendo até desgrudar do fundo.",
      "Coloque em potinhos, decore com granulado e sirva frio."
    ],
    imagem: "imagens/brigadeiro-colher.png"
  },
  4: {
    titulo: "Torta de Limão",
    ingredientes: [
      "1 pacote de biscoito maisena",
      "100g de manteiga derretida",
      "1 lata de leite condensado",
      "Suco de 3 limões",
      "1 caixinha de creme de leite"
    ],
    preparo: [
      "Triture os biscoitos e misture com a manteiga.",
      "Forre o fundo de uma forma com essa mistura e leve à geladeira.",
      "Misture leite condensado, suco de limão e creme de leite.",
      "Despeje sobre a base e leve à geladeira por 3 horas."
    ],
    imagem: "imagens/torta-limao.png"
  },
  5: {
    titulo: "Pudim de Leite",
    ingredientes: [
      "1 lata de leite condensado",
      "2 latas de leite",
      "3 ovos",
      "1 xícara de açúcar para a calda"
    ],
    preparo: [
      "Faça uma calda com o açúcar e caramelize uma forma.",
      "Bata no liquidificador leite condensado, leite e ovos.",
      "Despeje na forma caramelizada e asse em banho-maria por 1 hora.",
      "Deixe esfriar, desenforme e sirva."
    ],
    imagem: "imagens/pudim-leite.png"
  },
  6: {
    titulo: "Cheesecake de Morango",
    ingredientes: [
      "200g de biscoito de maisena",
      "100g de manteiga derretida",
      "300g de cream cheese",
      "200g de morangos",
      "100g de açúcar",
      "1 envelope de gelatina sem sabor"
    ],
    preparo: [
      "Triture o biscoito e misture com a manteiga.",
      "Forre uma forma com essa base e leve à geladeira.",
      "Bata cream cheese com açúcar.",
      "Hidrate a gelatina e incorpore na mistura.",
      "Despeje sobre a base, decore com morangos e leve à geladeira."
    ],
    imagem: "imagens/cheesecake.png"
  },
  7: {
    titulo: "Brownie",
    ingredientes: [
      "200g de chocolate meio amargo",
      "150g de manteiga",
      "3 ovos",
      "1 xícara de açúcar",
      "1 xícara de farinha de trigo"
    ],
    preparo: [
      "Derreta o chocolate com manteiga.",
      "Misture os ovos com açúcar.",
      "Junte a mistura de chocolate e farinha.",
      "Asse em forma untada por 25 minutos."
    ],
    imagem: "https://example.com/brownie.jpg"
  },
  8: {
    titulo: "Sorvete Caseiro de Banana",
    ingredientes: [
      "4 bananas maduras",
      "200ml de creme de leite",
      "100g de açúcar",
      "Suco de 1 limão"
    ],
    preparo: [
      "Bata as bananas com o limão e açúcar no liquidificador.",
      "Misture o creme de leite.",
      "Leve ao congelador, mexendo a cada 30 minutos por 3 horas."
    ],
    imagem: "https://example.com/sorvete-banana.jpg"
  },
  9: {
    titulo: "Gelatina Colorida",
    ingredientes: [
      "1 pacote de gelatina sabor morango",
      "1 pacote de gelatina sabor limão",
      "1 pacote de gelatina sabor uva",
      "1 lata de leite condensado",
      "1 lata de creme de leite"
    ],
    preparo: [
      "Prepare as gelatinas separadamente em formas retangulares.",
      "Após firmarem, corte em cubos.",
      "Misture leite condensado e creme de leite e despeje sobre os cubos.",
      "Leve à geladeira para firmar."
    ],
    imagem: "https://example.com/gelatina-colorida.jpg"
  },
  10: {
    titulo: "Cupcake de Baunilha",
    ingredientes: [
      "2 ovos",
      "1 xícara de açúcar",
      "1/2 xícara de manteiga",
      "1 xícara de farinha de trigo",
      "1/2 xícara de leite",
      "1 colher de chá de essência de baunilha"
    ],
    preparo: [
      "Bata ovos, açúcar e manteiga até formar um creme.",
      "Acrescente farinha, leite e baunilha e misture.",
      "Coloque em forminhas e asse por 20 minutos."
    ],
    imagem: "https://example.com/cupcake-baunilha.jpg"
  }
};

// Função para mostrar as sobremesas 
export function mostrarSobremesas() {
  // Remove container antigo, se houver
  const containerAntigo = document.getElementById('sobremesas-container');
  if (containerAntigo) containerAntigo.remove();

  const container = document.createElement('div');
  container.id = 'sobremesas-container';
  container.style.position = 'fixed';
  container.style.top = '50px';
  container.style.right = '20px';
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
  titulo.textContent = 'Receitas de Sobremesas';
  titulo.style.color = '#ff6b00';
  titulo.style.textAlign = 'center';
  container.appendChild(titulo);

  for (const chave in receitasSobremesas) {
    if (receitasSobremesas.hasOwnProperty(chave)) {
      const sobremesa = receitasSobremesas[chave];

      const sobremesaDiv = document.createElement('div');
      sobremesaDiv.style.marginBottom = '15px';
      sobremesaDiv.style.display = 'flex';
      sobremesaDiv.style.justifyContent = 'space-between';
      sobremesaDiv.style.alignItems = 'center';
      sobremesaDiv.style.lineHeight = '1.2';
      sobremesaDiv.style.padding = '8px 12px';
      sobremesaDiv.style.border = '1.5px solid #ff6b00';
      sobremesaDiv.style.borderRadius = '8px';
      sobremesaDiv.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
      sobremesaDiv.style.cursor = 'pointer';

      sobremesaDiv.addEventListener('mouseenter', () => {
        sobremesaDiv.style.transform = 'translateY(-5px)';
        sobremesaDiv.style.boxShadow = '0 4px 12px rgba(255, 107, 0, 0.4)';
      });
      sobremesaDiv.addEventListener('mouseleave', () => {
        sobremesaDiv.style.transform = 'translateY(0)';
        sobremesaDiv.style.boxShadow = 'none';
      });

      const nomeSobremesa = document.createElement('strong');
      nomeSobremesa.textContent = sobremesa.titulo;
      sobremesaDiv.appendChild(nomeSobremesa);

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
        criarModalDetalhesSobremesas(sobremesa);
      });

      sobremesaDiv.appendChild(btnDetalhes);
      container.appendChild(sobremesaDiv);
    }
  }

  // Botão para fechar o container de sobremesas
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
    container.remove();
  });

  container.appendChild(btnFechar);

  document.body.appendChild(container);
}



// Detalhes da receita de sobremesa
function criarModalDetalhesSobremesas(sobremesa) {
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

  // Botão "X" no canto superior direito
  const fecharX = document.createElement('span');
  fecharX.innerHTML = '&times;';
  fecharX.style.position = 'absolute';
  fecharX.style.top = '10px';
  fecharX.style.right = '15px';
  fecharX.style.fontSize = '28px';
  fecharX.style.cursor = 'pointer';
  fecharX.style.color = '#8b0000';
  fecharX.style.fontWeight = 'bold';

  fecharX.addEventListener('click', () => {
    overlay.remove();
  });
  modal.appendChild(fecharX);

  // Estrelas
  const estrelas = document.createElement('div');
  estrelas.textContent = '★★★★★';
  estrelas.style.textAlign = 'center';
  estrelas.style.fontSize = '40px';
  estrelas.style.marginBottom = '15px';
  estrelas.style.color = 'gold';
  modal.appendChild(estrelas);

  // Título da sobremesa
  const titulo = document.createElement('h2');
  titulo.textContent = sobremesa.titulo;
  titulo.style.color = '#8b0000';
  titulo.style.marginBottom = '20px';
  titulo.style.textAlign = 'center';
  modal.appendChild(titulo);

  // Imagem da sobremesa
  if (sobremesa.imagem) {
    const img = document.createElement('img');
    img.src = sobremesa.imagem;
    img.alt = sobremesa.titulo;
    img.style.display = 'block';
    img.style.margin = '0 auto 20px';
    img.style.maxWidth = '100%';
    img.style.borderRadius = '8px';
    modal.appendChild(img);
  }

  // Título "Receita"
  const receitaTitulo = document.createElement('h3');
  receitaTitulo.textContent = 'Receita';
  receitaTitulo.style.color = '#8b0000';
  receitaTitulo.style.marginBottom = '10px';
  receitaTitulo.style.textAlign = 'center';
  modal.appendChild(receitaTitulo);

  // Lista de ingredientes
  const ingredientes = document.createElement('ul');
  ingredientes.style.marginBottom = '20px';
  ingredientes.style.paddingLeft = '20px';
  sobremesa.ingredientes.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ingredientes.appendChild(li);
  });
  modal.appendChild(ingredientes);

  // Título "Modo de preparo"
  const preparoTitulo = document.createElement('h3');
  preparoTitulo.textContent = 'Modo de preparo';
  preparoTitulo.style.color = '#8b0000';
  preparoTitulo.style.marginBottom = '10px';
  preparoTitulo.style.textAlign = 'center';
  modal.appendChild(preparoTitulo);

  // Lista de preparo
  const preparo = document.createElement('ol');
  preparo.style.paddingLeft = '20px';
  sobremesa.preparo.forEach(passo => {
    const li = document.createElement('li');
    li.textContent = passo;
    preparo.appendChild(li);
  });
  modal.appendChild(preparo);

  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}
