



//POKEAPI
//https://pokeapi.co/
//ENDPOINTS
//* https://pokeapi.co/api/v2/pokemon/pikachu

//? 1) vamos a traer a REQUEST 
const request = require('request')

//? 2) DECLAR MI URI DE MI API 
const URI = 'https://pokeapi.co/api/v2/pokemon/'

//? 3) FUNCIÓN QUE PIDA UN POKEMON Y ME DEVUELVA SUS TIPOS (getters y setter)

function getPokemonTypeByName(name) {
        //ES BUENA PRACTICA REVISAR SI UNA API ES SENSIBLE A MAYUSCULAS/MINUSCULAS
        request.get(URI + name , function (error, response, body) {
            //SI MI PETICIÓN ES EXITOSA, DEVUELVEME LA DATA
            if(response.statusCode === 200){
                const bodyEnFormatoJs = JSON.parse(body) // PARSE convierte un objeto JSON en un objeto Javasacript
            const typePokemon = bodyEnFormatoJs.types.map((objeto)=>objeto.type.name)
            console.log(`EL TIPO DE ${name} es: ${typePokemon}`)
            }else {
                //SI EL CODIGO DE ESTADO (statusCode) es cualquier otro, muestra el mensaje de error
                console.log(`Ocurrio un error: ${response.statusCode} ${response.statusMessage}`)
                                        //!           404                    Not Found
            }
          });
}
getPokemonTypeByName("pikachu")
getPokemonTypeByName("bulsaur")
getPokemonTypeByName("ditto")
getPokemonTypeByName("dragonite")