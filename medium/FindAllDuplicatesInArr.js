// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

const findDuplicates = function(nums) {
  const obj = {};
  const resArr = [];
  for (let i = 0; i < nums.length; i++) {
      obj[nums[i]] ? resArr.push(nums[i]) : obj[nums[i]] = 1;
  }
  return resArr;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]))