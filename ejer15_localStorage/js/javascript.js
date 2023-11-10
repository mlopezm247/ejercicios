
window.onload = function () {
  /* var color= document.formulario.color.value;
   */
  var formulario = document.formulario;
  var colorInput = formulario.color;
  var titulo = document.getElementById('titulo');



  var colorGuardado = localStorage.getItem('colorSeleccionado');

  if (colorGuardado) {
    colorInput.value = colorGuardado;
    titulo.style.color = colorGuardado;
    parrafo.style.color = colorGuardado;
  }


  colorInput.addEventListener('input', function () {
    var color = colorInput.value;
    titulo.style.color = color;
    parrafo.style.color = color;

    // Guardar el color seleccionado en el almacenamiento local
    localStorage.setItem('colorSeleccionado', color);
    
  });

  console.log(colorGuardado);




//TAMAÑO
var tamañoInput = document.getElementById('numero');
/* var tamañoInput = formulario.numero; */
  var numeroGuardado = localStorage.getItem('numeroSeleccionado');
if (numeroGuardado) {
  tamañoInput.value = numeroGuardado;
  titulo.style.fontSize = numeroGuardado+"px";
  parrafo.style.fontSize = numeroGuardado+"px";
}


tamañoInput.addEventListener('input', function () {
  var numero = tamañoInput.value;
  titulo.style.fontSize = numero+"px";
  parrafo.style.fontSize = numero+"px";

  // Guardar el color seleccionado en el almacenamiento local
  localStorage.setItem('numeroSeleccionado', numero);
  
});
console.log(numeroGuardado);




//TIPOGRAFIA



var opcionesInput = document.getElementById('opciones');
/* var tamañoInput = formulario.numero; */
  var opcionesGuardado = localStorage.getItem('opcionesSeleccionado');
if (opcionesGuardado) {
    opcionesInput.value = opcionesGuardado;
    titulo.style.fontFamily = opcionesGuardado+", sans-serif";
    parrafo.style.fontFamily = opcionesGuardado+", sans-serif";
}


opcionesInput.addEventListener('input', function () {
  var opcion = opcionesInput.value;
  titulo.style.fontFamily = opcion+", sans-serif";
  parrafo.style.fontFamily = opcion+", sans-serif";


  // Guardar el color seleccionado en el almacenamiento local
  localStorage.setItem('opcionesSeleccionado', numero);
  
});
console.log(opcionesGuardado);







};



