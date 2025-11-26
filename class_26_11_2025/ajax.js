//! ajax
// ajax is a technique used by web developers to change the specific section of the webpage without a full page reload
//! we use
//1. XMLHttpRequest
//! 2. fetch(url)
//fetch is used tomake a http request to the server,it will accept two arguements
//1st arguement is an optional object
//! steps to fetch an api
//1-> fetch will return a promise
//2->sfter consuming that proimse we eill get respense object
//3-> respense object is having a method called as json(), we need to call that
//4-> json method will again rwturen a promise that we can return from one than block and can handle in another than block, after thet we will recieve data
let op = fetch("https://fakestoreapi.com/products");
op.then ((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

//! using async await to fetch an api
async function getData(){
    try{.00
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        console.log(data);
    } catch(err){
        console.log(err)
    }
}

getData();