JS code execution

js code is executed in two memeory areas
1. heap Area----> we store the objects  (holds only the oject)
2.call Stack----> cose is executed in two phases
    1.memeory allocation(all the declearations are done)
    2.code execution(initilization,loop function call,printions statements....)





    if let is used if we try to use that before its declearation it will throw error.the area above the let var is temporal dead zone.
    let a;
    console.log(a); // undefined

    console.log(a1);
    let a1;
    console.log(a1);    /// this code will throw error



HOISTING
* it is a process of moving all the variables and fucntions to the top of their respected scope before code execution.
// all the declearation are done first
//var,let and const all are hoisted but let and const are in temporal dead zone


//tdz 
// js enjine dosent allow us to use variable declearaed with let and const before hte line of declearariton,nbecouse theere is no valur available
//so beforethe line of  declearation let and const will bre in tdz
a = 60; // tenmporal dead zone
console.log(a); 
let a = 10;

\
let a;
console.log(a) //


class notes link https://codeshare.io/5QQJZJ    😊
