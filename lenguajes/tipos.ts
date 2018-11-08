import { Persona1 } from './clases'

interface LibroIf {
    titulo: string
    autor: Persona1
    fecha: Date
    // mostrar: Function
}

class Libro implements LibroIf {

    constructor(
        public titulo: string, 
        public autor: Persona1,
        public fecha: Date
    ) {}

    // mostrar () {}
}

let nombre: string
let apellido = "Perez"
let edad: number
let altura = 180
let isAlumno: boolean

let algo: any
let otroAlgo: string | number

let aDatos: Array<any> // []
let aNumbers: Array<number> // [number] cls

aNumbers = []
aNumbers.push(1)

let oPersona: Persona1

oPersona = new Persona1('Raul', 78)

let libro1: LibroIf

libro1 = {
    titulo: 'Mi libro',
    autor: new Persona1('Raul', 78),
    fecha: new Date()
}
