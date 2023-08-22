var susan ={
  name:"susan",
  age:30
}

var raj = susan;
console.log(raj)
raj.name="raj";
console.log(raj)
console.log(susan)


var susan ={
  name:"susan",
  age:30
}

var raj = {...susan}
console.log(raj)
raj.name="raj";
console.log(raj)
console.log(susan)

//or
var raj = Object.assign({},susan);
console.log(raj)
raj.name="Raj";
console.log(raj)
console.log(susan)


var arr=[1,2,3,4];
var arr2=arr;
console.log(arr)
arr2.push(22);
console.log(arr2)
console.log(arr)

var arr3=[...arr]
console.log(arr3)
arr3.pop()
console.log(arr3)
console.log(arr)

//or
var arr4 = arr.map(el=>el);
arr4.push(1000)
console.log(arr4)
console.log(arr)

/*var count=10;

function timer(){
  if(count==0){
    console.log("time up!!")
    clearInterval(id)
    return
  }
  console.log(count)
  count--
  
}

var id = setInterval(timer,1000)
*/


/*	var sec=1;
		function sayHello(){
      
  			console.log("after",sec)
  			sec++
      if(sec==6){
        clearInterval(id)

      }
      return
}

//setTimeout(sayHello,2000)
//
var id = setInterval(sayHello,1000)
clearInterval(id)
*/

/*


var arr=[20,30,40,50]

		arr.prob1="deme"


		arr[10]=80;    // length is 11 6*empty space
		for(var i in arr){
      console.log(i)
    }
		
		console.log(arr)

		var obj={
			"0":20,
			"1":30,
			"2":40,
			"3":50
		}

		obj.prob1="demo"
		console.log(obj)
*/

/*
var student= {"-name":"abc",
              rollno: 135,
              marks:90, 
              "2":"two",
             address:{city:"New Dehli",
                     pincode:110032}
             };
console.log(student)
console.log(student.address)
console.log(student.address.city)
console.log(student.address["city"])
console.log(student["address"]["city"])
*/
/*
var values= Object.values(student)
console.log(values)

var keys= Object.keys(student)
console.log(keys)
var keys= Object.getOwnPropertyNames(student)
console.log(keys)

for(var prop in student){
  console.log(prop,student[prop])
}
*/

/*
function printproperty(obj,pro){
  console.log(obj[pro])
}


printproperty(student,"marks");
var pro = "marks"
printproperty(student,pro);
var pro = "-name"
printproperty(student,pro);
*/