// You are given a 0-indexed integer array nums. An index i is part of a hill in nums if the closest non-equal neighbors of i are smaller than nums[i]. Similarly, an index i is part of a valley in nums if the closest non-equal neighbors of i are larger than nums[i]. Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].

// Note that for an index to be part of a hill or valley, it must have a non-equal neighbor on both the left and right of the index.

// Return the number of hills and valleys in nums.

const countHillValley = function (nums) {
  let count = 0;
  let j = 0;
  let inc;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      inc = nums[i] > nums[j];
      j = i;
      break;
    }
  }
  for (let i = j + 1; i < nums.length; i++) {
    if (inc) {
      if (nums[i - 1] > nums[i]) {
        count++;
        inc = false;
      }
    } else {
      if (nums[i - 1] < nums[i]) {
        count++;
        inc = true;
      }
    }
  }
  return count;
};

console.log(countHillValley([2, 4, 1, 1, 6, 5]) === 3)