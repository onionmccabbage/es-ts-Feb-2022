// import {fromEvent} from 'rxjs'
import { pluck } from 'rxjs/operators'
import * as Rx from 'rxjs'

const input = document.getElementById('input')
const cat = document.getElementById('cat')
// const isNum = code=>48 && code <=57 // only want numeric values

// observables are for STREAMS of data
// we tend to identify observables by a trailing dollar sign
const keyup$ = Rx.Observable.fromEvent(document, 'keyup') // listen for ANY keyup event

// the observable is only created onmce there is a subscriber (lazy instantiation)
keyup$.pipe(pluck('keyCode')) // our obsable knows about every key-code from every key event
    // .filter(isNum)
    .subscribe((keyCode: number) => {
        const k = String.fromCharCode(keyCode)
        console.log(`User typed ${k}`)
        cat.innerHTML += k
    })
