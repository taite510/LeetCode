// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

var findSpecialInteger = function (arr) {
  const n = arr.length;
  let start = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[start] !== arr[i]) {
      if ((i - start) / n > 0.25) {
        return arr[start]
      }
      start = i
    }
  }
  return arr[n - 1]
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]) === 6)