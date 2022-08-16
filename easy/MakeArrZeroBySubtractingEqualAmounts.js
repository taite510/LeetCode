// You are given a non-negative integer array nums. In one operation, you must:

// Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
// Subtract x from every positive element in nums.
// Return the minimum number of operations to make every element in nums equal to 0.

const minimumOperations = function(nums) {
  let count = 0;
  nums.sort((a,b) => a - b);
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0 & nums[i] !== nums[i + 1]) {
          count++;
      }
  }
  return count;
};

console.log(minimumOperations([1,5,0,3,5]))