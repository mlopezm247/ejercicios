window.onload = function() {

document.forms[0].onsubmit = function(event) {
event.preventDefault();

}
document.forms[0].nombre.onchange = mifunction;

function mifunction(params) {
  if (document.forms[0].nombre.value=="España") {
    console.log("entra");
   
      var selectContainer = document.getElementById("seleccion");
    var select = document.createElement("select");
    select.id = "ciudadSelect";

    var opciones = ["Madrid", "Barcelona"];

    for (var i = 0; i < opciones.length; i++) {
      var opcion = document.createElement("option");
      opcion.value = opciones[i];
      opcion.text = opciones[i];
      select.add(opcion);
    }

    // Agregar el select al contenedor
    selectContainer.appendChild(select);




  }else{
    console.log("no entress");
  }
}







}
