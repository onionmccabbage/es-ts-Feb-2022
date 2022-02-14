// here we will load up some JSON data
// npm install -g ts-node // usse this to directly run .ts files
// then we will explore it using interfaces, classes and just the raw data
// we will need:
// - a way to run ts directly
// - a way to allow import
import * as photos from './data/photos.json'

console.log(photos.photos[42]) // we have an OBJECT
// an interface for our data
interface Photo {
    albumId:number
    id:number
    title:string
    url:string
    thumbnailUrl:string
}
// a class
class Snap implements Photo {
    albumId:number
    id:number
    title:string
    url:string
    thumbnailUrl:string
    constructor(snap:Photo){
        this.albumId = snap.albumId
        this.id =snap.id
        this.title = snap.title
        this.url = snap.url
        this.thumbnailUrl = snap.thumbnailUrl
    }    
}
let s1 = new Snap(photos.photos[12])
console.log(s1)