let num = 5432;
let reverse = 0;
while(num){
    reverse = reverse*10 + num%10;
    num = parseInt(num/10);
}

console.log(reverse)