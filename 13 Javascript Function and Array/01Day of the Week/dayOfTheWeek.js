var weekDay = ['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];

function returnDay(x){
  return (x < 1) || (x > 7) ? null : weekDay[x];
}

console.log(returnDay(3));



// Write your code he
function returnDay(number){
    var days_of_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    
    if (number<1 || number>7){
        return null;
    }
    return days_of_week[number-1]
}



console.log(returnDay(1)); 
console.log(returnDay(2)); 
console.log(returnDay(3));  
console.log(returnDay(4));  

console.log(returnDay(5));
console.log(returnDay(6));
console.log(returnDay(7));
console.log(returnDay(0));
console.log(returnDay(8));