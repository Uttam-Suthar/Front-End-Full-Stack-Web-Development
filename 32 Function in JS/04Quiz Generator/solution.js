function main() {
    const questions = [
      "Question1",
      "Question2",
      "Question3",
      "Question4",
      "Question5"
    ];
    function shuffle(arr) {
      return function () {
        const result = [...arr]; // Make a copy of the input array.
        let currentIndex = arr.length;
        while (currentIndex > 0) {
          const randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          // Swap the current element with the randomly-selected one.
          const temp = result[currentIndex];
          result[currentIndex] = result[randomIndex];
          result[randomIndex] = temp;
        }
        return result;
      };
    }
    return shuffle;
  }
  



//       //Create your function with the name shuffle.
//     //It should return a function when call should give the shuffled array.
//     //Do not modify the anything in the starter code.
// function shuffle(array) {
//   return function() {
//     const shuffledArray = [...array]; 
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1)); 
//       [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; 
//     }
//     return shuffledArray;
//   };
// }




// function main() {

//   const Subject1 = [
//       "Question1",
//       "Question2",
//       "Question3",
//       "Question4",
//       "Question5"
//     ];
//     //Write your function here
//     const func = shuffle(Subject1);
//     console.log(func());
//     return shuffle;
    
//       // const func = shuffle(Subject1);
  
//   // Generate shuffled arrays

// //   const shuffledArray1 = func();
// //   const shuffledArray2 = func();
  
// //   // Print the shuffled arrays
// //   console.log("shuffleArray1:", shuffledArray1);
// //   console.log("shuffleArray2:", shuffledArray2);
//   }