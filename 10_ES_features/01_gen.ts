// fibonacci numer generator
function* fibonacci(){ // NB generators MUST be function, not ()=>{}
    let first = 1, second = 1
    // let i = 0; i<Number.POSITIVE_INFINITY;i++
    for(;;){ // loop endlessly
        let sum = second + first
        yield sum // instead of one return, many yield calls
        first = second
        second = sum
    }
}
const prettyPrint = (item)=>{console.log(JSON.stringify(item))} // nice JSON
const iter = fibonacci()
prettyPrint(iter.next())
prettyPrint(iter.next())
prettyPrint(iter.next())
prettyPrint(iter.next())
prettyPrint(iter.next()) // 13