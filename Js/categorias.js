document.addEventListener('DOMContentLoaded', () => {
  const linkCategorias = document.querySelectorAll('.categories-btn');

  linkCategorias.forEach(link => {
    link.addEventListener('click', (e) => {
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
      menu.style.right = '0';
      menu.style.height = '100%';
      menu.style.width = '260px';
      menu.style.backgroundColor = '#fff';
      menu.style.boxShadow = '-2px 0 10px rgba(0, 0, 0, 0.2)';
      menu.style.padding = '30px 10px';
      menu.style.display = 'flex';
      menu.style.flexDirection = 'column';
      menu.style.alignItems = 'center';
      menu.style.gap = '25px';
      menu.style.zIndex = '9999';
      menu.style.overflowY = 'auto';

      // Para transição suave: iniciar fora da tela
      menu.style.transform = 'translateX(100%)';
      menu.style.transition = 'transform 0.3s ease';

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
            font-weight: bold;
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

        item.addEventListener('click', async () => {
          // Fecha o menu com animação
          menu.style.transform = 'translateX(100%)';
          setTimeout(() => menu.remove(), 300);

          // Importa e chama o módulo conforme categoria clicada
          if (cat.nome === 'Bolos') {
            const bolosModule = await import('../js2/bolos.js');
            bolosModule.mostrarBolos();
          }

          if (cat.nome === 'Massas') {
            const massasModule = await import('../js2/massas.js');
            massasModule.mostrarMassas();
          }

          if (cat.nome === 'Carnes') {
            const carnesModule = await import('../js2/carnes.js');
            carnesModule.mostrarCarnes();
          }

          if (cat.nome === 'Saladas') {
            const saladasModule = await import('../js2/saladas.js');
            saladasModule.mostrarSaladas();
          }

          if (cat.nome === 'Sobremesas') {
            const sobremesasModule = await import('../js2/sobremesas.js');
            sobremesasModule.mostrarSobremesas();
          }





          
        });

        menu.appendChild(item);
      });

      // Botão de fechar
      const fechar = document.createElement('button');
      fechar.textContent = '×';
      fechar.style.position = 'absolute';
      fechar.style.top = '10px';
      fechar.style.left = '15px';
      fechar.style.fontSize = '28px';
      fechar.style.background = 'none';
      fechar.style.border = 'none';
      fechar.style.cursor = 'pointer';
      fechar.style.color = '#ff6b00';

      fechar.addEventListener('click', () => {
        // animação para fechar
        menu.style.transform = 'translateX(100%)';
        setTimeout(() => menu.remove(), 300);
      });

      menu.appendChild(fechar);
      document.body.appendChild(menu);

      // animação para abrir (depois de appendChild)
      requestAnimationFrame(() => {
        menu.style.transform = 'translateX(0)';
      });
    });
  });
});
