function topper(a,b,c){
    let num1=a;
    let num2=b;
    let num3=c;
    if(num1>num2){
        if(num1>num3){
            console.log("jim will get the cake")
        }
    }else if(num2>num3){
        console.log("Dela will get this cake")
    }
    else{
        console.log("chinku wil get the cake")
    }
}
 const top1 =topper(69,97,99)
 const top2 =topper(84,99,77)
 
 console.log(Math.max(7,38,383,8378,38));

 function maximum(param1,param2,param3){
    const topMax=Math.max(param1,param2,param3)
    return topMax;
 }
 const top=maximum(45,87,60)
 console.log(top)

 function minimum(param1,param2,param3){
    const topMin=Math.min(param1,param2,param3)
    return topMin;
 }
 const lastOne=minimum(45,87,60)
 console.log(lastOne)