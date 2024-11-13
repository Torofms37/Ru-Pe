document.getElementById('portfolioBtn').addEventListener('click', function() {
  const mainSection = document.getElementById('mainSection');
  const portfolioSection = document.getElementById('portfolioSection');

  // Oculta mainSection y muestra portfolioSection
  mainSection.style.display = 'none';
  portfolioSection.style.display = 'block';
});

// Botón de cerrar para volver a mostrar el mainSection
document.getElementById('close').addEventListener('click', function() {
  const mainSection = document.getElementById('mainSection');
  const portfolioSection = document.getElementById('portfolioSection');

  // Muestra mainSection y oculta portfolioSection
  mainSection.style.display = 'block';
  portfolioSection.style.display = 'none';
});
