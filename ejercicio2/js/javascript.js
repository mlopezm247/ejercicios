function pincha(params) {
  document.querySelector("p").classList.toggle("hola2");
  var objeto=document.getElementById("boton");
  console.log(document.querySelector("p").classList);
  if (document.querySelector("p").classList=="hola1 hola2") {
   
    document.querySelector("p").innerHTML="⚪";
  }else{
    document.querySelector("p").innerHTML="⚫";
  }
 
  document.getElementById("body").classList.toggle("negro");
 /*  document.querySelector("p").classList.remove("hola2"); */
}/* 
function pincha2(params) {
  clases = document.querySelector("p").classList;
  document.querySelector("h4").innerHTML="Clases: "+clases;
}
 */