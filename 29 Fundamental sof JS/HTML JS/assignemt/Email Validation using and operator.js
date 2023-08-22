// Email Validation using and operator
// Send Feedback
// You have already completed the email validation program using "||" operator.

// Now modify the code and rewrite the conditions to validate the email using the "&&" operator.



// Objectives

// Additionally, include one more condition that:
// Email  should have at least 3 characters before “@.”
// If the email is valid then store the value of email in the result variable with a message.


// Example: result = " xyz@gmail.com is valid"
// otherwise store "invalid email" in the result variable.



function main(email){
    let result;
    //write your program here to verify the email
    
    const emailLen = email.length;
    const dotIndex = email.lastIndexOf(".");
    const atIndex = email.lastIndexOf("@");
    const lastIndex = emailLen - 1;

    if (emailLen >= 11 && lastIndex - dotIndex >= 2 && lastIndex - dotIndex >= 3 && dotIndex - atIndex >= 3 && atIndex >= 3) {
        result = `${email} is valid`;
    } else {
        result = "invalid email";
    }
    //assign your final ans in result;
    return result;
}