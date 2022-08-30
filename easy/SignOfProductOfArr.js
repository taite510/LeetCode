// There is a function signFunc(x) that returns:

// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).

const arraySign = function(nums) {
  const prod = nums.reduce((a,b) => a * b);
  if (prod > 0) {
      return 1;
  } else if (prod < 0) {
      return -1;
  } else {
      return 0;
  }
};

console.log(arraySign([-1,4,-6,1,3,-5,-1]))