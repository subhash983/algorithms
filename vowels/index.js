const vowels = str => {
  const vowelsArray = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowelsArray.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
};

const vowelsRegex = str => {
  let matches = str.match(/[aeiou]/gi);
  return (matches || []).length;
};

console.log(vowelsRegex("Why"));
