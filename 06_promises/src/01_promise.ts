const one = new Promise<string>( (resolve, reject)=>{} )

// promises are 'thenable'
one.then( (value)=>{
    console.log(`resolve ${value}`)
} ) 
one.catch( (error)=>{
    console.log(`rejected ${error}`)
} )

// both one and two are restricted to using <string>
const two = new Promise<string>( ()=>{one.then(value=>{})} )

console.log(one === two) // false one returns void, two return value