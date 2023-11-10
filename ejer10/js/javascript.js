function activar() {
  let url = document.forms[0].url.value;
  newwindow = window.open(
    url,
    "mi ventana",
    "width=1000, height=1000,top=100,left=100"
  
  );

}
setTimeout (alert("HOLAAAA"), 1000);
function cerrar() {
  newwindow = window.open;
}
