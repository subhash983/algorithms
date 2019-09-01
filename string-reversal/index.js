const reverseString = input => {
  //   return input
  //     .split("")
  //     .reverse()
  //     .join("");

  let reversedString = "";
  for (const char of input) {
    reversedString = char + reversedString;
  }
  return reversedString;
};

console.log(reverseString("hello"));
