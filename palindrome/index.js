const isPalindrome = str => {
  let reveresedString = str
    .split("")
    .reverse()
    .join("");
  return str === reveresedString;
};

const isPalindromeAnother = str => {
  let strArray = str.split("");
  for (let i = 0; i < Math.ceil(strArray.length / 2); i++) {
    if (strArray[i] !== strArray[strArray.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindromeAnother("malyylam"));
