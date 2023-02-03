function reverseString(text){
     let reverse ='';
         for(let i=text.length-1;i >=0;i--){
            let element =text[i]
            reverse=reverse+element;
         }
         return reverse;
}
const myString = 'she is  out of control';
const reversed=reverseString(myString)
console.log(reversed)

// word reverse
function wordRevers(str){
    const words = str.split(' ');
    const result = [];

   // console.log(words)
   for(let i=words.length-1;i>=0;i--){
    const element=words[i];
      result.push(element)


   }
   const reverseWord = result.join(' ')
   return reverseWord;

}
const myStrings="she is too boring and also not my type thats why I forget her day by day" ;
console.log(wordRevers(myStrings))