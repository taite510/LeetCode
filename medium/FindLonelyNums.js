// You are given an integer array nums. A number x is lonely when it appears only once, and no adjacent numbers (i.e. x + 1 and x - 1) appear in the array.

// Return all lonely numbers in nums. You may return the answer in any order.

const findLonely = function(nums) {
  let numObj = {};
  let resArr = [];
  for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      numObj[num] = numObj[num] + 1 | 1;
  }
  for (let num in numObj) {
      num = Number(num);
      if (numObj[num] === 1 && !numObj[num + 1] && !numObj[num - 1]) {
          resArr.push(num);
      }
  }
  return resArr;
};

console.log(findLonely([10,5,6,2]))