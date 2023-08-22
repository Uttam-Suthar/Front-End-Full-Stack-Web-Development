//que
// Array HOFs
// Send Feedback
// Complete a function modifyArray() which takes an array of integers and returns an array of elements.The result array will contain the double of all the positive elements of the input array and all the negative elements will be removed(including 0).Higher order array methods should be used to achieve the following.Remove any element which is not a number.The operations should be stable.
//     modifyArray([1, 2, -1, undefined, 0, 7]) // Returns [2,4,14]






function modifyArray(arr) {
    // Write the logic here
    let positiveNum = arr.filter((value) => {
        return typeof value === "number" && value > 0
    });
    let twicePositiveNum = positiveNum.map(value => value * 2);
    return twicePositiveNum

}

process.stdin.resume();
process.stdin.setEncoding('utf8');

let remainder = '';
process.stdin.on('data', function (chunk) {
    let arr = chunk.toString().split(' ');
    arr = arr.map((val) => parseInt(val))

    let ans = modifyArray(arr)
    ans = ans.join(' ')

    process.stdout.write(ans);
    process.exit();
});