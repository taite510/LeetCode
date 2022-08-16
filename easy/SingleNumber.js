// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = function(nums) {
  const numObj = {};
  for (let i = 0; i < nums.length; i++) {
      numObj[nums[i]] !== undefined ? delete numObj[nums[i]] : numObj[nums[i]] = 1;
  }
  return Object.keys(numObj)[0];
};

console.log(singleNumber([4,1,2,1,2]))