//Delete occurrences of an element if it occurs more than n times
const deleteNth = (arr, n) => {
  let retArr = [];
  let counterObj = {};
  return arr.filter(val => {
    let propVal = counterObj[val] || 0;
    if (propVal < n) {
      counterObj[val] = propVal + 1;
      return val;
    }
  });
}

console.log(deleteNth([
  1, 1, 1, 1
], 2));
