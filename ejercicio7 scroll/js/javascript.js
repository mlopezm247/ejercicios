window.onload=function(){
    window.onscroll=function(){
        tamanoVentana=window.innerHeight; 
        posicionScroll=window.scrollY; //posicion del scroll
        tamanoCompleto=document.documentElement.scrollHeight;// tamaño completo
        console.log("tamaño de la ventana; " +tamanoVentana+"posicion del scroll: "+posicionScroll+ " tamaño completo: "+tamanoCompleto);
    }

    window.onscrolllend=function(){
        console.log("no te pares")
    }

}



