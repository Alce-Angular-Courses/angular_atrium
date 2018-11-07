console.log(this)

let o = {
    nombre: 'Pepe',
    mostrar : function () {
        console.log(this)
    }
}

o.mostrar()