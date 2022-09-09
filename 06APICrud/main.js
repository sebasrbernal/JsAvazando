// Bloques de codigo
// ES el archvo js principal 

const goodReadsCrud = require('./crudAuthors')

//Lista de todos los autores

//goodReadsCrud.listAuthors()

// Lista de autores por su ID -- 14826--14639-
//goodReadsCrud.getAuthor(14639)

// Crear un autor
/*const jsonSend={
        name: "Tanya",
		last_name: "Pimentel",
		nacionalidad: "MX",
		biography: "NO",
		gender: "F",
		age: 34,
		is_alive: true
}
goodReadsCrud.createAuthor(jsonSend)*/

//Modificar parcialmente al autor 

/*const updateData={
    name: "Dayana",
    last_name: "Diaz de Guzman ",
    age: 12,
}
goodReadsCrud.pacthAuthor(14826,updateData)*/

// Eliminar un autor 
goodReadsCrud.deleteAuthor(14639)
