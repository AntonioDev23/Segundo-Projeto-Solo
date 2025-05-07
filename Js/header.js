// Espera todo o HTML da página carregar antes de executar o código JS
document.addEventListener('DOMContentLoaded', function() {

  // ===========================
  // 1. MENU HAMBÚRGUER (RESPONSIVO)
  // ===========================
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const navOverlay = document.querySelector('.nav-overlay');

  if (navToggle && mobileMenu && navOverlay) {
    navToggle.addEventListener('click', function(e) {
      e.preventDefault();
      mobileMenu.classList.toggle('active');
      navOverlay.classList.toggle('active');
      this.classList.toggle('is-active');
    });

    navOverlay.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      navOverlay.classList.remove('active');
      navToggle.classList.remove('is-active');
    });
  }

  // ===========================
  // 2. FILTRO: BOTÃO DE ABRIR/FECHAR DROPDOWN
  // ===========================
  const filterToggle = document.getElementById('filterToggle');
  const filterDropdown = document.getElementById('filterDropdown');

  if (filterToggle && filterDropdown) {
    filterToggle.addEventListener('click', function(e) {
      e.stopImmediatePropagation();
      e.preventDefault();
      
      // Fecha o menu mobile se estiver aberto
      if (mobileMenu) mobileMenu.classList.remove('active');
      if (navOverlay) navOverlay.classList.remove('active');
      
      // Alterna o dropdown
      filterDropdown.classList.toggle('show');
      
      // Posicionamento garantido
      filterDropdown.style.display = 'block';
      filterDropdown.style.position = 'absolute';
      filterDropdown.style.top = '100%';
      filterDropdown.style.right = '0';
      filterDropdown.style.zIndex = '9999';
    });

    document.addEventListener('click', function(e) {
      if (!filterDropdown.contains(e.target) && e.target !== filterToggle) {
        filterDropdown.classList.remove('show');
      }
    });
  }

  // ===========================
  // 3. FILTRO: CHIPS DE SELEÇÃO
  // ===========================
  const filterChips = document.querySelectorAll('.filter-chip');
  filterChips.forEach(chip => {
    chip.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });

  // ===========================
  // 4. FILTRO: APLICAR FILTROS
  // ===========================
  const applyFiltersBtn = document.getElementById('applyFilters');
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', function() {
      filterChips.forEach(chip => chip.classList.remove('active'));
      document.getElementById('filterTime').value = 'all';
      if (filterDropdown) filterDropdown.classList.remove('show');
    });
  }

  // ===========================
  // 5. BARRA DE BUSCA
  // ===========================
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const recipeCards = document.querySelectorAll('.recipe-card'); // Adicione esta linha
      
      recipeCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        card.style.display = (title.includes(searchTerm)) || 
                            (description.includes(searchTerm)) ? 'block' : 'none';
      });
    });
  }

  // ===========================
  // 6. MENU DE CHECKBOXES (OPCIONAL)
  // ===========================
  const filterBtn = document.getElementById('filter-btn');
  const filterOptions = document.getElementById('filter-options');
  
  if (filterBtn && filterOptions) {
    filterBtn.addEventListener('click', function() {
      filterOptions.style.display = 
        filterOptions.style.display === 'block' ? 'none' : 'block';
    });
  }
});