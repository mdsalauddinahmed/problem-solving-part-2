function MinInArray(numbers){
    let max =numbers[0];  
  for(let i =0;i<numbers.length;i++){
    let index =i;
    let element =numbers[index]
    console.log(element)
    if(element<min){
        min=element;
    }
  }
  return min;
  
 
}
const heights = [167,190,120,163,87,500]
const tallest =MaxInArray(heights)
console.log("maximum height is",tallest)