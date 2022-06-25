// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

const pivotIndex = function(nums) {
  let right = 0;
  let left = nums.reduce((a,b) => a + b);
  let i = 0;
  let res = -1;
  while (i < nums.length) {
    if (right === left) {
      res = i - 1;
    }
    if (nums[i-1]) {
      right += nums[i-1];
    }
    left -= nums[i];
    i++;
  }
  if (right === left) {
    res = i - 1;
  }
  return res;
};

console.log(pivotIndex([1,2,3,4,5,5]))