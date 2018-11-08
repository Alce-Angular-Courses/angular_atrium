o = {
    nombre: 'Pepe',
    edad: 23
}

function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
}

o2 = new Persona('Juan', 33)

o.profesion = 'Programador'
o2.profesion = 'Diseñador'

console.log(o)
console.log(o2)