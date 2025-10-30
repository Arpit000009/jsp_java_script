let num =64;
let s = '';
while(num){
    s = num%2 + s;
    num = parseInt(num/2);
}

console.log(s)