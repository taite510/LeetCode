// You are given a 0-indexed array of distinct integers nums.

// There is an element in nums that has the lowest value and an element that has the highest value. We call them the minimum and maximum respectively. Your goal is to remove both these elements from the array.

// A deletion is defined as either removing an element from the front of the array or removing an element from the back of the array.

// Return the minimum number of deletions it would take to remove both the minimum and maximum element from the array.

var minimumDeletions = function (nums) {
  let [max, min] = [[-Infinity, null], [Infinity, null]];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max[0]) {
      max = [nums[i], i];
    }
    if (nums[i] < min[0]) {
      min = [nums[i], i];
    }
  }
  const left = Math.max(max[1], min[1]) + 1;
  const right = nums.length - Math.min(max[1], min[1]);
  const both = Math.min(min[1] + 1, nums.length - min[1]) + Math.min(max[1] + 1, nums.length - max[1]);
  return Math.min(left, right, both);
};

console.log(minimumDeletions([2, 10, 7, 5, 4, 1, 8, 6]) === 5)
console.log(minimumDeletions([0, -4, 19, 1, 8, -2, -3, 5]) === 3)
