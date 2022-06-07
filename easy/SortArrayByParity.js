// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

const sortArrayByParity = function(nums) {
  return nums.sort((a,b) => {
    if (a % 2 === 0 && b % 2 !== 0) {
      return -1;
    } else if (a % 2 !== 0 && b % 2 === 0) {
      return 1;
    } else {
      return 0;
    }
  })
};

console.log(sortArrayByParity([3,1,2,4]))