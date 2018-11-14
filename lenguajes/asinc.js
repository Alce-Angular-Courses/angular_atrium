
function saludar() {
    console.log('Hola')
}
    
setTimeout(saludar,1000)

setTimeout(function () {console.log('Hola')}, 1000)


setTimeout(() => console.log('Hola'), 1000)