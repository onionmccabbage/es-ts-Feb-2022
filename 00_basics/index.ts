// downleveling defaults to ES3
const b = 1

// old-skool
function greet(person: string, date: Date) {
    console.log(`Greetings ${person} today is ${date.toDateString()}`) // ES string interpolation
}
// modern ES
const fn = (person: string, date: Date) => {
    console.log(`Hi ${person} today is ${date.toDateString()}`)
}

// why you need to remember that ES is a proptotypical language
const obj1 = Object.create({}) // this inherits from object
const obj2 = Object.create(null) // this inherits from null
// NB console is a BROWSER ONLY thing (i.e. needs a DOM)
console.log(obj1, obj2)

// var let and const (in a block scope)
{
    let name: string = 'Timnit' //we can mutate let values
    name = 'Ethel'

    const fname: string = 'Lily' //cannot mutate const
    // fname = 'Princess'

    // only use ts when it's not obvious by implementation
    const digits = [1, 2, 3] // implicit typing - ts engine recognizes this is typed as an array
    digits.push(4, 5, 6) // add members to our constant.....
    console.log(digits)

    // identical in purpose and operation
    const names1: string[] = ['Joan', 'Nicky', 'Rebecca']
    const names2: Array<string> = ['Joan', 'Nicky', 'Rebecca']

    { // our own data type called 'person'
        let person: { name: string; height: number; admin: boolean }
        person = { name: 'Mary', height: 42, admin: false }
    }

}