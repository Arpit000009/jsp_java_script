! falsy values
0, 0n, null, undefined, '', false, NaN



${} ---> we can use the expression or value inside string through this and the string shoud be written inside backtics ``


number method
number('number inside a string')   //// when only number then it will return number else it will return NaN


////switch

switch(case){
    case 1:{
        //instructions
        break;
    }
    case 2:{
        //instructions
        break;
    }
    case 3:{
        //instructions
    }
    case 4:{
        //instructions
    }
    .
    .
    .
    .
    default{
        //instructions        executed when no case gets executed
    }
}

if break is not passed then there will be a fall through condition that means all the conditions bellow the matching condiotion will alse get executed



looping statements
//to execute code repeteadly

//for
for(init;condition;updation){
    //instructions
}

//while
while(condiotion){
    //instruction 
    ////also updation inside this block only
}