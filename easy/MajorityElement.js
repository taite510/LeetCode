// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

const majorityElement = function(nums) {
  const obj = {};
  let freq = 0;
  let num;
  for (let i = 0; i < nums.length; i++) {
      obj[nums[i]] = obj[nums[i]] + 1 || 1;
  }
  for (let key in obj) {
      if (obj[key] > freq) {
          freq = obj[key];
          num = key;
      }
  }
  return num;
};

console.log(majorityElement([1,2,3,2,5,3,6,5,2,1,8,5,3,2,2]))