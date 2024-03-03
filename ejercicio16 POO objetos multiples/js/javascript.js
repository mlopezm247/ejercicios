
nombre = "objeto";
tipo="ropa";
precio=20;
objeto={nombre:"oubdead",tipo:{talla1:20,talla2:20},precio:30}


window.onload = function () {
recursiva(objeto);
/*   function producto(nombre,tipo,precio) {
    this.nombre = nombre;
    this.tipo=tipo;
    this.precio = precio;
  }

  producto1= new producto(nombre,tipo,precio);
  
  let datos=Object.keys(producto2);



  for (let i = 0; i < datos.length; i++) {

    console.log(datos[i]+":"+producto2[datos[i]]);
    lista.innerHTML+= datos[i]+":"+producto2[datos[i]]+"<br>";
    
  }
 
  let entrada=Object.entries(producto2).forEach((clave,valor)=>{
    console.log(clave+":"+valor);
    
    
  }
  )
    */



};

function recursiva(objeto) {
  datos=Object.keys(objeto)

  datos.forEach(dato => {
    typeof objeto[dato]=="object"?(lista.innerHTML+="<p>"+dato+"</p>",recursiva(objeto[dato])):lista.innerHTML+="<p>"+dato+":"+objeto[dato]+"</p>"


  })
}


