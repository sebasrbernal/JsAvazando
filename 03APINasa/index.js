console.log("API de la NASA")
// import fetch from "node-fetch"
const llave = "KlMs5QKEcmHUz8ez44jnmGhzGo0ugZwU60LypSPQ"
var urlapi = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${llave}`

/*async function ejemplo(url){
    const respuestaApi= await fetch(url)
    const respuestaJson= await respuestaApi.json()
    var meteoritos= respuestaJson.near_earth_objects
    Object.keys(meteoritos).forEach((elemento,indice,arreglo)=>{
       var listaxDia= meteoritos[elemento]
       /*for(let i=0; i<listaxDia.length;i++){
           if(listaxDia[i].is_potentially_hazardous_asteroid){
               console.log(`El meteorio ${listaxDia[i].name} es potencialmente peligroso`)
           }
           else{
            console.log(`El meteorio ${listaxDia[i].name} no es potencialmente peligroso`)
           }
       }*/
       /*listaxDia.forEach((elemento,indice,arreglo)=>{
        if(elemento.is_potentially_hazardous_asteroid){
            console.log(`El meteorito ${elemento.name} es potencialmente peligroso`)
        }else{
            console.log(`El meteorito ${elemento.name} NOO es potencialmente peligroso`)
        }
        
    })*/
    // sacar el diametro max 
    /*listaxDia.forEach((elemento,indice,arreglo)=>{
        if(elemento.is_potentially_hazardous_asteroid){
            console.log(`El meteorito ${elemento.name} es potencialmente peligroso`)
            //Acceder a los metros maximos del elemento 
            console.log(`Su medida es de : ${elemento.estimated_diameter.meters.estimated_diameter_max} .mts max`)
        }else{
            console.log(`El meteorito ${elemento.name} NOO es potencialmente peligroso`)
            console.log(`Su medida es de : ${elemento.estimated_diameter.meters.estimated_diameter_max} .mts max`)
        }

    })
})
} */


//console.log(ejemplo(urlapi))

// Fotos de marte 

async function fotosMarte(rover){
    var urlMarte = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&page=1&api_key=${llave}`
    var respuestaApi = await fetch(urlMarte)
    var respuestaApiJson = await respuestaApi.json()
    var listaFotos =respuestaApiJson.photos
    var contenedor = document.getElementById("contenedorCartas")
    contenedor.innerHTML = ""
    listaFotos.forEach((elemento,indice,arreglo)=>{
        contenedor.innerHTML += `<div class="card mb-2 col-sm-12 col-md-6 col-lg-4" style="width: 18rem;">
        <img src=${elemento.img_src} class="card-img-top" style="height: 100%; alt=${elemento.id}>
        <div class="card-body">
          <h5 class="card-title">${elemento.camera.full_name}</h5>
          <p class="card-text">${elemento.earth_date}</p>
          
        </div>
            </div> 
        `

    })
    //console.log(respuestaApiJson.photos[0].camera)
    //console.log(respuestaApiJson.photos[0].rover)
}
function buscar(){
    var selectrover= document.getElementById("robot")
    var maquina=selectrover.value
    fotosMarte(maquina)

}

//fotosMarte(urlMarte)

