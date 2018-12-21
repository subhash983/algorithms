const chunk = (arr, chunkSize) => {
  let result = [];
  let counter = 0;
  let chunkArr;
  for (let val of arr) {
    if (counter === 0) {
      chunkArr = [];
    }
    chunkArr.push(val);
    counter++;
    if (counter === chunkSize) {
      counter = 0;
      result.push(chunkArr);
    }
  }
  if (counter !== 0) {
    result.push(chunkArr);
  }
  return result;
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 10));
