// ===========================
// 1. MENU HAMBÚRGUER (RESPONSIVO)
// ===========================

// Botão que abre o menu
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

// Alterna o menu visível/invisível quando o botão é clicado
navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});


// ===========================
// 2. FILTRO: BOTÃO DE ABRIR/FECHAR DROPDOWN
// ===========================

// Botão que abre o menu de filtros
const filterToggle = document.getElementById('filterToggle');
const filterDropdown = document.getElementById('filterDropdown');

// Alterna o menu de filtros visível/invisível
filterToggle.addEventListener('click', () => {
  filterDropdown.classList.toggle('show');
});


// ===========================
// 3. FILTRO: CHIPS DE SELEÇÃO (DIFICULDADE E DIETA)
// ===========================

// Seleciona todos os botões de opção
const filterChips = document.querySelectorAll('.filter-chip');

// Adiciona ou remove a classe .active ao clicar (para mudar a cor)
filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    chip.classList.toggle('active');
  });
});


// ===========================
// 4. FILTRO: APLICAR FILTROS DE CHIPS E TEMPO
// ===========================

// Botão de aplicar filtros
const applyFiltersBtn = document.getElementById('applyFilters');

// Todos os cards de receitas da tela
const recipeCards = document.querySelectorAll('.recipe-card');

// Quando o botão for clicado, aplica os filtros
applyFiltersBtn.addEventListener('click', () => {
  // Chips de dificuldade selecionados
  const selectedDifficulties = Array.from(document.querySelectorAll('.filter-chip[data-difficulty].active'))
    .map(chip => chip.dataset.difficulty);

  // Chips de dieta selecionados
  const selectedDiets = Array.from(document.querySelectorAll('.filter-chip[data-diet].active'))
    .map(chip => chip.dataset.diet);

  // Tempo selecionado (dropdown)
  const selectedTime = document.getElementById('filterTime').value;

  // Para cada receita, verifica se atende os filtros
  recipeCards.forEach(card => {
    const difficulty = card.dataset.difficulty;
    const diet = card.dataset.diet;
    const time = parseInt(card.dataset.time);

    const matchesDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.includes('all') || selectedDifficulties.includes(difficulty);
    const matchesDiet = selectedDiets.length === 0 || selectedDiets.includes('all') || selectedDiets.includes(diet);
    const matchesTime = selectedTime === 'all' ||
      (selectedTime === '30min' && time <= 30) ||
      (selectedTime === '60min' && time <= 60);

    // Mostra ou oculta o card com base nos filtros
    card.style.display = (matchesDifficulty && matchesDiet && matchesTime) ? 'block' : 'none';
  });

  // Fecha o menu de filtros
  filterDropdown.classList.remove('show');

  // Limpa a seleção visual dos chips
  filterChips.forEach(chip => chip.classList.remove('active'));

  // Reseta o tempo para "all"
  document.getElementById('filterTime').value = 'all';
});


// ===========================
// 5. BARRA DE BUSCA
// ===========================

// Campo de busca
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

// Botão que abre/fecha o menu de checkboxes
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
