// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

const frequencySort = function(nums) {
  const numsObj = {};
  const freqArr = [];
  const resArr = [];
  for (let i = 0; i < nums.length; i++) {
      numsObj[nums[i]] = numsObj[nums[i]] + 1 || 1;
  }
  for (let key in numsObj) {
      freqArr.push([Number(key), numsObj[key]]);
  }
  freqArr.sort((a, b) => {
      if (a[1] === b[1]) {
          return (b[0] - a[0]);
      }
      return a[1] - b[1];
  })
  for (let i = 0; i < freqArr.length; i++) {
      tempArr = Array(freqArr[i][1]).fill(freqArr[i][0]);
      resArr.push(...tempArr);
  }
  return resArr;
};

console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1]))