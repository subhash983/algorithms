const isPalindrome = word => {
  return (
    word ===
    word
      .split("")
      .reverse()
      .join("")
  );
};

const isPalindromeAnother = word => {
  for (let index = 0; index < Math.floor(word.length / 2); index++) {
    if (word[index] !== word[word.length - index - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindromeAnother("MAMA"));
