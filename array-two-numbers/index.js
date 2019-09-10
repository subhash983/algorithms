//Check whether any two numbers in an array sums to a given number?
const findNumbers = (arr, num) => {
  for (let index = 0; index < arr.length; index++) {
    let otherNum = num - arr[index];
    let otherNumIndex = arr.indexOf(otherNum);
    if (otherNumIndex !== -1 && index !== otherNumIndex) {
      return true;
    }
  }
  return false;
};

console.log(findNumbers([2, 4, 4, 5], 4));
