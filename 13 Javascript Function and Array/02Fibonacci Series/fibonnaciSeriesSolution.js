// Write your code here:
function fibonacciSeries(n) {    
    var a = 0;
    var b = 1;
    var c;
    
    while(a < n){
        c = a+b;
        a = b;
        b = c;
    }
    
    console.log(a === n);
}
//call function
fibonacciSeries(5);



// Write your code here:
function fibonacciSeries(N) {
  if (N === 0 || N === 1) {
    return true;
  }

  var a = 0;
  var b = 1;
    
  while (b < N) {
    var c = a + b;
      
    a = b;
    b = c;
      
  }

  return N === b;
}

console.log(fibonacciSeries(5)); 
