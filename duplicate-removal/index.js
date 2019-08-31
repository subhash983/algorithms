const removeDuplicates = arr => {
  //return [...new Set(arr)];
  return arr.filter((ele, index) => index === arr.indexOf(ele));
};

console.log(removeDuplicates([1, 4, 4, 7, 9, 9, 5, 7]));
