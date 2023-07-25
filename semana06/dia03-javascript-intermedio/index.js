console.log("Hola js")

//array
const numero1 = 1
const numero2 = 2
const numero3 = 3

const listaDeValores = [1, 2, 3, "Tobias", "Abregu", true]

console.log(listaDeValores)

console.log(listaDeValores[0])
console.log(listaDeValores[3])

listaDeValores[2] = 99

console.log(listaDeValores)

listaDeValores.push("javascript")

console.log(listaDeValores)

listaDeValores.pop()

console.log(listaDeValores)

//Objetos

//{key : value}

const miObjeto = {
    nombre: "Tobias",
    apellido: "Abregu",
    mi_edad: 20,
}
console.log(miObjeto)

console.log(miObjeto.nombre)
console.log(miObjeto.apellido)
console.log(miObjeto.edad)

console.log(miObjeto["nombre"])
console.log(miObjeto["mi_edad"])

// delete miObjeto.apellido

console.log(miObjeto)

// destructuring

const nombrevalue = miObjeto.nombre

console.log(nombrevalue)

const {nombre, apellido} = miObjeto

console.log(nombre, apellido)

const { nombre: nombrevalor, apellido:apellidovalor } = miObjeto
console.log(nombrevalor, apellidovalor)

//spread operator ...

const producto = {
    nombre: "laptop",
    precio: 6800,
}
const cliente = {
    nombre: "julio",
    isvip: true, 
}

const nuevoObjeto = { ...producto, ...cliente}
console.log(nuevoObjeto)

const nuevoObjetosincolisiones = {
    producto: { ...producto},
    cliente: { ...cliente},
}
console.log(nuevoObjetosincolisiones)

console.log(Object.keys(producto))
console.log(Object.values(producto))
console.log(Object.entries(producto))

let oveja = "oscar"
console.log(oveja[0])







