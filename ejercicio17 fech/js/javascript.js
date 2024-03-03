url="https://randomuser.me/api/";
fetch(url)
.then(exito)
.catch(mifuncionError) 
/* .finally(siempre) */
function exito(respuesta) {
/*   alert(respuesta.status); */
  respuesta.json().then(guardar);
/*   respuesta.json().then(guardar); */
  
}s

function guardar(texto) {
  console.log(texto);
  detalles.innerHTML += "<img src='"+texto.results[0].picture.large+"'>"; 
  detalles.innerHTML += "<h1>"+texto.results[0].name.first+" "+texto.results[0].name.last+"</h1>"; 
  detalles.innerHTML += "<p>"+texto.results[0].location.city+"</p>"; 
  detalles.innerHTML += "<p>"+texto.results[0].location.country+"</p>"; 
  detalles.innerHTML += "<p>"+texto.results[0].email+"</p>"; 
  detalles.innerHTML += "<p>"+texto.results[0].phone+"</p>"; 

}

function mifuncionError(error) {
  alert(error.message);
}
