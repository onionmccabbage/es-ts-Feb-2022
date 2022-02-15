var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// the spread operator is the oposite ot the ...rest operator
{
    var squares = [1, 4, 9, 16, 25];
    var powers = [2, 4, 8, 16, 32];
    // we can spread these arrays (access each member separately)
    var both = __spreadArray(__spreadArray([], squares, true), powers, true);
    console.log(both);
}
