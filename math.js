const sq =Math.pow(3,4)
console.log(sq)
const number1 =34;
const number2=34;
// const gap =number1-number2;
const gap =Math.abs(number2-number1);
if(gap<5){
    console.log("this guys are friend")
}else{
    console.log('this guys stay apart')
}

const number =2.54566;
const fullNumber = Math.round(number)
console.log(fullNumber);
const  result2 =Math.ceil(2.00001);
console.log(result2);
const result3 =Math.floor(456.259)
console.log(result3);


// random
//console.log(Math.random());
//const random = Math.random()*100;
const random = Math.round(Math.random()*100);
console.log(random)
for(let i=0;i<20;i++){
    const ran = Math.round(Math.random()*6);
    console.log(ran)
}
// try to Mdn math search