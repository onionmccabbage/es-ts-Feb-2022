// https://www.typescriptlang.org/docs/handbook/2/modules.html

// remember: to allow console outside a browser:
// npm install @types/node --save-dev (I prefer not)
// OR edit tsconfig.json compiler options:
// "lib": [
//     "ES6",
//     "DOM"
// ],

// run with ts-node app.ts
import helloWorld from "./hello"
helloWorld()

// NB no file extension here, so ts-node will also transpile the imported files
import { pi, phi, absolute } from "./maths";
// or
import RandomNumberGenerator, { pi as π } from "./maths";

// importing evaluates ALL imported code
import './maths' // this will run the immediate code in maths module
 
const r = new RandomNumberGenerator()
console.log(π);
console.log(pi);
const absPhi = absolute(phi);
        
console.log(`absPhi is ${absPhi}`)

//
// import { Penguin, Dog } from "./animals";
// or
// import type { Penguin, Dog } from "./animals" // can _only_ import types
// or
import { type Penguin, type Dog } from "./animals";

type Animals = Penguin | Dog
const gromit:Dog = {breeds:['plasticine', 'silicone', 'wire'], yearOfBirth:1991} 
const feathers:Penguin = {breed:'rock-hopper', yearOfBirth:1993} 
const characters:Animals[] = [gromit, feathers]
console.log(characters)
