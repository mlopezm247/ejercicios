ejey=0;
ejex=0;
let tamx=100;
let tamy=100;

bolay=0;

let topex =innerWidth-tamx;
let topey =innerHeight-tamy;
window.onload = function() {
  window.addEventListener("keydown",miFunction);

/* const tiempo = setInterval(incrementarContador, 100); */
}

window.onresize=function (){
  topex=innerWidth-tamx;
    topey =innerHeight-tamy;
 };

entrada=false;


function animateBola() {
  bolay -= 40;
  bola.style.top = bolay + 'px';

  if (bolay > 0) {
    requestAnimationFrame(animateBola);
  } else {
    console.log('Animación de la bola finalizada');
  }
}

function miFunction(params) {
 

console.log(ejex<topex);
console.log(ejex>topex);
console.log(ejex);
console.log(topex);

console.log(event.key);


if (event.key=="s" && ejey<topey) {
  if (event.key=="s" && event.altKey==true) {
    ejey+=200;
    miElemento.style.top=ejey+"px";
    console.log("TURBBOOO");
  }else{
     ejey+=50;
  miElemento.style.top=ejey+"px";
  }
 
  /* console.log(ejey); */
}else if (event.key=="w" && ejey>0) {

  if (event.key=="w" && event.altKey==true) {
    ejey-=200;
    miElemento.style.top=ejey+"px";
    console.log("TURBBOOO");
  }else{
     ejey-=50;
  miElemento.style.top=ejey+"px";
  }


 /*  console.log(ejey); */
}else if (event.key=="d" && ejex<topex) {
  
  if (event.key=="d" && event.altKey==true) {
    ejex+=200;
    miElemento.style.left=ejex+"px";
    console.log("TURBBOOO");
  }else{
    ejex+=50;
  miElemento.style.left=ejex+"px";
  }

 
/*    console.log(ejex); */
}else if (event.key=="a" && ejex>0) {
  if (event.key=="a" && event.altKey==true) {
    ejex-=200;
    miElemento.style.left=ejex+"px";
    console.log("TURBBOOO");
  }else{
    ejex-=50;
  miElemento.style.left=ejex+"px";
  }
 
 /*  console.log(ejex); */
}

if (event.key=="o") {
 bola.style.display="block";
    bola.style.top=ejey+50;
    bola.style.left=ejex+90;
  
    bolay=ejey+50;
    console.log("consolelog"+bolay);
  
  animateBola()
  console.log("salio");
}


}