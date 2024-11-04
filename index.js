//Contenido principal: nombre, info, img y redes
const principalC = document.getElementById('principal');

//Contenido de portafolio
const portfolio = document.getElementById('portfolio');

//cuando el usuario toque show button, se muestra el contenido del portafolio y se oculta el principal
const showButton = document.getElementById('portafolio');
showButton.addEventListener('click', () => {
  //se llama a la variable que consigue del documento y se le dice que el estilo a mostrar, será o bien block (mostrar) o none (ocultar)
  portfolio.style.display = 'block';
  principalC.style.display = 'none';
  //en este caso, el portafolio es el contenido que se muestra, por lo que se oculta el principal
});

const closeButton = document.getElementById('close');
closeButton.addEventListener('click', () => {
  //se llama a la variable que consigue del documento y se le dice que el estilo a mostrar, será o bien block (mostrar) o none (ocultar)
  portfolio.style.display = 'none';
  principalC.style.display = 'block';
  //en este caso, el principal es el contenido que se muestra, por lo que se oculta el portafolio
});

document.getElementById('portafolio').addEventListener('click', function() {
  const container = document.querySelector('.container');
  container.innerHTML = `
      <ul>
          ${Array.from({length: 50}, (_, i) => `<li>Elemento ${i + 1}</li>`).join('')}
      </ul>
  `;
});