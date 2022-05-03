// Given an integer array nums (0-indexed) and two integers target and start, find an index i such that nums[i] == target and abs(i - start) is minimized. Note that abs(x) is the absolute value of x.

// Return abs(i - start).

// It is guaranteed that target exists in nums.

const getMinDistance = function(nums, target, start) {
  let position;
  let i = 1;
  if (nums[start] === target) {
    return 0;
  }
  while (position === undefined) {
    if (nums[start + i] === target) {
      position = start + i;
    } else if (nums[start - i] === target) {
      position = start - i;
    }
    i++;
  }
  return Math.abs(position - start)
};

console.log(getMinDistance([1,2,3,4,5,6,1], 6, 4))