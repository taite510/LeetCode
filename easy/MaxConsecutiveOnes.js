// Given a binary array nums, return the maximum number of consecutive 1's in the array.

var findMaxConsecutiveOnes = function (nums) {
  curr = 0
  max = 0
  nums.forEach(num => {
    if (num === 1) {
      curr++
      max = Math.max(curr, max)
    } else {
      curr = 0
    }
  })
  return max
};

console.log(findMaxConsecutiveOnes([0, 1, 1, 0, 0, 0, 1, 0]) === 2)