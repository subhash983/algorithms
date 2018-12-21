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

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
