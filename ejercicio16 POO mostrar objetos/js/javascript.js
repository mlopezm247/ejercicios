window.onload = function () {
 nombre = "objeto";
 tipo="ropa";
 precio=20;
producto2={nombre:"oubdead",tipo:{talla1:20,talla2:20},precio:30}


  function producto(nombre,tipo,precio) {
    this.nombre = nombre;
    this.tipo=tipo;
    this.precio = precio;
  }

  producto1= new producto(nombre,tipo,precio);
  /* listaProductos=new Array();
  listaProductos.push(producto1); */
  let datos=Object.keys(producto1);

  for (let i = 0; i < datos.length; i++) {
    console.log(datos[i]+":"+producto1[datos[i]]);
    lista.innerHTML+= datos[i]+":"+producto1[datos[i]]+"<br>";
    
  }
 
  let entrada=Object.entries(producto1).forEach((clave,valor)=>{
    console.log(clave+":"+valor);
  }
  )
   



};


