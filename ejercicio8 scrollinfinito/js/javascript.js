window.onload = function () {
    tamanoVentana = window.innerHeight; 
  window.onscroll = function () {
    
    posicionScroll = window.scrollY; //posicion del scroll
    tamanoCompleto = document.documentElement.scrollHeight; // tamaño completo
    console.log(
      "tamaño de la ventana; " +
        tamanoVentana +
        "posicion del scroll: " +
        posicionScroll +
        " tamaño completo: " +
        tamanoCompleto
    );
    if (tamanoVentana + posicionScroll == tamanoCompleto) {
        console.log("llegaste al final");

        document.querySelector("p").innerHTML+= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur optio iusto consequatur. Maiores possimus quaerat, tempore saepe ad esse. Eius consequuntur est sequi qui ipsam asperiores minus maxime! Labore, ulla";
      }
  };

  window.onscrollend = function () {
    console.log("no te pares");
  };
};
