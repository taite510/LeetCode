// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

const search = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = Math.floor((high - low + 1)/2) + low;
    if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid;
    }
  }
  return nums[low] === target ? low : -1;
};

console.log(search([-1,0,3,5,9,12], 9))