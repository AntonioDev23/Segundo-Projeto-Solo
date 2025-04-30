// ===========================
// 1. MENU HAMBÚRGUER (RESPONSIVO)
// ===========================

// Seleciona o botão do menu e o próprio menu
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

// Alterna a visibilidade do menu quando o botão é clicado
navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});


// ===========================
// 2. FILTRO: BOTÃO DE ABRIR/FECHAR DROPDOWN
// ===========================

// Seleciona o botão que abre o menu de filtros e o menu em si
const filterToggle = document.getElementById('filterToggle');
const filterDropdown = document.getElementById('filterDropdown');

// Alterna a exibição do menu de filtros ao clicar no botão
filterToggle.addEventListener('click', () => {
  filterDropdown.classList.toggle('show');
});


// ===========================
// 3. FILTRO: CHIPS DE SELEÇÃO (DIFICULDADE E DIETA)
// ===========================

// Seleciona todos os chips de filtro
const filterChips = document.querySelectorAll('.filter-chip');

// Permite selecionar ou desmarcar os chips ao clicar
filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    chip.classList.toggle('selected');
  });
});


// ===========================
// 4. FILTRO: APLICAR FILTROS DE CHIPS E TEMPO
// ===========================

// Botão de aplicar filtros
const applyFiltersBtn = document.getElementById('applyFilters');

// Seleciona todos os cards de receitas
const recipeCards = document.querySelectorAll('.recipe-card');

// Quando o botão for clicado, aplica os filtros selecionados
applyFiltersBtn.addEventListener('click', () => {
  // Pega chips de dificuldade selecionados
  const selectedDifficulties = Array.from(document.querySelectorAll('.filter-chip[data-difficulty].selected'))
    .map(chip => chip.dataset.difficulty);

  // Pega chips de dieta selecionados
  const selectedDiets = Array.from(document.querySelectorAll('.filter-chip[data-diet].selected'))
    .map(chip => chip.dataset.diet);

  // Pega o tempo selecionado
  const selectedTime = document.getElementById('filterTime').value;

  // Verifica cada card se corresponde aos filtros selecionados
  recipeCards.forEach(card => {
    const difficulty = card.dataset.difficulty;
    const diet = card.dataset.diet;
    const time = parseInt(card.dataset.time);

    // Lógica para comparar os filtros com os dados dos cards
    const matchesDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.includes('all') || selectedDifficulties.includes(difficulty);
    const matchesDiet = selectedDiets.length === 0 || selectedDiets.includes('all') || selectedDiets.includes(diet);
    const matchesTime = selectedTime === 'all' ||
      (selectedTime === '30min' && time <= 30) ||
      (selectedTime === '60min' && time <= 60);

    // Mostra ou oculta o card de acordo com os filtros
    if (matchesDifficulty && matchesDiet && matchesTime) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  // Fecha o dropdown e limpa os filtros
  filterDropdown.classList.remove('show');
  filterChips.forEach(chip => chip.classList.remove('selected'));
  document.getElementById('filterTime').value = 'all';
});


// ===========================
// 5. BARRA DE BUSCA
// ===========================

// Seleciona o campo de busca
const searchInput = document.getElementById('searchInput');

// Evento para filtrar cards conforme digita
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase(); // Termo em minúsculas

  recipeCards.forEach(card => {
    // Pega o título e descrição do card
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();

    // Verifica se o termo buscado está presente
    const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);

    // Mostra ou oculta de acordo com a busca
    card.style.display = matchesSearch ? 'block' : 'none';
  });
});


// ===========================
// 6. MENU DE CHECKBOXES (ALTERNATIVO)
// ===========================

// Alterna a exibição das opções de filtro com checkboxes
document.getElementById("filter-btn").addEventListener("click", function() {
  const filterOptions = document.getElementById("filter-options");
  filterOptions.style.display = filterOptions.style.display === "block" ? "none" : "block";
});

// Aplica os filtros e mostra os IDs dos checkboxes selecionados
document.getElementById("apply-filters").addEventListener("click", function() {
  const checkboxes = document.querySelectorAll(".filter-options input[type='checkbox']");

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      console.log(checkbox.id + " está selecionado"); // Apenas exibe no console
    }
  });

  // Fecha o menu e limpa os checkboxes
  document.getElementById("filter-options").style.display = "none";
  checkboxes.forEach(checkbox => checkbox.checked = false);
});
