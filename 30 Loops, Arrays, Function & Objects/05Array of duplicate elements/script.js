//Complete the findDuplicate function
// Do not alter the starter code.

let arr = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr){
//Implement your function here
      let duplicates = [];
  let counts = {};

  for (let num of arr) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  for (let num in counts) {
    if (counts[num] > 1) {
      duplicates.push(Number(num));
    }
  }

  return duplicates;
}    
console.log(findDuplicate(arr));