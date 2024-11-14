const mainSection = document.getElementById('mainSection');
const portfolioSection = document.getElementById('portfolioSection');
// Muestra mainSection y oculta portfolioSection

document.getElementById('portfolioBtn').addEventListener('click', function() {
  if (this.innerHTML === 'PORTAFOLIO') {
    this.innerHTML = 'INICIO';
    mainSection.style.display = 'none';
    portfolioSection.style.display = 'block';
  } else {
    this.innerHTML = 'PORTAFOLIO';
    mainSection.style.display = 'block';
    portfolioSection.style.display = 'none';
  }
});