// the user should only be able to click a button once
// we can do this cleanly with functional programming

const once = (f) => {
    let done = false
    return (...args) => { // unpack any existing arguments and pass as parameters
        if (!done) {
            done = true
            f(...args) // so we can re-inject them into the function called f
        }
    }
}
const recordConsent = (response)=>{
    console.log(response)
}
