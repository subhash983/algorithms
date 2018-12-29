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


console.log(vowels('Why dO you ask'));
