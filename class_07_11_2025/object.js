//! OBjects
//objects is used to represent a real world entity in program
//object in js is the collection if key and value pair is called as property

//!. Creating an Object
//1. by using literal {};
// let obj = {};
//console.log(typeof obj) // object
//console.log(type of []) //object
//console.log(typeof null); // object

//let arr = [];
// console.log(Array.isArray(arr))

//! Object with properties
let person = {
    name : "ABC",
    age: 50,
    education: "Btech",
    isWorking: true,
    7:"thala"
}
// accessing the properties of an object
console.log(person.age)
console.log(person["7"])

//updating the property
person.isWorking = false;
person['name'] = "Shubham";
console.log(person)

//! method
// a function inside an object is called as a method
let obj2 = {
    name:"Atul",
    age:30,
    //first way to decleare a method -> in key anfd value
    details:function(){
        console.log("this is details method")
    },
    demo(){
        console.log("this is demo")
    },
};

obj2.details();
obj2.demo()
obj2['detail']()


//this keyword
//this keyword is a reference variable, it  reference to the object which is currenctly

console.log(this); // globally->window (global object)
function fun(){
    console.log("insde the function");
    console.log(this)//window
}

fun();

console.log(this)

let obj = {
    
}
