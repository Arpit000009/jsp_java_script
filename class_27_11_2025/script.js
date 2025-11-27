//! ES6 features
//1. spread and rest(...)
//spread and rest are the operators in js they denoted by ...
//spread is ised to unpack an iterable like array string objects
let str = "abcdef";
console.log(...str);
console.log("a","b","c","d","e","f");

//! spread on arrays
//let arr = [10,20,30,40];
let b = Array;

//! array
let arr = [10,20,30,40,];
let [,,c,] = arr;
console.log(c);
let arr2 = [10,[20,[30,[40,[50,[60]]]]]];
[a,[b,[c,[d,[e,[f]]]]]] = arr2;

console.log(e);

// objects 
let person = {
    name : "abc",
    age: 40,
    skills:["html","css","js"],
    advance:{
        libraries:{

            react: "basics",
        },
        frameworks:{
            angular:"advance",
        },
    }
}

