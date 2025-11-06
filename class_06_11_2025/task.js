//!1. from a sentence find the first word longer than 5 letters.
// const str = 'we are enjoying javascript'
// let res = str.split(' ').find((el)=>{
//     return el.length>5;
// })
// console.log(res)

//2. Find the first string that contains the letter z
// const arr = ['fast','zebra','lazy','zoom']
// let res = arr.find((e1)=>{
//     return e1.includes('z');
// })
// console.log(res)

//!3. gert all words from string that starts with capitalk letter

// const str = "JavaScript is FUN and Powerfull";
// let res = str.split(' ').filter((e1)=>{
//     return e1.charAt(0) == e1.charAt(0).toUpperCase()
// })

// console.log(res)

//!4. convert all words in array to their first 3 letters

// let arr = ['first','second','third']

//! 6. give the count of characters in ech word

//!8. replace all vowelds in wods with '*'
const arr = ['apple','banana','grape'];
let res = arr.map((e1)=>{
    return e1.split("").map((e1)=>{
        if('aeiou'.includes(e1)){
            return '*'
        } else{
            return e1
        }
    }).join("")
})

console.log(res)

//!

let str1 = 'this is javascript'