//problem-1 String comparison using toLowerCase toUpperCase
//----------------------------------------------------------
const userName = "blackPink";
const userInput = "blackPinK";
console.log(userName.toUpperCase());
console.log(userInput.toLowerCase());
console.log(userName.toLocaleLowerCase());
 if(userName.toLowerCase()===userInput.toLowerCase()){
    console.log('valid user')
 }else{
    console.log('invalid user')
 }
