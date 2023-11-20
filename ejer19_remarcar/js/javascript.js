
window.onload = function(){

  boton.onclick= remarcar;
}
  

      function remarcar() {
        let palabra = document.getElementById("palabra").value;
        let texto = document.getElementById("texto").innerHTML;
        let textonuevo = texto.replace(palabra, "<mark style='background-color: yellow;'>"+palabra+"</mark>"); // Corrección aquí
        document.getElementById("texto").innerHTML = textonuevo;
    }