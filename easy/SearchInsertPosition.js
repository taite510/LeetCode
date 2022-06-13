// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const searchInsert = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = Math.floor((high - low - 1) / 2) + low;
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  if (nums[low] === target) {
    return low;
  } else {
    if (nums[low] < target) {
      return low + 1;
    } else {
      return low;
    }
  }
};

console.log(searchInsert([1,2,3,5,6,7,8,11,14,15], 9))