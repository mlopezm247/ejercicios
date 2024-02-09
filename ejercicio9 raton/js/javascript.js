window.onload = function () {
  var caja = document.getElementById('caja');
  var info = document.getElementById('info');

  caja.addEventListener('mousemove', function (event) {
      var xCaja = event.clientX - caja.getBoundingClientRect().left;
      var xNavegador = event.clientX;
      var xPantalla = event.screenX;

      info.innerHTML = 'Posición en la caja: ' + xCaja + 'px<br>' +
                       'Posición en el navegador: ' + xNavegador + 'px<br>' +
                       'Posición en la pantalla: ' + xPantalla + 'px';
  });

  caja.addEventListener('mouseout', function () {
      info.innerHTML = '';
  });
};


//hacer que cuando se ponsicione en la caja que esta en html, nos nuestre la informacion de la posicion en el eje x con respecto a la caja, el navegador y la patalla

//evento de mouseover sobre el div
//event.screenx
     //.offsetX
     //.clickX
//innerHTML=""
//x eje vertical
//y eje horizontal