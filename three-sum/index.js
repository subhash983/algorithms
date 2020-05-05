const threeSum = (nums) => {
  let retArr = [];
  if (nums.length < 3) {
    return retArr;
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    for (let j = i + 1, k = nums.length - 1; j < k; ) {
      if (nums[i] + nums[j] + nums[k] == 0) {
        retArr.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] == nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] == nums[k + 1]) {
          k--;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return retArr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
