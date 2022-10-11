// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

var isMonotonic = function (nums) {
  const len = nums.length;
  if (nums[0] > nums[len - 1]) {
    for (let i = 1; i < len; i++) {
      if (nums[i - 1] < nums[i]) {
        return false;
      }
    }
  } else {
    for (let i = 1; i < len; i++) {
      if (nums[i - 1] > nums[i]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isMonotonic([3, 4, 4, 4, 7, 8]) === true)