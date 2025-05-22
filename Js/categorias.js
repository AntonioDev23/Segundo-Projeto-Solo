document.addEventListener('DOMContentLoaded', () => {
  const linkCategorias = document.querySelector('a[href="#categories"]');

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
    menu.style.position = 'fixed';
    menu.style.top = '0';
    menu.style.left = '0';
    menu.style.height = '100%';
    menu.style.width = '260px';
    menu.style.backgroundColor = '#fff';
    menu.style.boxShadow = '2px 0 10px rgba(0, 0, 0, 0.2)';
    menu.style.padding = '30px 10px';
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    menu.style.alignItems = 'center';
    menu.style.gap = '25px';
    menu.style.zIndex = '9999';
    menu.style.transition = 'transform 0.3s ease';
    menu.style.overflowY = 'auto';

    categorias.forEach(cat => {
      const item = document.createElement('div');
      item.style.display = 'flex';
      item.style.flexDirection = 'column';
      item.style.alignItems = 'center';
      item.style.cursor = 'pointer';
      item.style.transition = 'all 0.3s ease';

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
        ">${cat.nome}</span>
      `;

      item.addEventListener('mouseover', () => {
        item.firstElementChild.style.backgroundColor = '#ff6b00';
        item.firstElementChild.style.color = '#fff';
        item.firstElementChild.style.transform = 'scale(1.1)';
        item.firstElementChild.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
      });

      item.addEventListener('mouseout', () => {
        item.firstElementChild.style.backgroundColor = '#f3f3f3';
        item.firstElementChild.style.color = '#000';
        item.firstElementChild.style.transform = 'scale(1)';
        item.firstElementChild.style.boxShadow = 'none';
      });

      menu.appendChild(item);
    });

    // Botão de fechar
    const fechar = document.createElement('button');
    fechar.textContent = '×';
    fechar.style.position = 'absolute';
    fechar.style.top = '10px';
    fechar.style.right = '15px';
    fechar.style.fontSize = '28px';
    fechar.style.background = 'none';
    fechar.style.border = 'none';
    fechar.style.cursor = 'pointer';
    fechar.style.color = '#ff6b00';

    fechar.addEventListener('click', () => menu.remove());

    menu.appendChild(fechar);
    document.body.appendChild(menu);
  });
});
