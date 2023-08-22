
  function isValidIdentifier(identifier) {
    if (identifier === "" || isDigit(identifier[0])) {
      return false;
    }

    for (var i = 0; i < identifier.length; i++) {
      var char = identifier[i];

      // Check if the character is a letter, digit, underscore, or dollar sign
      if (!(isLetter(char) || isDigit(char) || char === "_" || char === "$")) {
        return false;
      }
    }

    return true;
  }

  // Helper functions to check character types

  function isLetter(char) {
    var charCode = char.charCodeAt(0);
    return (
      (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
    );
  }

  function isDigit(char) {
    return char >= "0" && char <= "9";
  }


  //or

// function isValidIdentifier(input) {
  
//     if (typeof input !== 'string' || input.length === 0) {
//         console.log(`${input} is not a valid identifier.`);
//         return;
//     }

 
//     if (/^\d/.test(input)) {
//         console.log(`${input} is not a valid identifier.`);
//         return;
//     }

   
//     if (!/^[\w$]+$/.test(input)) {
//         console.log(`${input} is not a valid identifier.`);
//         return;
//     }

    
//     if (/^[_$]+$/.test(input)) {
//         console.log(`${input} is not a valid identifier.`);
//         return;
//     }

//     console.log(`${input} is a valid identifier.`);
// }



// function isValidIdentifier(input) {
//     if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(input)) {
//         console.log(`${input} is a valid identifier.`);
//     } else {
//         console.log(`${input} is not a valid identifier.`);
//     }
// }

// isValidIdentifier("myVariable"); // Logs: myVariable is a valid identifier.
// isValidIdentifier("123abc"); // Logs: 123abc is not a valid identifier.
// isValidIdentifier("_pr&ivate"); // Logs: _pr&ivate is not a valid identifier.