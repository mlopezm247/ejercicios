
window.onload = function () {

  if (localStorage) {
    if (localStorage.getItem("nombre")){
      saludos.innerHTML ="Hola, "+localStorage.getItem("nombre");
    }
    else{
      nombre=prompt("¿como te llamas?");
      localStorage.setItem("nombre",nombre);
      saludos.innerHTML="Hola, "+nombre
    }
  }else{
    saludos.innerHTML="Hola usuario anonimo ";
  }
};


