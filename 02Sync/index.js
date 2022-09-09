console.log("Asincronicidad")
// Codigo Secuencial (Sincrono)

console.log(1)
console.log(2)
console.log(3)

//callback function 

var alumnos = ["Sebastian", "Aracely", "Rene", "Carlos", "Mabel"];

for (let i=0; i< alumnos.length; i++){
    console.log(alumnos[i]);
}


// Set timeout
console.log("Sebastian")
setTimeout(()=>{
    
    return console.log("Aracely")

},4000)
console.log("Rene")