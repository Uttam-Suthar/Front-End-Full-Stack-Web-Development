// Complete the genrateID function
//Do not alter the starter code
function generateID(start){
//Implement Your function here
     let count = start;
    return function() {
        return `A_2023_${count++}`;
    };
}

const func = generateID(99);
console.log(func());//Output : A_2023_99
console.log(func()); // Output: A_2023_100

let getID = generateID(2)
console.log(getID());
console.log(getID());







// // Complete the genrateID function
// //Do not alter the starter code
// function generateID(start){
// //Implement Your function here
//     let count = start; 

//   return function() {
//     return `A_2023_${count++}` 
//   };

// }

// const func = generateID(99);
// console.log(func());//Output : A_2023_99
// console.log(func()); // Output: A_2023_100

// let getID = generateID(2)
// console.log(getID());
// console.log(getID()); 

