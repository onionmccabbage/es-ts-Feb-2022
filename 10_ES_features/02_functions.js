// there are many ways to write a function
function fnA() { } // old-skool
var fnB = function (x) { return x * x; }; // if there is one param and one line in the body
var fnC = function (x) { return x * x; }; // need braces if using 'return' keyword
var fnD = function (x, y) { return x * y; }; // need brackets if more than one param
var fnE = function (x, y) { return x * y; };
function init() {
    var form = document.querySelector('form');
    form.addEventListener('submit', submitHandler);
}
var submitHandler = function (e) {
    // e.preventDefault() // we don't want the page to refresh
    //                                      cast as a type      ....   gives us members
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var resultelement = document.querySelector('p');
    if (resultelement) {
        resultelement.textContent = "".concat(a + b); // do the maths inside the evaluation
    }
};
init(); // get the stuff going
