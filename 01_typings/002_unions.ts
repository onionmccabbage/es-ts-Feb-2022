let union: boolean | number // could be either type

union = 5

union = true

// union = []

// we can declare our own type alias
// typescript type
type my_type = string | number | boolean | Error
const fn = ():my_type =>{
    return 'ok' // could also return an Error or...
}