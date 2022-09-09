//* CRUD AUTHORS, VAMOS A TENER NUSETRA LÓGICA 
//* DOCUMENTANCIÓN: https://goodreads-devf-aaron.herokuapp.com/docs/
//* URI DE LA API: https://goodreads-devf-aaron.herokuapp.com/api/v1/ 


//? 1) TRAER A REQUEST QUE ACABAMOS DE INSTALAR
const request = require('request')

//? 2) TENER NUESTRO ENDPOINT
const URI = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'

//? LISTA A TODOS LOS AUTORES (AUTHORS)
    const listAuthors = () => {
        request.get(URI,(error,response,body) => {
            if(response.statusCode === 200){
                const authors = JSON.parse(body)
                console.log(authors)
            }else{
                console.log(response.statusCode , response.statusMessage)
            }           //!      404                 Not Found 
        })
    }

// Lista de autores por su ID
const getAuthor=(id)=>{
    request.get(URI+id+"/",(error,response,body)=>{
        if(response.statusCode === 200){
            const author = JSON.parse(body)
            console.log(author)
        }else{
            console.log("ID no valido: ",response.statusCode , response.statusMessage)
        } 
    })
}

// Crear un autor -- usamos inf y necesitamos un formato json
const createAuthor=(jsonData)=>{
    const objConfig={
        url: URI,     //Apartado para crear el autor 
        form: jsonData //Data en formato Json
    }
    request.post(objConfig,(error,response,body)=>{
        if(response.statusCode === 201){
            const createAuthor = JSON.parse(body)
            console.log(createAuthor)
            console.log("Autor creado exitosamente ", createAuthor)
        }else{
            console.log("Autor no creado ",response.statusCode , response.statusMessage)
        } 
    })
}

//Modificacion parcial (parcial update) de un autor
const pacthAuthor=(id,jsonData)=>{
    const objConfig={
        url: URI+id+"/",     //Apartado para modificar el autor con el id 
        form: jsonData //Data en formato Json
    }
    request.patch(objConfig,(error,response,body)=>{
        if(response.statusCode === 200){
            const author = JSON.parse(body)
            console.log(author)
            console.log("Autor actuliazado exitosamente ", author)
        }else{
            console.log("Autor no actualizado ",response.statusCode , response.statusMessage)
        } 
    })
}
//Eliminar un autor
const deleteAuthor=(id)=>{
    request.delete(URI+id+"/",(error,response,body)=>{
        if(response.statusCode === 204){
            
            console.log("Autor eliminado exitosamente")
        }else{
            console.log("ID no eliminado ",response.statusCode , response.statusMessage)
        } 
    })
}

   module.exports = {
    listAuthors,
    getAuthor,
    createAuthor,
    pacthAuthor,
    deleteAuthor,
   } 

