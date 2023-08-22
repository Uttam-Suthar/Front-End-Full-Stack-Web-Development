// Which of the following statement is / are correct ?
//     Statement 1: null == 0
// Statement 2: null >= 0
// Statement 1 is false because null is treated as an absence of value by the ‘==’ operator.Statement 2 is true because null is converted to 0 by the ‘>’ operator, so 0 is equal to 0.

// Solution Description
// This is a peculiarity of Js.The operators ‘>’ and ‘<’ convert the ‘null’ to numerical 0 while the ‘==’ will treat it as an absence of value. 


// que 
// Set Parameter
// Set Parameter
// Send Feedback
// What should be the value of the first parameter so that the output that is console is 2 ?

function foo(x = 0, y) {
    console.log(x + y);
}
foo(?, 2)

// 0
// undefined

// Find Output of the code
// Send Feedback
// What will be the output of the given code ?

foo();
var foo = function hoisting() {
    console.log('Coding Ninja');
};

// TypeError
// Hurray! Correct Answer
// Solution Description
// Only function declarations are hoisted.The above code is a function expression. In the js function expressions are not hoisted.So, it will throw an error which is a  TypeError: expression is not a function. 

// Nested Function
// Send Feedback
// Which of these options will return ‘5’ as output for the following code ?
function foo(a) {
    function faa(b) {
        return a + b;
    }
    return faa;
}
// foo(2)(3);

// Fill in the blank
// Send Feedback
// Consider the following code:
arr = [1, 2, ' Coding Ninja', 4.5, 'This is a very important topic'];
arr.splice(3, ?, 'a', 'b');
// The positive integer value that should be put in place of ‘?’ so that the original array after splice becomes arr = [1, 2, ‘Coding Ninja’, ‘a’,’b’, 4.5, “This is a very important topic”] is ____?
// So, array.splice(3, 0, ’a’,’b’) will remove 0 elements from the 3rd index and add ‘a’, ‘b’ from the 3rd index.

// Choose correct statement / s
// Send Feedback
// Which of these statement / s are correct ?
//     Options
// This problem may have one or more correct answers
// Function splice() can be used to remove elements from an array.
// Function slice() will change the original array.                // wrong statment
// Function splice() can be used to add elements to an array.
// Function split() can only be used with strings.
//     Hurray! Correct Answer
// Solution Description
// Option B is incorrect because slice() will not change the original array, it will copy elements from the original array and return them to a new array.


// setTimeout()
// Send Feedback
// Which of these statement(s) is / are incorrect about setTimeout() ?
//     Options
// This problem has only one correct answer
// clearTimeout() is used to clear the interval set by setTimeout().
//     setTimeout() returns a numerical value which uniquely identifies the timer.
// In setTimeout(func) the default time set is 0ms.
// In setTimeout(func) the default time set is 1ms.
//     Hurray! Correct Answer
// Solution Description
// Explanation: in setTimeout, if the time interval is not defined then it will just wait for other tasks to finish and then it will execute the setTimeout function. 


// Even Handling
// Send Feedback
// What does the setTimeout() return?
//     Solution Description
// setTimeout() returns a timeoutID which is a positive integer value which identifies the timer created by the call to setTimeout().We can say that timeoutID is a unique identifier which can be passed to the clearTimeout() to cancel the timeout. 


// Promises
// Send Feedback
// How do you access the data after a promise is fulfilled ?
//     .then() can be used to access the data returned by the promise object. 


// Async / Await
// Send Feedback
// Choose the correct statement / s.
const foo = new Promise((res, rej) => {
    res(1);
});

async function faa() {
    return foo;
}

function res() {
    return Promise.resolve(foo);
}

console.log(foo === faa()); //statement 1
console.log(foo === res()); //statement 2

// Solution Description
// The foo() function will output a Promise resolved with value 1 as output.
// The faa() function will wrap the output of the foo() function into a Promise.resolve and it will return a different reference promise.So, faa() === foo is false.You should know that Async functions always return a promise.If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.
// The function res() will return a promise value referencing the same foo() promise.So, res() === foo() is true.



// Async / Await - I
// Send Feedback
// Which of these statements about async / await is / are CORRECT ?

//     The await keyword is only valid inside async functions within regular JavaScript code.
// We can replace most of the.then calls with await.

// Solution Description
// The first option is correct because await can only be used inside an async, if used outside, it will throw an uncaught error.

