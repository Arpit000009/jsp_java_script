let num = 153;
let newnum = num;
let num2 = num;
let count = 0;
while(num){
    num = parseInt(num/10);
    count++;
}

let armstrong = 0;
while(newnum){
    armstrong = armstrong + (newnum%10)**count;
    newnum = parseInt(newnum/10);
}

if(armstrong == num2){
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}