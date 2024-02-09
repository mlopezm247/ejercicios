window.onload = function () {

  window.oncontextmenu = function(event) {

     event.preventDefault();

      var xNavegador = event.clientX;
      var yPantalla = event.clientY;


      menu.style.top = yPantalla+"px";
      menu.style.left = xNavegador+"px";
      menu.display = "block";
      menu.innerHTML="AQUI EL MENU";
      
      console.log(xNavegador);

  };

 
};


