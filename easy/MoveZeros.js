// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] !== 0) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          break;
        }
      }
    }
  }
};


console.log(moveZeroes([0,1,0,3,12]))