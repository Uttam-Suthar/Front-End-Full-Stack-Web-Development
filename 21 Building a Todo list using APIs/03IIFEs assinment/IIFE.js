//Write your function here
//que
// IIFEs
// Send Feedback
// Create an IIFE which returns two functions, increase and initialize.The function initialize will take an initial value of the counter and increment would increase the counter by 1 and return it.
// For initial value 1 it will give 2, 3, 4...



const counter = (function () {
    // Write the logic here
    let count = 0;

    function increase() {
        count++;
        return count;
    }

    function initialize(initialValue) {
        count = initialValue;
    }

    return {
        increase: increase,
        initialize: initialize
    };
})()




// Input and output has already been handled for you



process.stdin.resume();
process.stdin.setEncoding('utf8');

let remainder = '';
process.stdin.on('data', function (chunk) {
    let lines = chunk.toString().split(' ');
    let start = lines[0];
    let n = lines[1];
    let ans = ''
    counter.initialize(start)
    for (let i = 0; i < n; i++) {
        ans += counter.increase() + '\n'
    }

    process.stdout.write(ans);
    process.exit();
});