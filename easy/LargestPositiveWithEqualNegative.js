// Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

// Return the positive integer k. If there is no such integer, return -1.

const findMaxK = function (nums) {
  nums.sort((a, b) => a - b)
  let i = 0
  let j = nums.length - 1
  while (i < j && nums[i] + nums[j] !== 0) {
    if (nums[i] + nums[j] > 0) {
      j--
    } else {
      i++
    }
  }
  return nums[i] + nums[j] === 0 ? nums[j] : -1
};

console.log(findMaxK([-1, 2, -3, 3, 4, -5]) === 3)