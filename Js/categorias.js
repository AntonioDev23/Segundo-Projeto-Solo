import { receitasBolos } from './bolos.js';  // Importa as receitas de bolos

document.addEventListener('DOMContentLoaded', () => {
  const linkCategorias = document.querySelectorAll('.categories-btn');

  linkCategorias.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Se o menu já estiver aberto, não abre outro
      if (document.getElementById('menu-categorias')) return;

      const categorias = [
        { nome: "Bolos", emoji: "🍰" },
        { nome: "Massas", emoji: "🍝" },
        { nome: "Carnes", emoji: "🥩" },
        { nome: "Saladas", emoji: "🥗" },
        { nome: "Sobremesas", emoji: "🍫" },
        { nome: "Lanches", emoji: "🥪" },
        { nome: "Bebidas", emoji: "🥤" },
        { nome: "Café da manhã", emoji: "☕" },
        { nome: "Vegano", emoji: "🥦" },
        { nome: "Fitness", emoji: "💪" }
      ];

      // Cria o container do menu
      const menu = document.createElement('div');
      menu.id = 'menu-categorias';
      Object.assign(menu.style, {
        position: 'fixed',
        top: '0',
        right: '0',
        height: '100%',
        width: '260px',
        backgroundColor: '#fff',
        boxShadow: '-2px 0 10px rgba(0,0,0,0.2)',
        padding: '30px 10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '25px',
        zIndex: '9999',
        overflowY: 'auto',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
      });

      // Para cada categoria cria o item no menu
      categorias.forEach(cat => {
        const item = document.createElement('div');
        Object.assign(item.style, {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        });

        item.innerHTML = `
          <div style="
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background-color: #f3f3f3;
            font-size: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          ">${cat.emoji}</div>
          <span style="
            margin-top: 8px;
            font-size: 14px;
            color: #333;
            font-weight: bold;
          ">${cat.nome}</span>
        `;

        item.addEventListener('mouseover', () => {
          const emojiDiv = item.firstElementChild;
          emojiDiv.style.backgroundColor = '#ff6b00';
          emojiDiv.style.color = '#fff';
          emojiDiv.style.transform = 'scale(1.1)';
          emojiDiv.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        });

        item.addEventListener('mouseout', () => {
          const emojiDiv = item.firstElementChild;
          emojiDiv.style.backgroundColor = '#f3f3f3';
          emojiDiv.style.color = '#000';
          emojiDiv.style.transform = 'scale(1)';
          emojiDiv.style.boxShadow = 'none';
        });

        // Quando clicar numa categoria, verifica se é "Bolos"
        item.addEventListener('click', () => {
          if (cat.nome === 'Bolos') {
            mostrarReceitasBolos(receitasBolos, menu);
          } else {
            alert(`Categoria "${cat.nome}" ainda não implementada.`);
          }
        });

        menu.appendChild(item);
      });

      // Botão para fechar o menu
      const fechar = document.createElement('button');
      fechar.textContent = '×';
      Object.assign(fechar.style, {
        position: 'absolute',
        top: '10px',
        left: '15px',
        fontSize: '28px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#ff6b00'
      });

      fechar.addEventListener('click', () => {
        menu.style.transform = 'translateX(100%)';
        setTimeout(() => menu.remove(), 300);
      });

      menu.appendChild(fechar);
      document.body.appendChild(menu);

      // Animação para abrir o menu
      requestAnimationFrame(() => {
        menu.style.transform = 'translateX(0)';
      });
    });
  });
});

// Função que mostra as receitas de bolos dentro do menu (ou em outro lugar que quiser)
function mostrarReceitasBolos(receitas, menu) {
  // Primeiro limpa receitas antigas, se houver
  const receitasContainerAntigo = document.getElementById('receitas-bolos-container');
  if (receitasContainerAntigo) {
    receitasContainerAntigo.remove();
  }

  // Cria um container para as receitas
  const container = document.createElement('div');
  container.id = 'receitas-bolos-container';
  container.style.marginTop = '20px';
  container.style.width = '100%';
  container.style.maxHeight = '300px';
  container.style.overflowY = 'auto';
  container.style.borderTop = '1px solid #ccc';
  container.style.paddingTop = '15px';

  // Adiciona um título
  const titulo = document.createElement('h3');
  titulo.textContent = 'Receitas de Bolos';
  titulo.style.textAlign = 'center';
  titulo.style.color = '#ff6b00';
  container.appendChild(titulo);

  // Lista as receitas (assumindo que receitas é um array de objetos com nome e descrição)
  receitas.forEach(receita => {
    const receitaItem = document.createElement('div');
    receitaItem.style.padding = '8px 10px';
    receitaItem.style.borderBottom = '1px solid #eee';

    receitaItem.innerHTML = `
      <strong>${receita.nome}</strong><br>
      <small>${receita.descricao || ''}</small>
    `;

    container.appendChild(receitaItem);
  });

  menu.appendChild(container);
}
