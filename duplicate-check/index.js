// const containsDuplicate = (nums) => {
//   return nums.some((ele, inxdx) => {
//     return nums.indexOf(ele) != inxdx;
//   });
// };

// const containsDuplicate = (nums) => {
//   const countMap = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (countMap[nums[i]]) {
//       return true;
//     } else {
//       countMap[nums[i]] = 1;
//     }
//   }
//   return false;
// };

const containsDuplicate = (nums) => {
  const numsSet = new Set(nums);
  return numsSet.size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 4]));
