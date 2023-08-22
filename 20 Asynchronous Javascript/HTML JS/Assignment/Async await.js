function randomAsyncFunction() {
    // logic here
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("randomAsyncFunction completed");
            resolve();
        }, Math.random() * 100);
    });
}





async function asyncWithCallback(callback) {
    // Logic here
    await randomAsyncFunction();
    callback()
}


asyncWithCallback(() => {
    console.log("fsdfsa")
})



// function randomAsyncFunction() {
//     const time = Math.floor(Math.random * 100)
//     const x = setTimeout(() => {
//         console.log('finished!!')
//     }, time)
// }


// async function asyncWithCallback(callback) {
//     randomAsyncFunction()
//     setTimeout(() => {
//         callback()
//     }, 1000)
// }

// asyncWithCallback(() => {
//     console.log("fsdfsa")
// })
