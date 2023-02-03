//  function fibo(num){
//     let seris =[];
//     for(let i=num;i>=num;i--){
//         let element=num[i];
//         element=num[i-1]+num[i-2];
//         seris.push(element);
//     }
//     return seris;
//  }
//  const fibonacci=fibo(50)
//  console.log(fibonacci)
const fibo =[0,1]
for(let i=2;i<=30;i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
}
console.log(fibo)

// function
const fibonacci = (n) => {
    if(n <= 1) {
      return n;
    }
  
    const result = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      result[i] = result[i - 2] + result[i - 1];
    }
  
    return result;
  }
  const fibonaci =fibonacci(6)
  console.log(fibonaci)

//   while loop
function fi(n){
    let a=0;
    let b=1;
    count =2;
    while(count<=n){
        let c =a+b;
        a=b;
        b=c;
        console.log(c)
        count++;
          

    }
   
}
const wo =fi(8)
console.log(wo);