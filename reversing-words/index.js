const reverseWords = (sentence) =>{
   return sentence.split(/\s/).reverse().join(' ');
}

console.log(reverseWords('Hello World!, how are you?'));
