// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

const missingNumber = function(nums) {
  const sortedNums = nums.sort((a,b) => a - b);
  let i = 0;
  while (i < sortedNums.length) {
      if (sortedNums[i] !== i) {
          break;
      }
      i++;
  }
  return i;
};