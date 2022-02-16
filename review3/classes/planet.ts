import IResource from "./iresource";
export default class Planet implements IResource{
    name:string
    population:string // the json API returns population s a string
    constructor(name:string, population:string){
        this.name = name
        this.population = population
    }
    // get/set methods
}