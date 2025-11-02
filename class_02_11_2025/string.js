//ending with vowel
// function isVowel(str){
//     return 'aeiou'.includes(str.at(-1).toLowerCase())
// }

// let username = prompt('Enter your name')
// console.log(isVowel(username))

//! split
//it is used to convert a string into an array based on the seperator we pass
//seperator will not be included in array


//reverse a string based on characters and based on words
let str = 'this is javascript';
let revchar = str.split('').reverse().join('');
let revword = str.split(' ').reverse().join(' ')
console.log(revchar)
console.log(revword)


//! replace('prevSubstr','newSubstr)
//it will replace the firstoccurence of substring with a new substring
let sstr = 'Hahahahahaha'
console.log(sstr.replace('ha','He'))
console.log(sstr.replaceAll('ha','he'))

//! startsWith('substring)
//it returns a boolean value,it is used to identify if a string starts with a particular substring or not
console.log('javascript'.startsWith('java'))

function capatalize(str){
    let str1 = str.split(' ');
    for(let a=0;a<str1.length;a++){
       str1[a] = str1[a].charAt(0).toUpperCase() + str1[a].slice(1).toLowerCase()
        
    }
    return str1.join(' ')
}
console.log(capatalize('this is javascript'))