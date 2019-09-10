const largestSum = arr => {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1] + arr[arr.length - 2];
};

console.log(largestSum([1, 7, 9, 15, 8, 25]));
