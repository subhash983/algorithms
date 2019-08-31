const mergeArray = (arr1, arr2) => {
  // let mergedArray = arr1.concat(arr2);
  // return mergedArray.sort();
  let index1 = 0;
  let index2 = 0;
  let current = 0;
  let merged = [];
  while (current < arr1.length + arr2.length) {
    let isArr1Depleted = index1 >= arr1.length;
    let isArr2Depleted = index2 >= arr2.length;

    if (!isArr1Depleted && (isArr2Depleted || arr1[index1] < arr2[index2])) {
      merged[current] = arr1[index1];
      index1++;
    } else {
      merged[current] = arr2[index2];
      index2++;
    }
    current++;
  }
  return merged;
};

console.log(mergeArray([1, 3, 5, 8], [2, 4, 7]));
