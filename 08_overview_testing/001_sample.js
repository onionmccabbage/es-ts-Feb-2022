// the user should only be able to click a button once
// we can do this cleanly with functional programming
var once = function (f) {
    var done = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!done) {
            done = true;
            f.apply(void 0, args); // so we ca nre-inject them into the function called f
        }
    };
};
var recordConsent = function (response) {
    console.log(response);
};
