//                          NB no file extension
import RandomNumberGenerator, {absolute, phi} from './maths'
import {pi as PI} from './maths'
// this indicates we are handling types
import type { Penguin, Dog } from './animals'

const r = RandomNumberGenerator
const absPhi = absolute(phi)
const absPI = absolute(PI)

// we need a type for animals
type Animals = Penguin | Dog
const gromit:Dog = {breeds:['plasticine', 'silicone'], yearOfBirth:1991}
const feathers:Penguin = {breed:'rock-hopper',yearOfbirth:1993}
const characters:Animals[] = [gromit, feathers]
console.log(characters)