console.log(this)

let o = {
    nombre: 'Pepe',
    mostrar : function () {
        console.log(this)
    },
    saludar : function () {
        // console.log('Hola '+ this.nombre)
        console.log(`Hola 
        ${this.nombre}`)
    }
}

o.mostrar()

let saludo = o.saludar
setTimeout(() => {
    saludo()
    // o.saludar()
}, 2000);