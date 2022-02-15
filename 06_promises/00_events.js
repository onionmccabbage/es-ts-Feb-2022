// using conventional events
const EventEmitter = require('events') //commonJS syntax
class Calculator extends EventEmitter {
}
const calc = new Calculator()

calc.addListener('add', (a, b) => {
    calc.emit('result', a + b)
})
calc.addListener('subtract', (a, b) => { // NB addListener not addEventListener
    calc.emit('result', a - b)
})
calc.addListener('result', (result) => {
    calc.emit(`Result ${result}`)
})

// use the code - NB events are emitted whether on not anything is listening to the event
console.log(calc.emit('subtract', 5, 2)) // true - the event was emitted