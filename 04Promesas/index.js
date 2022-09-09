import { rejects } from "assert"
import fetch from "node-fetch"
import { resolve } from "path"
/*console.log("Ejemplo de try")
function division(a,b){
	try{
	var resultado = a/b
	suma(a,b)//GENERA ERROR PORQUE FUNCION SUMA NO ESTA DEFINIDA
	return resultado
	} catch{
		
		return "No se pudo hacer la division, pero atrape el error"
	}
}
let arreglo = [1,3,4,2,0,3,4]
for (let i=0;i<arreglo.length;i++){
	
	console.log(division(6,arreglo[i]))
}*/


//promesas 
//math.ceil redondea al entero superior
//math.floor redondea al entero inferior
//math.random genera un numero aletorio entre 0 y 1
//math.random*N numero aletorio entre 0 y n

/*const promesaEjemplo=()=>{
    return new Promise((resolve,reject)=>{
        const numeroAletorio= Math.ceil(Math.random()*10)
        setTimeout(()=>{
            numeroAletorio>=5?resolve(numeroAletorio):reject(new Error(`El ${numeroAletorio} es menor que 5`))
        },2000)
    })
}

promesaEjemplo().then(numero=>{
    console.log(numero)
}).catch(error=>console.log(error + " este es el error de mi primera promesa"))*/

//funciónAsync()
var apiLibrary = "http://openlibrary.org/search.json?author=tolkien"

async function buscarAutor(urlAutor){
    
    var respuesta=await fetch(urlAutor)
    var respuestaJson=await respuesta.json()
    //.docs es una lista  que contiene jsons de cada libro encontrado 
    var listaLibros=respuestaJson.docs
    var listaCodigo=listaLibros[0].isbn
    var urlLibro=`http://openlibrary.org/isbn/${listaCodigo[0]}.json`
    console.log(urlLibro + listaCodigo[0])
    //Para ver un solo libro
    //var respuestaLibro= await fetch(urlLibro)
   // var respuestaLibroJson= await respuestaLibro.json()
    //console.log(respuestaLibroJson)
    var arregloRespuestas=[]
    var arregloPromises=[]
    listaCodigo.forEach(async(elemento, indice, arreglo) => {
        urlLibro=`http://openlibrary.org/isbn/${elemento}.json`
        var promesa= await fetch(urlLibro).then((r)=>r)
        arregloPromises.push(promesa)
    })
    return new Promise((resolve,reject)=>{
        Promise.all(arregloPromises).then((proms)=>{
            proms.forEach((p)=>arregloRespuestas.push(p))
        }).then(()=>resolve(arregloRespuestas))
    })


}
 var respuestaQueryLibros=await queryAuthor(urlAutor)
 console.log(respuestaQueryLibros)
