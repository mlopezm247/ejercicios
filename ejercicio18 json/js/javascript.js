
nombre = "objeto";
apellido="ropa";
edad=20;
alumno={nombre:"marcos",apellido:"adw12212ad",edad:30}


const alumnos={escuela:"CDMFP",result:[{nombre:"marcos",apellido:"adw12212ad"},{nombre:"pepe",apellido:"adw122"}]}

window.onload = function () {
/* console.log(objetoJSON); */

/* alert(objetoJSON); */
    // Guardar objetoJSON en el Local Storage
    var miAlumnoJson = localStorage.getItem("alumnoJSON1");
    if (miAlumnoJson) { 
      nuevoObjeto=JSON.parse(miAlumnoJson); 
      lista.innerHTML ="Hola Alumno " +nuevoObjeto.nombre;

    }else
    {
      console.log("guardado");
      miAlumnoJson=JSON.stringify(alumno);
    localStorage.setItem("alumnoJSON1", miAlumnoJson);
    }



};




