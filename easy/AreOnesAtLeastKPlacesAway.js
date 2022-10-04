// Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

var kLengthApart = function (nums, k) {
  let curr;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === 1) {
      curr = i;
      i++;
      break;
    }
    i++;
  }
  while (i < nums.length) {
    if (nums[i] === 1) {
      if (i - curr - 1 < k) {
        return false;
      }
      curr = i;
    }
    i++;
  }
  return true;
};

console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1]) === true)