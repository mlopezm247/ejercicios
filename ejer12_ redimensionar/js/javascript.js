
window.onresize = function () {
  let alto = innerHeight;
  let ancho = innerWidth;
  tamañoventana.innerHTML =
    "Tiene " + alto + " de alto y " + ancho + " de ancho";

  if (ancho < 550) {
    newwindow = window.open(
      "index.html",
      "mi ventana",
      "width=1000, height=1000,top=100,left=100"
    );
    newwindow.resizeTo(1000, 1000);
  }
};

/* window.addEventListener("resize",function()  {

  
}) */
