//Llamar a los elmentos del HTML
const pokemonContainer= document.querySelector(".pokemon-container")
const spinner= document.querySelector('#spinner')
const previous= document.querySelector('#previous')
const next= document.querySelector('#next')

//Asignar valor a varibles para paginación
let offset = 1;
let limit = 15;

//Funcion navbar

function buscarBtn(){
    removeChildNodes(pokemonContainer)
    fecthPokemon(idNombreInput.value.toLowerCase())
}


//Funciones de los botones
previous.addEventListener('click', ()=>{
    if (offset!=1){
        offset -=16;
        removeChildNodes(pokemonContainer)
        fecthPokemons(offset,limit)
    }
})
next.addEventListener('click', ()=>{
    offset +=16;
    removeChildNodes(pokemonContainer)
    fecthPokemons(offset,limit)
})
inicio.addEventListener('click', ()=>{
    
        offset =1;
        removeChildNodes(pokemonContainer)
        fecthPokemons(offset,limit)
    
    
})

//fecth pokemon
function fecthPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res)=> res.json())
    .then((data)=> {
        createPokemon(data)
        spinner.style.display="none"
    });

}
//Ciclo para mandar a llamar a los valores 
function fecthPokemons(offset,limit){
    spinner.style.display="block"
    for (let i =offset; i<= offset+limit ; i++){
        fecthPokemon(i)
    }
}
// Modificar el HTML
function createPokemon(pokemon){
    //Crear cartas
    const flipCard=document.createElement('div')
    flipCard.classList.add('flip-card')
    // Contenedor de la carta
    const cardContainer=document.createElement('div')
    cardContainer.classList.add('card-container')
    
    flipCard.appendChild(cardContainer);


    const card=document.createElement("div")
    card.classList.add('pokemon-block')
  //Contenedor de la imagen 
    const spriteContainer=document.createElement('div')
    spriteContainer.classList.add('img-container')
    // Traer la imagen
    const sprite=document.createElement('img')
    sprite.src =pokemon.sprites.front_default // direccion donde se encuentra la img en la api
    
    spriteContainer.appendChild(sprite) //animación

    //Escribir en id del pokemon
    const number=document.createElement('p')
    number.textContent=`ID : #${pokemon.id.toString().padStart(3, 0)}` ;//pasar a un string .toString() agregar elemontos al inicio (cuantos, cual) .padStart(3,0)
    
    //Crear nombre
    const name= document.createElement('p')
    name.classList.add('name')
    name.textContent ='Nombre: ' +pokemon.name  //asignar el nombre
    //como se va a mostrar la info en la carta
    card.appendChild(spriteContainer)
    card.appendChild(number)
    card.appendChild(name)

    const cardBack= document.createElement('div')
    cardBack.classList.add('pokemon-block-back')
    cardBack.appendChild(progressBars(pokemon.stats))

    cardContainer.appendChild(card)
    cardContainer.appendChild(cardBack)
    pokemonContainer.appendChild(flipCard)


} 
//Barra de progresos
function progressBars(stats){const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");
// Stats ciclo porque solo quiero 3
  for (let i = 0; i < 3; i++) {
    const stat = stats[i];
//Generar porcentajes
    const statPercent = stat.base_stat / 2 + "%";
    const statContainer = document.createElement("stat-container");
    statContainer.classList.add("stat-container");

    const statName = document.createElement("p");
    statName.textContent = stat.stat.name;

    const progress = document.createElement("div");
    progress.classList.add("progress");
//rangos de las barras de porcentajes
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.setAttribute("aria-valuenow", stat.base_stat);
    progressBar.setAttribute("aria-valuemin", 10);
    progressBar.setAttribute("aria-valuemax", 150);
    progressBar.style.width = statPercent;

    progressBar.textContent = stat.base_stat;
// asignar parametros
    progress.appendChild(progressBar);
    statContainer.appendChild(statName);
    statContainer.appendChild(progress);

    statsContainer.appendChild(statContainer);



    }

    return statsContainer;


}

//Remover los elementos anteriores
function removeChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

fecthPokemons(offset,limit)

