const firstNonRepeatingChar = input => {
  let occurenceObj = {};
  let index = 0;

  for (let char of input) {
    if (occurenceObj[char] !== undefined) {
      occurenceObj[char] = input.length;
    } else {
      occurenceObj[char] = index;
    }
    index++;
  }

  let minIndex = input.length;

  for (const key in occurenceObj) {
    if (occurenceObj[key] < minIndex) {
      minIndex = occurenceObj[key];
    }
  }

  return minIndex === input.length
    ? "No Non-Repeating Character Found"
    : input[minIndex];
};

const firstNonRepeatingCharAnother = input => {
  let index = 0;
  for (const char of input) {
    if (
      input.indexOf(char) === index &&
      input.indexOf(char, index + 1) === -1
    ) {
      return char;
    }
    index++;
  }
  return null;
};

console.log(firstNonRepeatingCharAnother("dxddx3ertr3"));
