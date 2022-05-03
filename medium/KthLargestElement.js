// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// @param {number[]} nums
// @param {number} k
// @return {number}

const findKthLargest = function(nums, k) {
  nums.sort((a,b) => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  })
  return nums[k - 1]
};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))

