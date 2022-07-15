// Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

// A subarray is a contiguous subsequence of the array.

const sumOddLengthSubarrays = function(arr) {
  let length = arr.length
  let sum = 0;
  if (length % 2 === 0) {
    length--
  }
  for (let i = length; i > 0; i -= 2) {
    let start = 0
    let end = i
    while (end <= arr.length) {
      sum += arr.slice(start, end).reduce((a, b) => a + b)
      start++
      end++
    }
  }
  return sum
};

console.log(sumOddLengthSubarrays([1,4]))