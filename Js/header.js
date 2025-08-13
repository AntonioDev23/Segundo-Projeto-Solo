
document.addEventListener('DOMContentLoaded', function () {
  const filterChips = document.querySelectorAll('.filter-chip');
  const recipeCards = document.querySelectorAll('.recipe-card');

  // ===========================
  // 1. MENU HAMBÚRGUER (RESPONSIVO)
  // ===========================
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const navOverlay = document.querySelector('.nav-overlay');

  // Alterna o menu mobile e o overlay
  navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
    navToggle.classList.toggle('is-active');
  });

  // Fecha o menu ao clicar no overlay
  navOverlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    navToggle.classList.remove('is-active');
  });

  // Fecha o menu mobile ao clicar em qualquer link
  const mobileMenuLinks = document.querySelectorAll('#mobileMenu a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Fecha o menu
      mobileMenu.classList.remove('active');
      navOverlay.classList.remove('active');
      navToggle.classList.remove('is-active');

      // Se for o link de "Nossas Receitas", simula clique do menu desktop
      if (link.dataset.id === 'nossas-receitas') {
        e.preventDefault();
        setTimeout(() => {
          const desktopLink = document.querySelector('.nav-link[data-id="nossas-receitas"]');
          desktopLink?.click();
        }, 50);
      }
    });
  });

  // ===========================
  // 2. FILTRO: BOTÃO DE ABRIR/FECHAR DROPDOWN
  // ===========================
  const filterToggle = document.getElementById('filterToggle');
  const filterDropdown = document.getElementById('filterDropdown');

  if (filterToggle && filterDropdown) {
    filterToggle.addEventListener('click', function (e) {
      e.stopImmediatePropagation();
      e.preventDefault();
      filterDropdown.classList.toggle('show');
      filterToggle.classList.toggle('active');
    });

    document.addEventListener('click', function (e) {
      if (!filterDropdown.contains(e.target) && !filterToggle.contains(e.target)) {
        filterDropdown.classList.remove('show');
        filterToggle.classList.remove('active');
      }
    });
  }

  // ===========================
  // 3. FILTRO: APLICAR FILTROS VISUAL
  // ===========================
  const applyFiltersBtn = document.getElementById('applyFilters');
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', () => {
      filterChips.forEach(chip => chip.classList.remove('active'));
      document.getElementById('filterTime').value = 'all';
      filterDropdown.classList.remove('show');
    });
  }

  // ===========================
  // 4. FILTRO: BARRA DE BUSCA
  // ===========================
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      recipeCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
        card.style.display = matchesSearch ? 'block' : 'none';
      });
    });
  }

  // ===========================
  // 5. MENU DE CHECKBOXES (ALTERNATIVO)
  // ===========================
  document.getElementById("filter-btn").addEventListener("click", function() {
    const filterOptions = document.getElementById("filter-options");
    filterOptions.style.display = filterOptions.style.display === "block" ? "none" : "block";
  });

  document.getElementById("apply-filters").addEventListener("click", function() {
    const checkboxes = document.querySelectorAll(".filter-options input[type='checkbox']");
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) console.log(checkbox.id + " está selecionado");
    });
    document.getElementById("filter-options").style.display = "none";
    checkboxes.forEach(checkbox => checkbox.checked = false);
  });
});
