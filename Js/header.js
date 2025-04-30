// Menu responsivo
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Mostrar/ocultar filtros
const filterToggle = document.getElementById('filterToggle');
const filterDropdown = document.getElementById('filterDropdown');

filterToggle.addEventListener('click', () => {
  filterDropdown.classList.toggle('show');
});

// Filtro por dificuldade e dieta
const filterChips = document.querySelectorAll('.filter-chip');

filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    chip.classList.toggle('selected');
  });
});

// Aplicar filtros
const applyFiltersBtn = document.getElementById('applyFilters');
const recipeCards = document.querySelectorAll('.recipe-card');

applyFiltersBtn.addEventListener('click', () => {
  const selectedDifficulties = Array.from(document.querySelectorAll('.filter-chip[data-difficulty].selected'))
    .map(chip => chip.dataset.difficulty);
  const selectedDiets = Array.from(document.querySelectorAll('.filter-chip[data-diet].selected'))
    .map(chip => chip.dataset.diet);
  const selectedTime = document.getElementById('filterTime').value;

  recipeCards.forEach(card => {
    const difficulty = card.dataset.difficulty;
    const diet = card.dataset.diet;
    const time = parseInt(card.dataset.time);

    const matchesDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.includes('all') || selectedDifficulties.includes(difficulty);
    const matchesDiet = selectedDiets.length === 0 || selectedDiets.includes('all') || selectedDiets.includes(diet);
    const matchesTime = selectedTime === 'all' ||
      (selectedTime === '30min' && time <= 30) ||
      (selectedTime === '60min' && time <= 60);

    if (matchesDifficulty && matchesDiet && matchesTime) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  filterDropdown.classList.remove('show');
});

// Busca
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

// Atualizar o ano no footer
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();
