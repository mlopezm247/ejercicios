


window.onload = function () {
  Iniciar();
  
   document.getElementById('miFormulario').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const modal = document.getElementById('Iniciar');
 moneda= parseInt(document.getElementById('seleccionNumero').value);
 modal.style.display = 'none';
 console.log(moneda);

}); 
  
  /*NUMERO DE JUGADORES*/ 
  let numeroJugadores=4;
 
  for (let i = 0; i <= numeroJugadores; i++) {
    if (i==0) {
      cinco.innerHTML+= "<div id='player"+i+"'><h3>Banca</h3><div id='contenidocartas'></div></div>";
    }else if (i==1){
      uno.innerHTML+= "<div id='player"+i+"'><h3>Tus cartas</h3><div id='contenidocartas'></div></div>";
      miscartas.innerHTML+= "<div id='player"+i+"'><div id='contenidocartas'></div></div>";
    }else if (i==2){
      tres.innerHTML+= "<div id='player"+i+"'><div id='contenidocartas'></div><h3>Cartas del Jugador"+i+"</h3></div>";
    }else if (i==3){
      dos.innerHTML+= "<div id='player"+i+"'><h3>Cartas del Jugador"+i+"</h3><div id='contenidocartas'></div></div>";
    }else if (i==4){
      cuatro.innerHTML+= "<div id='player"+i+"'><div id='contenidocartas'></div><h3>Cartas del Jugador"+i+"</h3></div>";
    }else{

    }
   
    
  }

  for (let i = 1; i <= numeroJugadores; i++) {
    jugar(i);
    
  } 
 /**/

/* moneda=prompt("con cuantas monedas quieres jugar");
 */


// ¡Asegúrate de definir este array!

  // Obtén los valores guardados del almacenamiento local
  let valoresGuardados = localStorage.getItem('notienesentido');

  // Si hay valores guardados, actualiza el array 'monedas'
  if (valoresGuardados) {
    monedas = JSON.parse(valoresGuardados);
  }

 
  

  //HISTORIAL

  for (let i = 0; i <= numeroJugadores; i++) {
    if (i==0) {
      fichas.innerHTML+= "<p>Fichas de la banca="+monedas[i]+"</p>";
    }else if(i==1){
      fichas.innerHTML+= "<p>Mis Fichas ="+monedas[i]+"</p>";
    }else{
      fichas.innerHTML+= "<p>Fichas del jugador "+i+"="+monedas[i]+"</p>";
    }
      
  }

  let valoreshistorial = localStorage.getItem('historial');

  if (valoreshistorial) {
    historial = JSON.parse(valoreshistorial);
  }

  for (let i = 0; i < historial.length; i++) {
    console.log(historial.length);
    console.log(historial);
    if (historial.length>=1) {
      fichasactual.innerHTML+="<p>"+historial[i]+"</p>" ;
    }else{

    }
   
    
      
  }


  //TEMPORIZADOR
  /* empezarJuego();
  */

};
let cartatapada=0;
let monedas = [100, 100, 100, 100, 100]; 
/*RANDOM*/
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
/*ARRAYS*/
let cartas = ["1O","2O", "3O", "4O", "5O", "6O", "7O", "sotaO","caballoO","reyO",
              "1C","2C", "3C", "4C", "5C", "6C", "7C", "sotaC","caballoC","reyC",
              "1E","2E", "3E", "4E", "5E", "6E", "7E", "sotaE","caballoE","reyE",
              "1B","2B", "3B", "4B", "5B", "6B", "7B", "sotaB","caballoB","reyB"];

let contadores = [0,0,0,0,0];

let historial=[];




numeroJugadores=4;

//FUNCION JUGAR
function jugar(jugador) {


  numaleatorio=getRandomInt(cartas.length);
  




for (let i = 0; i < cartas.length; i++) {
  console.log(numaleatorio);
  console.log(cartas[numaleatorio]);
  console.log(cartas[i]);

  if (cartas[i]==cartas[numaleatorio]) {

  console.log("entraaaaaaaaaa");
  console.log("el numero de carta es "+cartas[numaleatorio]);

  let carta = cartas[numaleatorio];
  let rutaImagen = "../imagenes/" + carta + ".png";

   

  console.log(rutaImagen);



            /*  LO TOCHO*/ 
    for (let i = 0; i <= numeroJugadores; i++) {
      console.log("entra al forrr");
      

      let playerElement = document.getElementById("player" + i);
      console.log(playerElement);
      let contenidocartas = playerElement.querySelector("#contenidocartas");
      if (jugador===i) {
        console.log("entra al ifff");
        console.log(playerElement);
            if (cartatapada <=3) {
              contenidocartas.innerHTML+= "<div class='card'><img src='../imagenes/vuelta.png' alt=''></div>" ;
              cartatapada=cartatapada+1;
            }else{
            contenidocartas.innerHTML+= "<div class='card'><img src='"+rutaImagen+"' alt=''></div>" ;
          }
        if (jugador==1) {
          let miscartas = document.getElementById("miscartas");
          let contenidocartas2 = miscartas.querySelector("#contenidocartas");
          contenidocartas2.innerHTML+= "<div class='card'><img src='"+rutaImagen+"' alt=''></div>" ;
        }
          if (rutaImagen.includes("sota") || rutaImagen.includes("caballo") || rutaImagen.includes("rey")){
            contadores[i] += 0.5;
            console.log("MAS 0 CON 5");
  
          }else  {
            console.log(carta.charAt(0));
            num=parseInt(carta.charAt(0));
            contadores[i] += num;
          }
          console.log("Jugador " + (i + 1) + " tiene " + contadores[i] + " puntos");
      }

    }
  } 
  
}

/*BORRAR*/ 
 let pos = numaleatorio;
numElementos = 1;

let elementosEliminados = cartas.splice(pos, numElementos);
console.log(elementosEliminados);
console.log(cartas); 




} 







let intervaloCartas;
let contadorprueba=0;
let contadorbanca=0;
/*GANADOR*/
function ganador(params) {
  let mayor=0;
  
      for (let i = 0; i < contadores.length; i++) {
        if (contadores[i] <= 7.5 && contadores[i] > mayor) {
          mayor = contadores[i]; // Actualiza el número mayor si es menor o igual a 7.5
        }
      }
    console.log( contadores.indexOf(mayor));
 
  console.log("el numero mayor es"+mayor);
 

   

let empate=false;
let banca=false;
    for (let i = 0; i < contadores.length; i++) {
      contadorbanca=0;
      contadorprueba=0;
      //si 2 jugadores empatan y no son la banca
      for (let i = 1; i < contadores.length; i++) {
        if (contadores[i]== mayor) {
          contadorprueba++;
          console.log("a entrado a contador de prueba "+contadorprueba);
        }
        
      }
      // si todos los jugadores pierden gana la banca
      for (let i = 1; i < contadores.length; i++) {
        if (contadores[i]>7.5) {
          contadorbanca++;
          console.log("a entrado a contador de banca "+contadorbanca);
        }
        
      }
      console.log("el contador de banca "+contadorbanca);
      console.log("el contador de banca "+contadorprueba);
      if (contadorbanca == numeroJugadores) {
        console.log("HA GANADO LA BANCA, Todos los jugadores han perdido");
        monedas[i] -= moneda;
        monedas[0] += parseInt(moneda);
        banca=true;
      
      }else if (contadorprueba >=2 && contadores[0]!==mayor) {
        console.log("El juego no es valido, dos o mas jugadores han empatado es el de arriba");
        empate=true;
      }
      else if (contadores[i]!== mayor || contadores[0]==mayor) {
        console.log("El jugador " + i + " ha PERDIDO");
        monedas[i] -= moneda;
        monedas[0] += parseInt(moneda); // Dándole las monedas al jugador 0
      }else{
        console.log("hay algo raro aqui");
      }

      



      
    }
    if (banca==true) {
      /* alert("HA GANADO LA BANCA "); */
      setTimeout(function() {
      ganaa("HA GANADO LA BANCA ")
    }, 2000);
     /*  ganaa("HA GANADO LA BANCA "); */
      historial.unshift("Ganador : BANCA");
    }
    else if (empate==true) {
      console.log("El juego no es valido, dos o mas jugadores han empatado");
      setTimeout(function() {
      ganaa("Ganador : EMPATE")
    }, 2000);
     /*  ganaa("Ganador : EMPATE"); */
      historial.unshift("Ganador : EMPATE");
    }
    else if (contadores[0]== mayor || contadorbanca == numeroJugadores) {
      /* alert("HA GANADO LA BANCA "); */
      setTimeout(function() {
      ganaa("HA GANADO LA BANCA ")
    }, 2000);
      /* ganaa("HA GANADO LA BANCA "); */
      historial.unshift("Ganador : BANCA");
    }else{
      /* alert("HA GANADO EL JUGADOR "+contadores.indexOf(mayor)); */
      setTimeout(function() {
      ganaa("HA GANADO EL JUGADOR "+contadores.indexOf(mayor))
    }, 2000);
      /* ganaa("HA GANADO EL JUGADOR "+contadores.indexOf(mayor)); */
      monedas[contadores.indexOf(mayor)] += parseInt(moneda);
      monedas[0] -= parseInt(moneda);
      historial.unshift("Ganador : JUGADOR "+contadores.indexOf(mayor));
    }
    
    // Guarda el array modificado en el almacenamiento local
    localStorage.setItem('notienesentido', JSON.stringify(monedas));
    localStorage.setItem('historial', JSON.stringify(historial));
    console.log(monedas);
    console.log(contadores);
    console.log(historial);

   

   
}

/*PLANTARSE*/ 


function planton2() { 
  
 
 

}

 
function planton() { 
  let salida=false;
  for (let i = 2; i <= numeroJugadores; i++) {
    salida=false; 
    setTimeout(function() {
    do  {
      if ((contadores[i]>=6.5 && contadores[i]<=7.5) || (contadores[i]>7.5)) {
        salida=true;
      }else{
       
        jugar(i);
     
      }
      /* clearInterval(intervaloCartas); */
      /* if ((contadores[i]>=6.5 && contadores[i]<=7.5) || (contadores[i]>7.5)) {
        
      } */
    }while (salida==false); 
    /* clearInterval(intervaloCartas); */ }, 1000);
  }
  /*  */ // Cambia el tiempo (en milisegundos) entre cada carta
 

  

let banca2=false;
    for (let i = 0; i < contadores.length; i++) {
      contadorbanca=0;
    
      // si todos los jugadores pierden gana la banca
      for (let i = 1; i < contadores.length; i++) {
        if (contadores[i]>7.5) {
          contadorbanca++;
          console.log("a entrado a contador de banca "+contadorbanca);
        }
        
      }
      console.log("el contador de banca "+contadorbanca);
      if (contadorbanca == numeroJugadores) {
        console.log("HA GANADO LA BANCA, Todos los jugadores han perdido");
        banca2=true;
      
      }

      



      
    }
    if (banca2==true) {
      /* alert("HA GANADO LA BANCA "); */
      setTimeout(function() {gannador()
      }, 2000);
    /*   gannador(); */
    }else{
      setTimeout(function() {
      banca();
    }, 1500);
    }




  
}

 
/*BANCA*/
function banca() {
  let salida=false;
  for (let i = 0; i <= 0; i++) {
    salida=false;
    do  {
      if ((contadores[i]>=6.5 && contadores[i]<=7.5) || (contadores[i]>7.5)) {
        salida=true;
      }else{
        jugar(i);
      }
      
      /* if ((contadores[i]>=6.5 && contadores[i]<=7.5) || (contadores[i]>7.5)) {
        
      } */
    }while (salida==false); 
    
  }
  ganador();
  
}


function limpiar(params) {
  localStorage.clear();
  location.reload();
}
function volverJugar(params) {
  location.reload();
}


function ganaa(nombre) {
        
            
  /* const botonModal = document.getElementById('botonModal'); */
  const modal = document.getElementById('miModal');
  const spanCerrar = document.getElementsByClassName('cerrar')[0];
/*   const nombreGanador = document.getElementById('nombreGanador'); */

  

  
  nombreGanador.textContent = nombre;
  modal.style.display = 'block';
/* 
  spanCerrar.onclick = () => {
  modal.style.display = 'none';
  };

  
  window.onclick = (event) => {
  if (event.target === modal) {
      modal.style.display = 'none';
  }
  }; */

}


function Iniciar(nombre) {
        
            
  /* const botonModal = document.getElementById('botonModal'); */
  const modal = document.getElementById('Iniciar');
 /*  const spanCerrar = document.getElementsByClassName('cerrar')[0]; */

/*   const nombreGanador = document.getElementById('nombreGanador'); */

  

  
  nombreGanador.textContent = nombre;
  modal.style.display = 'block';
/* 
  spanCerrar.onclick = () => {
  modal.style.display = 'none';
  }; */
  
 /*  
  window.onclick = (event) => {
  if (event.target === modal) {
      modal.style.display = 'none';
  }
  };
 */
}

