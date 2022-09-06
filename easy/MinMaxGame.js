// You are given a 0-indexed integer array nums whose length is a power of 2.

// Apply the following algorithm on nums:

// Let n be the length of nums. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n / 2.
// For every even index i where 0 <= i < n / 2, assign the value of newNums[i] as min(nums[2 * i], nums[2 * i + 1]).
// For every odd index i where 0 <= i < n / 2, assign the value of newNums[i] as max(nums[2 * i], nums[2 * i + 1]).
// Replace the array nums with newNums.
// Repeat the entire process starting from step 1.
// Return the last number that remains in nums after applying the algorithm.

const minMaxGame = function(nums) {
  let arr = [...nums];
  while (arr.length > 1) {
      let tempArr = [];
      for (let i = 1; i < arr.length; i += 2) {
          if (tempArr.length % 2 === 0) {
              tempArr.push(Math.min(arr[i], arr[i - 1]));
          } else {
              tempArr.push(Math.max(arr[i], arr[i - 1]));
          }
      }
      arr = tempArr;
  }
  return arr[0];
};

console.log(minMaxGame([1,3,5,2,4,8,2,2]))