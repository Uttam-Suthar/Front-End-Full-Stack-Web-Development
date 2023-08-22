function main() {
    function customMap(array, mappingFn) {
      const mappedArray = [];
  
      for (let i = 0; i < array.length; i++) {
        const mappedValue = mappingFn(array[i]);
        mappedArray.push(mappedValue);
      }
  
      return mappedArray;
    }
    return customMap;
  }
  



//   function customMap(array, callbackFn) {
//     const modifiedArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const modifiedValue = callbackFn(array[i]);
//         modifiedArray.push(modifiedValue);
//     }

//     return modifiedArray;
// }




// function main() {
//     const array = [2, 4, 6, 2, 7, 8];
//     //Write your code here.
//     //Create your higher order functiomn here with the name customMap with takes two parameter array and a callback function.
//     //The function should return an array
//     //Do not modify any other code.
    
    
//       function square(num) {
//         return num * num;
//     }

//     function double(num) {
//         return num * 2;
//     }
//     return customMap;
//   }
  