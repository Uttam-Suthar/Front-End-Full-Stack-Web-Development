// var var1 = 10;
// function outer() {
//     var b = 40;
//     console.log(b);
// }

// outer()
// console.log(b)     // not defind

// var a = 10;
// function outer() {
//     var b = 40;
//     console.log(a, b);
// }

// outer()
// console.log(a, b)  // is not defind

var a = 10;
function outer() {
    var a = 20;
    var b = 40;
    function inner() {
        var b = 100;
        console.log("inner", a, b)
    }
    inner()
    console.log(a, b);
}

outer()


var a = 10;
var b;
function outer() {
    var b = 30;
    function inner(a) {
        var a = 30;
        console.log(a++, b++)
    }
    console.log(a, ++b);
    inner(a);
}
outer();
console.log(a++, b++);

// //10 31
//  30 31
//  13 10 NaN

var a = 10;
function outer() {
    var a = 20;
    var b = 30;
    function inner(a) {
        var a = 30;
        console.log(a++, b++)
    }
    console.log(a, ++b);
    inner(a);
}
outer();
console.log(a++);
