contador=0;
let tamx=50;
let tamy=50;
let contador2=0;
let topex =innerWidth-tamx;
let topey =innerHeight-tamy;
let sentido=0;
let sentidoy=1;
window.onload = function () {
  const tiempo = setInterval(incrementarContador, 10);
 
  
};
window.onresize=function (){
 topex=innerWidth-tamx;
   topey =innerHeight-tamy;
};
function incrementarContador() {

  //let ancho = innerWidth;

/*   console.log(topex); */
    bola.style.left=contador+"px";

    if (contador<topex && sentido==0) {
     /*  console.log("entra a la derecha"); */
      contador+=10;
    }else{
      sentido=1;
      if (contador>=topex && sentidoy==1) {
        contador2+=50;
        bola.style.top=contador2+"px";
        if (contador2>=topey) {
          sentidoy=0;
      }
      if (contador==0 && sentidoy==0) {
        contador2-=50;
        bola.style.top=contador2+"px";

      }

      if (contador2==0) {
        sentidoy=0;}
      
    }
      
      /* if ( contador2>=0 &&  sentidoy==0) {
        console.log(sentidoy);
        console.log(contador2);
        console.log(topey);
        console.log("entraasss");
        contador2-=50;
        bola.style.top=contador2+"px";
      }else{
     sentidoy=1; 

} */



    }
      
      
    }

    if(contador>0 && sentido==1) {
      contador-=10;
   /*    console.log("entra a la derecha"); */
    }else{
      sentido=0;
      if (contador==0 && sentidoy==1) {
        contador2+=50;
        bola.style.top=contador2+"px";

      }
      if (contador==0 && sentidoy==0) {
        contador2-=50;
        bola.style.top=contador2+"px";

      }
        if (contador2>=topey) {
          sentidoy=0;}

      if (contador2==0) {
        sentidoy=0;}
      
    }

    /*SENTIDO Y*/
    
/* 
    if(contador>0 && sentido==1) {
      contador-=10;
      
    }else{
      sentido=0;
      if (contador==0) {
        contador2+=50;
        bola.style.top=contador2+"px";
      }
      
    }
 */
  
       
    
    
     
/*    console.log(contador); */
/*   } */


