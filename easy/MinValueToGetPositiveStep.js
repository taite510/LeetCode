// Given an array of integers nums, you start with an initial positive value startValue.

// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

// Return the minimum positive value of startValue such that the step by step sum is never less than 1.

const minStartValue = function(nums) {
  let value = 1;
  let lowest = 1;
  for (let i = 0; i < nums.length; i++) {
      value += nums[i];
      if (value < lowest) {
          lowest = value;
      }
  }
  return 2 - lowest;
};

console.log(minStartValue([-3,2,-3,4,2]))