// //primtive datatypes in javascript
// let a = 30.604;
// console.log(typeof a);
//  a = "abc";
// console.log(typeof a);
//  a = true;
// console.log(typeof a);
//  a = null;
// console.log(typeof a);
//  a = undefined;
// console.log(typeof a);
//  a = 20n;
// console.log(typeof a);
//  a = Symbol(a);
// console.log(typeof a);

// let a = 10;       //res = 11 + '12 + 21 -0 + 21
// let b = 20;         //'111221' - 0 +21
// let res = ++a + '12' + ++b -0 + b;  //111221 + 21
// console.log(res);           //111242


// let a = 15;
// let b = a++;
// let res = ++a + '120' - 40*2 + b++ + '0';
// console.log(res);

let a = 20;
let b = '40';
let c = a++ + b -'0' - 0 * b + ++a;
console.log(c)

