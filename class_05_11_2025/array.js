// let demo = [10,20,30,40,50,60]
// let res = demo.every((e1,i)=>{
//     console.log(i+1);
//     return e1%2==0;
// });

// console.log(res)

//! find(callback fn...)
//find returns the first matching element which satisfies the condition returned from callback function
// let demo = [10,20,30,41,50,60]
// let res = demo.find((e1)=>{
//     return e1%2!==0;
// })

// console.log(res)

//! filter(callback fn)
//filter will return a new array containing all the elements satisfies the condition returned from the callback function
// let nums = [11,20,31,40,51,60]
// let fil = nums.filter((e1)=>{
//     return e1%2==0
// })
// console.log(fil)

//! ques -> filter the names starting with the vowwel

// let names = ['atul','pranavi','anurag','vishali','ritesh','abhinavi']

// let vowel = names.filter((e1)=>{
//     let a = e1[e1.length-1];
//     if(a=='a'||a=='i'||a=='e'|| a =='o'||a=='u'){
//         return e1;
//     }
// })
// console.log(vowel)

//map is used to modify the elements of the array based on the expression we have returned from the callback function
//map returns a new array of the same length with updated elements

let arr = [4,7,8,13,14]
let r = arr.map((e1)=>{
    return e1*e1;
})
console.log(r);
let s = arr.map((e1)=>{
    return e1%2==0;
})
console.log(s);
let t = arr.map((e1)=>{

})
console.log(t)