
window.onload= function () {
  const contadorElement = document.getElementById("contador");
  let contador = 1;

  function incrementarContador() {
      contadorElement.innerHTML = contador;

      if (contador === 30) {
          contadorElement.innerHTML = "BOOM";
          clearInterval(intervalo);
      }

      contador++;
  }

  const intervalo = setInterval(incrementarContador, 1000);
};