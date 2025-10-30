// Types of fuctions
//! 1.named function
// named function is a function with identifier     //function func_nae({
//                                                                  })

// let b;
// function sum(a,b){
//     console.log(a+b);
// }
// sum(10,20);
// let a = 20;
// console.log(a,b)

// //! 2
// let a1 = 30;
// let a2 = 50
// function fun(){
//     console.log(a1+a2)
// }
// fun()

// //! 3
// function fun(){
//     console.log(a1+a2)
// }
// let a1 = 30
// let a2 = 50
// fun()

// //! 4
// function fun(){
//     let a = 20;
//     console.log(a+b)
// }
// let b = 30;
// fun();

// //! 5
// fun();
// function fun(){
//     console.log(10)
// }

//!types of functions

// !2 Anonymus function
// a function without identifier
// let a = function(){
//     console.log("anomyous")
// }

//! 3.function expression
// An expression of storing a function inside a variable as a value
//In js function can be treated as a value and cab be treated as a value and can be stored inside a variable in function expression we call the function with the help of variable name in which function us stored
// let a1 = function sum(){
//     console.log("I am sum fucntion")
// }


//! 4. first class function
// a function which is treated as a value is called as first class function
//! example ->sum

// !5. HOF(higher order function)
//a functiob which accepts a another function as arguement or 
// a function which returns  a function
//ex -> calc
// function calc(a,b,c){
//     a(b,c);
// }
// calc(sum,20,30)
// calc(mult,20,30)
// calc(div,20,10)

// function sum(a,b){
//     console.log(a+b)
// }
// function mult(a,b){
//     console.log(a*b)
// }
// function div(a,b){
//     console.log(a/b)
// }

//a function which returns a fucntion
// function outer(){
// return function(){
//     console.log("inner")
// }
// }
// let op = outer();
// op();

//!6 callback function
//a function which is passed as arguement to another
//ex-> sum,mult,div

//!7 IIFE(Immediately Invoked function expression)
//it is the only function which can not be reused
//we have two paranthesis i first we decleare the fucntion and second parenthesis we call the function 
//we can not store this in a variable
// let p = (function sqr(a){
//     // console.log(a)
//     return a*b
// })(5);

//!8. Arrow function
//arroe function is way to write function expresssion in a shorter syntax
//arrow function was introduced in es6
//arrow function has a feature called implicit return

//!implicit return
//if we have a single statement inside the function body,we do not need return keyboard and curyly return
//let sum = (a,b) => a+b;
// console.log(sum(10,15));

//! if we do have exactly one parameter we do need paranthesis
//let sqr = () =>5*5;
// console.log(sqr());

// function HOF(a){
//     a();
//     console.log(a)
// }
// HOF(()=>{
//     console.log("callback")
// })

//! nested function
//if we decleare a fucntion in =side another function
// function outer(){
//     inner();
//     console.log("outer");
//     function inner(){
//         console.log("inner")
//     }
// }
// outer();

// function gp(){
//     console.log("gp");
//     function p(){
//         console.log("p");
//         function c(){
//             console.log("c")
//         }
//         c();
//     }
//     p();
// }
// gp();

//! closure 
// a closure is an object in js which is created whenever a child function needs the variable from its outer env(parent function), the required variable will be stored inside the closure
//clodure will be available to the child function even after the prent function has finished execution
debugger;
function outer(){
    let count = 0;
    let count1 = 10;
    return function inner(){
        console.log(count++);
    };

}
let  counter = outer();
counter();
counter();
counter();