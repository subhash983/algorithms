const maxChar = input => {
  let inputArr = input.split("");
  let charMap = {};
  let maxCount = 0;
  let maxCharacter;
  for (let char of inputArr) {
    charMap[char] = ++charMap[char] || 1;
    if (charMap[char] > maxCount) {
      maxCharacter = char;
      maxCount = charMap[char];
    }
  }
  return maxCharacter;
};

console.log(maxChar("applee 123333311"));
