import { mostrarComidas } from '.Js/nossasreceitas.js';

window.addEventListener('DOMContentLoaded', () => {
  const btnComidas = document.querySelector('#btn-comidas');
  if (btnComidas) {
    btnComidas.addEventListener('click', mostrarComidas);
  }
});


export function mostrarComidas() {
  const containerAntigo = document.getElementById('comidas-container');
  if (containerAntigo) containerAntigo.remove();

  const container = document.createElement('div');
  container.id = 'comidas-container';
  container.style.position = 'fixed';
  container.style.top = '50px';
  container.style.left = '20px';
  container.style.width = '500px';
  container.style.maxHeight = '70vh';
  container.style.overflowY = 'auto';
  container.style.backgroundColor = '#fff';
  container.style.border = '2px solid #228B22'; // verde
  container.style.borderRadius = '8px';
  container.style.padding = '20px';
  container.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
  container.style.zIndex = '10000';

  const titulo = document.createElement('h2');
  titulo.textContent = 'Nossas Receitas';
  titulo.style.color = '#228B22'; // verde
  titulo.style.textAlign = 'center';
  container.appendChild(titulo);

  for (const comida of comidas) {
    const comidaDiv = document.createElement('div');
    comidaDiv.style.marginBottom = '15px';
    comidaDiv.style.display = 'flex';
    comidaDiv.style.justifyContent = 'space-between';
    comidaDiv.style.alignItems = 'center';
    comidaDiv.style.lineHeight = '1.2';
    comidaDiv.style.padding = '8px 12px';
    comidaDiv.style.border = '1.5px solid #228B22';
    comidaDiv.style.borderRadius = '8px';
    comidaDiv.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
    comidaDiv.style.cursor = 'pointer';

    comidaDiv.addEventListener('mouseenter', () => {
      comidaDiv.style.transform = 'translateY(-5px)';
      comidaDiv.style.boxShadow = '0 4px 12px rgba(34, 139, 34, 0.4)';
    });
    comidaDiv.addEventListener('mouseleave', () => {
      comidaDiv.style.transform = 'translateY(0)';
      comidaDiv.style.boxShadow = 'none';
    });

    const nomeComida = document.createElement('strong');
    nomeComida.textContent = comida.titulo;
    comidaDiv.appendChild(nomeComida);

    const btnDetalhes = document.createElement('button');
    btnDetalhes.textContent = 'Receita';
    btnDetalhes.style.marginLeft = '10px';
    btnDetalhes.style.cursor = 'pointer';
    btnDetalhes.style.backgroundColor = '#228B22';
    btnDetalhes.style.color = '#fff';
    btnDetalhes.style.border = 'none';
    btnDetalhes.style.borderRadius = '4px';
    btnDetalhes.style.padding = '6px 12px';

    btnDetalhes.addEventListener('mouseenter', () => {
      btnDetalhes.style.backgroundColor = '#006400'; // verde escuro
    });
    btnDetalhes.addEventListener('mouseleave', () => {
      btnDetalhes.style.backgroundColor = '#228B22';
    });

    btnDetalhes.addEventListener('click', () => {
      criarModalDetalhesComidas(comida);
    });

    comidaDiv.appendChild(btnDetalhes);
    container.appendChild(comidaDiv);
  }

  const btnFechar = document.createElement('button');
  btnFechar.textContent = 'Fechar';
  btnFechar.style.marginTop = '20px';
  btnFechar.style.width = '100%';
  btnFechar.style.padding = '10px';
  btnFechar.style.backgroundColor = '#006400'; // verde escuro
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

function criarModalDetalhesComidas(comida) {
  const modalAntigo = document.getElementById('modal-detalhes-comida');
  if (modalAntigo) modalAntigo.remove();

  const overlay = document.createElement('div');
  overlay.id = 'modal-detalhes-comida';
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
  titulo.textContent = comida.titulo;
  titulo.style.color = '#228B22';
  titulo.style.marginBottom = '20px';
  titulo.style.textAlign = 'center';
  modal.appendChild(titulo);

  const img = document.createElement('img');
  img.src = comida.imagem;
  img.alt = comida.titulo;
  img.style.width = '100%';
  img.style.borderRadius = '8px';
  img.style.marginBottom = '20px';
  modal.appendChild(img);

  const ingredientesTitulo = document.createElement('h3');
  ingredientesTitulo.textContent = 'Ingredientes:';
  ingredientesTitulo.style.color = '#228B22';
  modal.appendChild(ingredientesTitulo);

  const listaIngredientes = document.createElement('ul');
  for (const ingrediente of comida.ingredientes) {
    const li = document.createElement('li');
    li.textContent = ingrediente;
    listaIngredientes.appendChild(li);
  }
  modal.appendChild(listaIngredientes);

  const preparoTitulo = document.createElement('h3');
  preparoTitulo.textContent = 'Modo de Preparo:';
  preparoTitulo.style.color = '#228B22';
  preparoTitulo.style.marginTop = '20px';
  modal.appendChild(preparoTitulo);

  const listaPreparo = document.createElement('ol');
  for (const passo of comida.preparo) {
    const li = document.createElement('li');
    li.textContent = passo;
    listaPreparo.appendChild(li);
  }
  modal.appendChild(listaPreparo);

  const btnFecharModal = document.createElement('button');
  btnFecharModal.textContent = 'Fechar';
  btnFecharModal.style.marginTop = '20px';
  btnFecharModal.style.padding = '10px 20px';
  btnFecharModal.style.backgroundColor = '#006400';
  btnFecharModal.style.color = '#fff';
  btnFecharModal.style.border = 'none';
  btnFecharModal.style.borderRadius = '5px';
  btnFecharModal.style.cursor = 'pointer';
  btnFecharModal.style.display = 'block';
  btnFecharModal.style.marginLeft = 'auto';
  btnFecharModal.style.marginRight = 'auto';

  btnFecharModal.addEventListener('click', () => {
    overlay.remove();
  });

  modal.appendChild(btnFecharModal);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}