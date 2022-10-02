// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

const findDisappearedNumbers = function (nums) {
  const set = new Set(nums);
  const resArr = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      resArr.push(i);
    }
  }
  return resArr;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))