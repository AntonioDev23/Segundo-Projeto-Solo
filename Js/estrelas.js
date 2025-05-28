export function criarEstrelas(container, notaAtual = 0, aoMudarNota = null) {
  container.innerHTML = ''; // Limpa antes

  for (let i = 1; i <= 5; i++) {
    const estrela = document.createElement('span');
    estrela.textContent = i <= notaAtual ? '★' : '☆';
    estrela.style.fontSize = '2rem';
    estrela.style.cursor = 'pointer';
    estrela.dataset.valor = i;

    estrela.addEventListener('click', () => {
      const novaNota = i;
      criarEstrelas(container, novaNota, aoMudarNota); // Atualiza visual
      if (aoMudarNota) aoMudarNota(novaNota); // Chama função de callback
    });

    container.appendChild(estrela);
  }
}
