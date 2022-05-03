// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

const threeSum = function(nums) {
  const arr = [];
  const obj = {};
  nums = nums.sort((a,b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = nums.length - 1; k >= j + 1; k--) {
         if (nums[k] < (nums[i] + nums[j]) * -1) {
           break;
         } else if (nums[k] === (nums[i] + nums[j]) * -1) {
           let triplet = [nums[i], nums[j], nums[k]]
           if (!obj[`${triplet}`]) {
             arr.push([nums[i], nums[j], nums[k]]);
             obj[`${triplet}`] = true;
           }
           break;
         }
      }
    }
  }
  return arr;
};

console.log(threeSum([-1,0,1,2,-1,-4]))