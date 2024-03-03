window.onload = function () {
 
/*   document.getElementById("formulario").addEventListener("submit", function(event){ */
    document.forms[0].onsubmit = function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma convencional
    
    // Obtener los valores ingresados por el usuario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;

    function Alumno(nombre,apellido,edad) {
      this.nombre = nombre;
      this.apellido=apellido;
      this.edad = edad;
    }

    alumno1= new Alumno(nombre,apellido,edad);
    listaAlumnos=new Array();
    listaAlumnos.push(alumno1);

    lista.innerHTML+=listaAlumnos[0].nombre+"<br>";


    //MOSTRAR TODO LO QUE HAY DENTRO DEL OBJETO
    for (let i = 0; i < listaAlumnos.length; i++) {
      for (const key in listaAlumnos[i]) {

       console.log(key+":"+ listaAlumnos[i][key]);
  }
      
    }
 
   
  };
/*   }); */


};


