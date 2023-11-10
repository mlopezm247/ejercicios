contador=0;
let tamx=50;
let tamy=50;
let contador2=0;
let topex =innerWidth-tamx;
let topey =innerHeight-tamy;
let sentido=0;
let sentidoy=0;
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
      
      contador+=10;
    }else{
      sentido=1;
      if (contador>=topex) {
        contador2+=50;
        bola.style.top=contador2+"px";
      }
      
      
      
    }

    if(contador>0 && sentido==1) {
      contador-=10;
      
    }else{
      sentido=0;
      if (contador==0) {
        contador2+=50;
        bola.style.top=contador2+"px";
      }
      
    }



    if (contador2<topey && sentidoy==0) {
      
      contador2+=50;
      bola.style.top=contador2+"px";
    }else{
      sentidoy=1;
     /*  if (contador>=300) {
        contador2+=50;
       
      } */
      
      
      
    }

    if(contador2>0 && sentidoy==1) {
      contador2-=50;
      bola.style.top=contador2+"px";
    }else{
      sentidoy=0;
      /* if (contador==0) {
        contador2+=50;
        
      } */
      
    }
  
       
    
    
     
   console.log(contador);
  }


