document.addEventListener('DOMContentLoaded', () => {
  const linkCategorias = document.querySelector('a[href="#categories"]');

  if (!linkCategorias) return; // Sai se não achar o link (segurança)

  linkCategorias.addEventListener('click', (e) => {
    e.preventDefault();

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

    const menu = document.createElement('div');
    menu.id = 'menu-categorias';
    Object.assign(menu.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      height: '100%',
      width: '260px',
      backgroundColor: '#fff',
      boxShadow: '2px 0 10px rgba(0, 0, 0, 0.2)',
      padding: '50px 10px 30px 10px', // topo maior para o botão fechar
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '25px',
      zIndex: '9999',
      overflowY: 'auto',
      transition: 'transform 0.3s ease',
    });

    categorias.forEach(cat => {
      const item = document.createElement('div');
      Object.assign(item.style, {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      });
      item.setAttribute('tabindex', '0'); // para foco acessível

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
          color: black;
        ">${cat.emoji}</div>
        <span style="
          margin-top: 8px;
          font-size: 14px;
          color: #333;
        ">${cat.nome}</span>
      `;

      const emojiDiv = item.firstElementChild;
      const nomeSpan = item.lastElementChild;

      item.addEventListener('mouseover', () => {
        emojiDiv.style.backgroundColor = '#ff6b00'; // sua cor principal
        emojiDiv.style.color = '#fff';
        emojiDiv.style.transform = 'scale(1.1)';
        emojiDiv.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        nomeSpan.style.color = '#ff6b00';
      });

      item.addEventListener('mouseout', () => {
        emojiDiv.style.backgroundColor = '#f3f3f3';
        emojiDiv.style.color = 'black';
        emojiDiv.style.transform = 'scale(1)';
        emojiDiv.style.boxShadow = 'none';
        nomeSpan.style.color = '#333';
      });

      item.addEventListener('focus', () => { // para teclado
        emojiDiv.style.backgroundColor = '#ff6b00';
        emojiDiv.style.color = '#fff';
        emojiDiv.style.transform = 'scale(1.1)';
        emojiDiv.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        nomeSpan.style.color = '#ff6b00';
      });

      item.addEventListener('blur', () => {
        emojiDiv.style.backgroundColor = '#f3f3f3';
        emojiDiv.style.color = 'black';
        emojiDiv.style.transform = 'scale(1)';
        emojiDiv.style.boxShadow = 'none';
        nomeSpan.style.color = '#333';
      });

      menu.appendChild(item);
    });

    // Botão de fechar
    const fechar = document.createElement('button');
    fechar.textContent = '×';
    Object.assign(fechar.style, {
      position: 'absolute',
      top: '10px',
      right: '15px',
      fontSize: '28px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#ff6b00',
      padding: '0',
      lineHeight: '1',
    });

    fechar.addEventListener('click', () => menu.remove());

    menu.appendChild(fechar);
    document.body.appendChild(menu);
  });
});
