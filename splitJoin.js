const lyrics = "amr sonar bangla. ami tomay valobashi.";
const parts = lyrics.split( ' ');
const sentence = lyrics.split('.')
const chars = lyrics.split('')
console.log(parts)
console.log(sentence)
console.log(chars)

const partial = lyrics.slice(5, 8)
console.log(partial)

// A function which returns the last character of a given string
// function returnLast(arr) {
//     return arr.at(-1);
//   }
  
//   let invoiceRef = "myinvoice01";
  
//   console.log(returnLast(invoiceRef)); // '1'
  
//   invoiceRef = "myinvoice02";
  
  
//   console.log(returnLast(invoiceRef));
//   invoiceRef = "myinvoice03";
//   console.log(returnLast(invoiceRef))
 const lines =[
    'I wanna sex with you hardly',
    'firstly I will touch your vagina',
    'then fingering your hole',
    'lastly your tears will be my success to hunting you'
 ];
 const oneLine =lines.join('. ')
 console.log(oneLine)