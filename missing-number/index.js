const missingNumber = arr => {
  let sparseArr = arr.reduce((sparse, ele) => ((sparse[ele] = 1), sparse), []);
  return [...sparseArr.keys()].filter(key => key && !sparseArr[key]);
};

console.log(missingNumber([2, 4, 5, 8]));
