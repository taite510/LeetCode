// You are given an integer array nums consisting of 2 * n integers.

// You need to divide nums into n pairs such that:

// Each element belongs to exactly one pair.
// The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.

const divideArray = function(nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
      obj[nums[i]] = obj[nums[i]] + 1 || 1;
  }
  for (let num in obj) {
      if (obj[num] % 2 !== 0) {
          return false;
      }
  }
  return true;
};

console.log(divideArray([3,2,3,2,2,2]))