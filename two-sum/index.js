const twoSum = (inputArr, target) => {
  let retArr = [];
  for (let index = 0; index < inputArr.length; index++) {
    let remainder = target - inputArr[index];
    let remainderIndex = inputArr.indexOf(remainder, index + 1);
    if (remainderIndex > -1) {
      retArr = [index, remainderIndex];
      break;
    }
  }
  return retArr;
};

const twoSumOptimized = (nums, target) => {
  let compsObj = {};
  for (let index = 0; index < nums.length; index++) {
    if (compsObj[nums[index]] >= 0) {
        return [compsObj[nums[index]],index]
    }
    compsObj[target - nums[index]] = index;
  }
};

console.log(twoSumOptimized([0, 4, 3, 0], 0));
