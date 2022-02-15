var go = function (isWorking) {
    // return new Promise((resolve, reject) => {
    return new Promise(function (reject, resolve) {
        setTimeout(function () {
            if (isWorking) {
                resolve('a string');
            }
            else {
                reject(new Error('It Broke'));
            }
        }, 200);
    });
};
// go(true)
//     .then((val) => console.log(val))
//     .catch((err) => console.log(err));
go(false)
    .then(function (val) { return console.log(val); })["catch"](function (err) { return console.log(err); });
