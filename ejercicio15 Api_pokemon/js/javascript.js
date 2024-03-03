
window.onload = function () {  

   
  fetch('https://pokeapi.co/api/v2/pokemon?limit=10000')
      .then(response => response.json())
      .then(data => {
          const pokemons = data.results;
        console.log(pokemons);
          // Obtener el contenedor donde se mostrarán las cartas de los Pokémon
         

          //Enviamos formulario
 

          //FILTRO
          document.forms[0].onsubmit = function(event) {
            event.preventDefault(); // Evita que el formulario se envíe de forma convencional
            console.log("se envia el formulario");
            // Obtener los valores ingresados por el usuario
            var nombre = document.getElementById("nombre").value;
            console.log(pokemons[0].name);
            cartas.innerHTML = "";

            for (let i = 0; i < pokemons.length; i++) {
                if (pokemons[i].name.includes(nombre)) {
                    console.log("valor encontrado:"+pokemons[i].name);
                    pokemon=pokemons[i];


                
                        fetch(pokemon.url)
                            .then(response => response.json())
                            .then(pokemonData => {
                                // Crear una nueva carta para el Pokémon
                                const nuevaCarta = document.createElement('div');
                                nuevaCarta.classList.add('col');
                                nuevaCarta.innerHTML = `
                                    <div class='card' style='width: 18rem;'>
                                        <img src='${pokemonData.sprites.front_shiny   }' class='card-img-top' alt='${pokemon.name}'>
                                        <div class='card-body'>
                                            <h5 class='card-title'>${pokemonData.name}</h5>
                                            <p class='card-text'>habilidades: ${pokemonData.abilities[0].ability.name}/${pokemonData.abilities[1].ability.name}</p>
                                            <p class='card-text'>id: ${pokemonData.id}</p>
                                            <a class='btn btn-primary' href='mostrar.html?nombre=${pokemonData.name}'>ver</a>
                                        </div>
                                    </div>
                                `;
                                // Agregar la nueva carta al contenedor
                                cartas.appendChild(nuevaCarta);
                            })
                            .catch(error => console.error('Error al obtener los datos del Pokémon:', error));
                    





                }else{
                    console.log('aqui no tiene que entrar');

              /*   */
 

                }
                
            } 
           
          };
                    pokemons.forEach(pokemon => {
                                                fetch(pokemon.url)
                                                    .then(response => response.json())
                                                    .then(pokemonData => {
                                                        // Crear una nueva carta para el Pokémon
                                                        const nuevaCarta = document.createElement('div');
                                                        nuevaCarta.classList.add('col');
                                                        nuevaCarta.innerHTML = `
                                                            <div class='card' style='width: 18rem;'>
                                                                <img src='${pokemonData.sprites.front_shiny   }' class='card-img-top' alt='${pokemon.name}'>
                                                                <div class='card-body'>
                                                                    <h5 class='card-title'>${pokemon.name}</h5>
                                                                    <p class='card-text'>habilidades: ${pokemonData.abilities[0].ability.name}/${pokemonData.abilities[1].ability.name}</p>
                                                                    <p class='card-text'>id: ${pokemonData.id}</p>
                                                                    <a class='btn btn-primary' href='mostrar.html?nombre=${pokemonData.name}'>ver</a>
                                                                </div>
                                                            </div>
                                                        `;
                                                        // Agregar la nueva carta al contenedor
                                                        cartas.appendChild(nuevaCarta);
                                                    })
                                                    .catch(error => console.error('Error al obtener los datos del Pokémon:', error));
                                            });
        

     //MOSTRAR
     var queryString = window.location.search;

     // Parsear la cadena de consulta para obtener los parámetros
     var urlParams = new URLSearchParams(queryString);
     
     // Obtener el valor de la variable "variable"
     var valorVariable = urlParams.get('nombre');
     
     // Mostrar el valor en la consola
     console.log("El valor de la variable es:", valorVariable);

            for (let i = 0; i < pokemons.length; i++) {
                if (pokemons[i].name==valorVariable) {
                    console.log("valor encontrado:"+pokemons[i].name);
                    pokemon=pokemons[i];
                    

                
                        fetch(pokemon.url)
                            .then(response => response.json())
                            .then(pokemonData => {
                                // Crear una nueva carta para el Pokémon
                                const nuevaCarta = document.createElement('div');
                                nuevaCarta.classList.add('col');
                                nuevaCarta.innerHTML = `
                                    <div class='card' style='width: 18rem;'>
                                        <img src='${pokemonData.sprites.front_shiny   }' class='card-img-top' alt='${pokemon.name}'>
                                        <div class='card-body'>
                                            <h5 class='card-title'>${pokemonData.name}</h5>
                                            <p class='card-text'>habilidades: ${pokemonData.abilities[0].ability.name}/${pokemonData.abilities[1].ability.name}</p>
                                            <p class='card-text'>id: ${pokemonData.id}</p>
                                            <a class='btn btn-primary' href='index.html'>volver</a>
                                        </div>
                                    </div>
                                `;
                                // Agregar la nueva carta al contenedor
                                mostrar.appendChild(nuevaCarta);
                            })
                            .catch(error => console.error('Error al obtener los datos del Pokémon:', error));
                    





                }else{
                    console.log('aqui no tiene que entrar');

            /*   */


                }
                
            } 




      })
      .catch(error => {
          console.error('Error al obtener los datos de la API de Pokémon:', error);
          const parrafo = document.getElementById('parrafo');
          parrafo.innerHTML = "Error al obtener los datos de la API de Pokémon.";
      });







 

      
}
