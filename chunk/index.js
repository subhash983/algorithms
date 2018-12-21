const chunk = (arr, chunkSize) => {
  let chunkedArrays = [];
  for (let val of arr) {
    let lastElement = chunkedArrays[chunkedArrays.length - 1];
    if (!lastElement || lastElement.length === chunkSize) {
      chunkedArrays.push([val]);
    } else {
      lastElement.push(val);
    }
  }
  return chunkedArrays;
};

const chunkAlternate = (arr, chunkSize) => {
  let chunkedArrays = [];
  let index = 0;
  while (index < arr.length) {
    chunkedArrays.push(arr.slice(index, index + chunkSize));
    index += chunkSize;
  }
  return chunkedArrays;
};

console.log(chunkAlternate([1, 2, 3, 4, 5, 6, 7, 8], 10));
