// Given an array of digit strings nums and a digit string target, return the number of pairs of indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target.

const numOfPairs = function(nums, target) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              counter++;
          }
          if (nums[j] + nums[i] === target) {
              counter++;
          }
      }

  }
  return counter;
};

console.log(numOfPairs(["777","7","77","77"], "7777"))