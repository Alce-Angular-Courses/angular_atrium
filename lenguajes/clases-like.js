class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar () {
        console.log(`Hola soy ${this.nombre}`)
    }
}

let o = new Persona('Andrés', 54)

o.profesion = 'Informatico'
o.saludar()
console.log(o)

class Alumno extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad)
        this.curso = curso
    }

    saludar () {
        super.saludar()
        console.log(`Voy al curso de ${this.curso}`)
    }
}

let a = new Alumno ('Luis', 21, 'Angular')
a.saludar()
a.turno = 'Tarde'
console.log(a)