window.onload = function () {

  event.preventDefault();
   defecto=false;
 menu.addEventListener("click",function () {

  
    var xNavegador = event.clientX;
    var yPantalla = event.clientY;

    var nuevoElemento = document.createElement("div");
    menu.appendChild(nuevoElemento);

    nuevoElemento.style.position = "absolute";
    nuevoElemento.style.top = yPantalla+"px";
    nuevoElemento.style.left = xNavegador+"px";

    if (defecto==true) {
      
      /* if ( document.querySelector("div").onclick) {
        console.log("entraa");
        nuevoElemento.onclick = function (e){
          console.log("has echoo click  en "+e.target.innerHTML);
      }
      
      }else{ */
        nuevoElemento.innerHTML="🐱‍👤";
        defecto=false
        console.log("entra a"); 
     /*  } */
    }else{

      if ( nuevoElemento.onclick) {
        nuevoElemento.onclick = function (e){
          console.log("has echoo click  en "+e.target.innerHTML);
      }
      
      }else{
      nuevoElemento.innerHTML="🥶";
      defecto=true
      console.log("entra o"); 
      }
    }
  
    
    
    console.log(xNavegador);
    event.stopPropagation();
   

  },{capture:true});
  


};


