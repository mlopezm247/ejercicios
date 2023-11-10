
function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Solicitar al usuario ingresar un número
  const numero = parseInt(prompt("Ingresa un número para verificar si es primo:"));
  

  
  if (isNaN(numero)) {
    alert("Ingresa un número válido.");
  } else {
    for (let i = 2; i <= numero; i++) {
        if (esPrimo(i)) {
          console.log(i);
        }
    /* if (esPrimo(numero)) {
      alert(numero + " es un número primo.");
    } else {
      alert(numero + " no es un número primo.");
    } */
  }}
  