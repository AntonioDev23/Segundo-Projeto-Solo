
// Espera todo o HTML da página carregar antes de executar o código JS
document.addEventListener('DOMContentLoaded', function () {
const filterChips = document.querySelectorAll('.filter-chip');
const recipeCards = document.querySelectorAll('.recipe-card');

  // ===========================
  // 1. MENU HAMBÚRGUER (RESPONSIVO) - VERSÃO ATUALIZADA
  // ===========================
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.getElementById('mobileMenu'); // Nova div que você vai criar
  const navOverlay = document.querySelector('.nav-overlay');

  // Alterna o menu mobile e o overlay
  navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
    
    // Opcional: Animação do ícone hambúrguer para "X"
    navToggle.classList.toggle('is-active');
  });

  // Fechar o menu ao clicar no overlay
  navOverlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    navToggle.classList.remove('is-active');
  });

    // ===========================
  // 2. FILTRO: BOTÃO DE ABRIR/FECHAR DROPDOWN - VERSÃO CORRIGIDA
  // ===========================
  const filterToggle = document.getElementById('filterToggle');
  const filterDropdown = document.getElementById('filterDropdown');

  if (filterToggle && filterDropdown) {
    filterToggle.addEventListener('click', function (e) {
      e.stopImmediatePropagation();
      e.preventDefault();

      // Alterna a classe .show (usa CSS pra animar e exibir)
      filterDropdown.classList.toggle('show');
      filterToggle.classList.toggle('active'); // Se quiser estilizar o botão
    });

    // Fecha o dropdown se clicar fora dele e do botão
    document.addEventListener('click', function (e) {
      if (!filterDropdown.contains(e.target) && !filterToggle.contains(e.target)) {
        filterDropdown.classList.remove('show');
        filterToggle.classList.remove('active');
      }
    });
  }


  // ===========================
  // 4. FILTRO: APLICAR FILTROS (VISUAL SOMENTE - NÃO ESCONDE RECEITAS)
  // ===========================
  const applyFiltersBtn = document.getElementById('applyFilters');

  // Quando o botão for clicado, apenas limpa filtros e fecha o menu
  applyFiltersBtn.addEventListener('click', () => {
    // Limpa visualmente os chips selecionados
    filterChips.forEach(chip => chip.classList.remove('active'));

    // Reseta o tempo para "all"
    document.getElementById('filterTime').value = 'all';

    // Fecha o menu de filtros
    filterDropdown.classList.remove('show');

    // Nenhuma receita será escondida nesta etapa
  });

  // ===========================
  // 5. BARRA DE BUSCA
  // ===========================
  const searchInput = document.getElementById('searchInput');

  // Evento que dispara ao digitar na barra
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase(); // Converte para minúsculas

    recipeCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();

      const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);

      // Mostra ou oculta os cards com base na busca
      card.style.display = matchesSearch ? 'block' : 'none';
    });
  });

  // ===========================
  // 6. MENU DE CHECKBOXES (ALTERNATIVO)
  // ===========================
  document.getElementById("filter-btn").addEventListener("click", function() {
    const filterOptions = document.getElementById("filter-options");
    filterOptions.style.display = filterOptions.style.display === "block" ? "none" : "block";
  });

  // Aplica filtros baseados nos checkboxes (aqui só exibe no console)
  document.getElementById("apply-filters").addEventListener("click", function() {
    const checkboxes = document.querySelectorAll(".filter-options input[type='checkbox']");

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        console.log(checkbox.id + " está selecionado");
      }
    });

    // Fecha o menu e limpa os checkboxes
    document.getElementById("filter-options").style.display = "none";
    checkboxes.forEach(checkbox => checkbox.checked = false);
  });

});
