var one = new Promise(function (resolve, reject) { });
// promises are 'thenable'
one.then(function (value) {
    console.log("resolve ".concat(value));
});
one["catch"](function (error) {
    console.log("rejected ".concat(error));
});
// both one and two are restricted to using <string>
var two = new Promise(function () { one.then(function (value) { }); });
console.log(one === two); // false one returns void, two return value
