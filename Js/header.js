// ===========================
// 1. MENU HAMBÚRGUER (RESPONSIVO)
// ===========================

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  document.querySelector('.nav-overlay').classList.toggle('active');
});

// ===========================
// 2. FILTRO: BOTÃO DE ABRIR/FECHAR DROPDOWN
// ===========================

const filterToggle = document.getElementById('filterToggle');
const filterDropdown = document.getElementById('filterDropdown');

filterToggle.addEventListener('click', () => {
  filterDropdown.classList.toggle('show');
});

// ===========================
// 3. FILTRO: CHIPS DE SELEÇÃO (DIFICULDADE E DIETA)
// ===========================

const filterChips = document.querySelectorAll('.filter-chip');

filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    chip.classList.toggle('active');
  });
});

// ===========================
// 4. FILTRO: APLICAR FILTROS (VISUAL SOMENTE - NÃO ESCONDE RECEITAS)
// ===========================

const applyFiltersBtn = document.getElementById('applyFilters');

applyFiltersBtn.addEventListener('click', () => {
  filterChips.forEach(chip => chip.classList.remove('active'));
  document.getElementById('filterTime').value = 'all';
  filterDropdown.classList.remove('show');
});

// ===========================
// 5. BARRA DE BUSCA
// ===========================

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  recipeCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
    card.style.display = matchesSearch ? 'block' : 'none';
  });
});

// ===========================
// 6. MENU DE CHECKBOXES (ALTERNATIVO)
// ===========================

document.getElementById("filter-btn").addEventListener("click", function () {
  const filterOptions = document.getElementById("filter-options");
  filterOptions.style.display = filterOptions.style.display === "block" ? "none" : "block";
});

document.getElementById("apply-filters").addEventListener("click", function () {
  const checkboxes = document.querySelectorAll(".filter-options input[type='checkbox']");

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      console.log(checkbox.id + " está selecionado");
    }
  });

  document.getElementById("filter-options").style.display = "none";
  checkboxes.forEach(checkbox => checkbox.checked = false);
});

// ===========================
// 7. AJUSTE DA BARRA DE BUSCA (MOBILE)
// ===========================

function moverBuscaParaMobile() {
  const largura = window.innerWidth;
  const barraBusca = document.querySelector('.search-wrapper');
  const menuMobile = document.getElementById('mobileNav');
  const headerContainer = document.querySelector('.header-container');

  if (!barraBusca || !menuMobile || !headerContainer) return;

  if (largura <= 768 && !menuMobile.contains(barraBusca)) {
    menuMobile.prepend(barraBusca);
  } else if (largura > 768 && !headerContainer.contains(barraBusca)) {
    headerContainer.insertBefore(barraBusca, headerContainer.children[2]);
  }
}

window.addEventListener('load', moverBuscaParaMobile);
window.addEventListener('resize', moverBuscaParaMobile);
