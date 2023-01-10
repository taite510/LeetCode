// Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

// A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

// If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

// Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.

const findMiddleIndex = function (nums) {
  let right = nums.reduce((a, b) => a + b, 0) - nums[0]
  let left = 0
  let i = 1
  while (i < nums.length && left !== right) {
    right -= nums[i]
    left += nums[i - 1]
    i++
  }
  return left === right ? i - 1 : -1
};

console.log(findMiddleIndex([2, 3, -1, 8, 4]) === 3)