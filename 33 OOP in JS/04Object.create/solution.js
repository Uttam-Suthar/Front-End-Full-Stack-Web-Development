// Object.create
// Send Feedback
// You are working on a project that involves managing user profiles. Each user profile is represented as an object with properties such as name, age, and email.

// Objecive:
// Your task is to implement the following functionality:
// updateProfile function: This function should take two parameters: user (an object representing the user profile) and updates (an object containing the properties to update in the user profile). The function should use the Object.assign method to update the user profile with the properties from the updates object.
// Return the updated user object.
// freezeProfile function: This function should take one parameter: user (an object representing the user profile). The function should use the Object.freeze method to make the user profile object immutable, preventing any further modifications.
// Return the updated user object.
// Implement the updateProfile and freezeProfile functions to achieve this functionality.

// Hint:
// Learn more about the Object.assign method using the link:
//     https://developer.mozilla.org/en- 
// US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign 
//  Learn more about the Object.freeze method using the link:

//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze




function updateProfile(user, updates) {
    const updatedUser = Object.assign({}, user, updates);
    return updatedUser;
  }
  
  function freezeProfile(user) {
    const frozenUser = Object.freeze(user);
    return frozenUser;
  }
  



  // Instructions:
// 1. Implement the updateProfile function to update the user profile using Object.assign.
// 2. Implement the freezeProfile function to freeze the user profile using Object.freeze.

// function updateProfile(user, updates) {
//     // Implement the code here
//   }
  
//   function freezeProfile(user) {
//     // Implement the code here
//   }


// // Function to update user profile using Object.assign
// function updateProfile(user, updates) {
//   const updatedUser = Object.assign({}, user, updates);
//   return updatedUser;
// }

// // Function to freeze user profile using Object.freeze
// function freezeProfile(user) {
//   const frozenUser = Object.freeze(user);
//   return frozenUser;
// }

// // Example usage
// const userProfile = {
//   name: "John Doe",
//   age: 30,
//   email: "john@example.com"
// };

// const profileUpdates = {
//   age: 31,
//   email: "john.doe@example.com"
// };

// // Update user profile
// const updatedUser = updateProfile(userProfile, profileUpdates);
// console.log(updatedUser); // Output: { name: "John Doe", age: 31, email: "john.doe@example.com" }

// // Freeze user profile
// const frozenUser = freezeProfile(updatedUser);

// // Try to modify frozenUser (won't have any effect)
// frozenUser.age = 32; // This won't change the value
// console.log(frozenUser); // Output: { name: "John Doe", age: 31, email: "john.doe@example.com" }
