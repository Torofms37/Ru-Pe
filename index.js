document.getElementById('portafolio').addEventListener('click', function() {
  const container = document.querySelector('.container');
  container.innerHTML = `
      <ul>
          ${Array.from({length: 4}, (_, i) => `<li>Elemento ${i + 1}</li>`).join('')}
      </ul>
  `;
});



document.getElementById('portafolio').addEventListener('click', function() {
  document.getElementById('original-content').style.display = 'none';
  document.getElementById('portafolio').style.display = 'block';
  document.getElementById('back-btn').style.display = 'block';
});

document.getElementById('back-btn').addEventListener('click', function() {
  document.getElementById('original-content').style.display = 'block';
  document.getElementById('portafolio').style.display = 'none';
  document.getElementById('back-btn').style.display = 'none';
});
