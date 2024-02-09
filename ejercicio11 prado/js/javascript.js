window.onload = function () {
  event.preventDefault();
   defecto=false;
  menu.addEventListener('click', function (event) {

    var xNavegador = event.clientX;
      var yPantalla = event.clientY;

      var nuevoElemento = document.createElement("div");
      menu.appendChild(nuevoElemento);

      nuevoElemento.style.position = "absolute";
      nuevoElemento.style.top = yPantalla+"px";
      nuevoElemento.style.left = xNavegador+"px";

      if (defecto==true) {
          nuevoElemento.innerHTML="🐱‍👤";
          defecto=false
          console.log("entra a"); 
      }else{
        nuevoElemento.innerHTML="🥶";
        defecto=true
        console.log("entra o"); 
      }
    
      
      
      console.log(xNavegador);


});


};


