// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.

var sortArrayByParityII = function (nums) {
  let i = 0
  let j = 1
  while (i < nums.length) {
    if (nums[i] % 2 !== 0) {
      while (j < nums.length) {
        if (nums[j] % 2 === 0) {
          [nums[i], nums[j]] = [nums[j], nums[i]]
          j += 2
          break
        }
        j += 2
      }
    }
    i += 2
  }
  return nums
};

console.log(sortArrayByParityII([4, 2, 5, 7]))