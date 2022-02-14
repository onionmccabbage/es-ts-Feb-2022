// See tsconfig - allows node and json 
// run this ts file directly (need ts-node)
// by importing JSON we have an ES <object>
import * as todos from "./data/todos.json" // see https://www.codevscolor.com/import-json-typescript

interface ToDo {
    userId: number
    id: number
    title: string
    completed: boolean
}
class Job implements ToDo {
    userId: number // careful with case...
    id: number
    title: string
    completed: boolean
    // constructor(userID: number, id: number, title: string, completed: boolean) {
    constructor(todo: ToDo) {
        this.userId = todo.userId
        this.id = todo.id
        this.title = todo.title
        this.completed = todo.completed
    }
}
// consume some ToDo items
// console.log(typeof (todos)) // object with ONE member called 'todos'
const job1 = todos.todos[0]
const job2 = new Job(todos.todos[1])
console.log(job1) // see subtle differences
console.log(job2) // this knows is a 'Job' instance

const compareJobByDesc = (a: Job, b: Job) => { // in descending order
    if (a.userId < b.userId) {
        return 1;
    }
    if (a.userId > b.userId) {
        return -1;
    }
    return 0;
}

const filterByUserId1 = (a:Job)=>{
    if (a.userId === 1) {
        return a
    }
}
// sor and filter the array
console.log(todos.todos.sort(compareJobByDesc))
console.log(todos.todos.filter(filterByUserId1))



