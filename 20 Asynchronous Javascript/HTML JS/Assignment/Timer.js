const delay = (time) => {
    // Write the logic here
    new Promise(resolve => setTimeout(resolve, time));
}

let counter = () => {
    let intervalId;
    let count = 0;

    let start = async () => {
        intervalId = setInterval(async () => {
            console.log(count);
            count++;
        }, 1000);
    };

    let stop = () => {
        clearInterval(intervalId);
    };

    return {
        start,
        stop
        
        
    };
    
};

let count = counter()

count.start()
setTimeout(() => {
    count.stop()
},6000)





// const delay = (time) => {
//     return new Promise((resolve,reject) => {
//       setTimeout(resolve,time)
//     })
//   }
   
//   const counter = () => {
//     let time = 0
//     let pause = false
//     return {
//       start: async function start() {
//         for(let i = time;;i++) {
//           time++;
//           if(pause) break
//           console.log(i)
//           await delay(1000)
//         }
//       },
   
//       stop: function stop() {
//         pause = true
//       }
//     }
//   }
   
//   let count = counter()
   
//   count.start()
//   setTimeout(() => {
//     count.stop()
//   },6000)