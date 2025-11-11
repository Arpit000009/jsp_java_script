function getOTP(){
    let OTP = Math.round(Math.random()*8999)+1000;
    alert("your otp is:"+OTP)
    let confirm = parseInt(prompt("confirm your otp"));
    if(confirm===OTP){
        console.log("login sucess");
        
    }else{
        console.log("login failed")
    }
    
   
    
}
getOTP();