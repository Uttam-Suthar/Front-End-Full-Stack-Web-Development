var var1 = 10;
function outer() {
    var b = 40;
    console.log(b);
}
console.log(var1);
console.log(window.var1)    //its work only console
window.outer()