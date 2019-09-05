const removeDuplicatesFromString = input => {
  //return [...new Set(input.split(""))].join("");
  let index = 0;
  let finalString = "";
  for (const char of input) {
    if (index === input.indexOf(char)) {
      finalString += char;
    }
    index++;
  }
  return finalString;
};

console.log(removeDuplicatesFromString("testeswreggergege"));
