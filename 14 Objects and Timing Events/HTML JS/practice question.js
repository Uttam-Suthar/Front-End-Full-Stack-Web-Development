var student = {
    firstName: "jonathan",
    lastName: "doe"
}

delete student.firstName;
console.log(student.firstName+ " "+ student.lastName);

// out ans  undifine doe


var obj1 = {};
var obj2 = new Object();
var obj3 = {};
console.log(obj1==obj2, obj1 == obj3);

// false false


var abc = setInterval(counting, 300);
var count = 0;

function counting() {
    console.log(count++);
    if(count == 5) {
        clearInterval(abc);
    }
}

// ans 0 1 2 3 4


setTimeout(function () {
  console.log("a")
},20)
setTimeout(function () {
  console.log("b")
})
console.log("c")

// ans c b a

var arr = []

arr.push("hello")
arr.hello = 0
var value = 0
for(var i = 0;i < 5; i++) {
    value = arr[value]
}
console.log(value)

// hello

function change1(obj) {
  obj.name = "ninjas"
}
function change2(obj) {
  obj = {name: "changed"}
}

var obj = {name:"coding"}

change1(obj)
change2(obj)
console.log(obj.name)  

// ninjas


var d = {h: 2, j: 3}

var e = d
var f = {...d}

console.log(e === d)
console.log(f === d)


// true false


var d = {h: 2, j: 3}

var e = d
var f = {...d, j: 4}

console.log(f.h)
console.log(f.j)

// 2 4