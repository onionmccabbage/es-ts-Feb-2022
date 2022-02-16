// there are many ways to write a function

function fnA(){} // old-skool

const fnB = x=>x*x // if there is one param and one line in the body
const fnC = x=>{return x*x} // need braces if using 'return' keyword
const fnD = (x,y)=>x*y // need brackets if more than one param
const fnE = (x,y)=>{return x*y}

function init(){
    const form = document.querySelector('form')
    form.addEventListener('submit', submitHandler)
}

const submitHandler = (e:Event)=>{ // events are ALWAYS provided by the DOM
    e.preventDefault() // we don't want the page to refresh
    //                                      cast as a type      ....   gives us members
    const a:number = Number( (document.getElementById('a') as HTMLInputElement).value )
    const b:number = Number( (document.getElementById('b') as HTMLInputElement).value )
    const resultelement = document.querySelector('p')
    if (resultelement){
        resultelement.textContent =  `${a+b}` // do the maths inside the evaluation
    }
}
init() // get the stuff going
