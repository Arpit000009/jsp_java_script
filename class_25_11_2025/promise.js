// let p1 = new Promise((res,rej)=>{
//     let random = Math.round(Math.random()*10);
//     setTimeout(()=>{
//         if(random>5){
//             res("this is the data");
//         }
//         else{
//             rej("this is the error")
//         }
//     },5000);
// })

// console.log(p1);

// p1.then((data)=>{
//     console.log(data);
// });

// p1.catch((err)=>{
//     console.log(err)
// })
// p1.finally(()=>{
//     console.log("finally")
// })

//! async await (used ti handle promise)
//async await are the keywords in js they makes it more readable to work with promises
//async is keyword used to decleare an asynchronus function
//it is ued to specify taht the function contains some asynchronus code
//async function will always return a promise

//await 
//await keyword can only be used inside async funciton
//await is used to pause the execution of the function untill promise is resolved or rejected
//asynv function fun(){
//  return 10; // if we return a non promise data, it will wrap that in a promise and then return it
//}
//console.log(fun());

let p = new Promise((res,rej)=>{
    let random = Math.round(Math.random()*10);
    setTimeout(()=>{
        if(random>5){
            res("this is the data")
        }
        else{
            rej("this is err")
        }
    },5000)
})

console.log("hello");
async function getData(){
    console.log("Inside the function");
    try{
        let data = await p;
        console.log(data);
    }
    catch(err){
        console.log(err)
    }
    console.log("end of function")
}

getData();
console.log("Bye")