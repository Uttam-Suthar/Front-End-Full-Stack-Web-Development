
        const studentMarks = {
          John: [85, 90, 92, 88, 87],
          Jane: [92, 95, 89, 91, 94],
          David: [78, 85, 90, 92, 84],
          Emily: [90, 88, 92, 87, 91],
          Michael: [86, 92, 90, 89, 94]
        };
      
        function calculateAverage(marks) {
          let sum = 0;
          for (let i of marks) {
            sum += i;
          }
          return sum / marks.length;
        }
      
        function findClassTopper(studentMarks) {
          let highestAverage = 0;
          let classTopper;
          
      
          for (let student in studentMarks) {
            const average = calculateAverage(studentMarks[student]);
            if (average > highestAverage) {
              highestAverage = average;
              classTopper = student;
            }
          }
          return classTopper;
        }
      



      //     function findClassTopper(studentMarks){
//         //Implement your function here
        
//             let highestAverage = 0;
//     let topperName = "";

//     for (let student in studentMarks) {
//         let marks = studentMarks[student];
//         let totalMarks = marks.reduce((total, mark) => total + mark, 0);
//         let average = totalMarks / marks.length;

//         if (average > highestAverage) {
//             highestAverage = average;
//             topperName = student;
//         }
//     }

//     return topperName;
//     }