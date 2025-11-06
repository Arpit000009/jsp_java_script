// sort(compare fn....) ---->mutable
// sort method will sort array inascending order or descending orderif do not pass any arguement it will sort on the basis of first didgit
// to sort numbers in ascending or descending order we need to pass a compare function as the arguement

// let arr = [100,11,2,250,9];0// arr.sort((a,b)=>{
//     return a-b; //asc
//     // return b-a //desc
// })

// console.log(arr)

// let str = 'this is javascript'
//  let arr1 = str.split(' ')
// let i = 0;
// let j = arr1.length-1;
// while(i<j){
//     let temp = arr1[i]
//     arr1[i] = arr1[j];
//     arr1[j] = temp;
//     i++;
//     j--;
// }

// console.log(arr1.join(' '))



function func(s1,s2){
let a = s1.split('').sort().join('');
let b = s2.split('').sort().join('');
if(a == b){
    return true;
}
return false;
}

console.log(func('listen','silent'))