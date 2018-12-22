const isPalindrome = str => {
  let reveresedString = str.split("").reverse().join("");
  return str === reveresedString;
};

console.log(isPalindrome('malyylam'));
