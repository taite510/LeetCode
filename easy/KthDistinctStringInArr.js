// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.

const kthDistinct = function(arr, k) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = obj[arr[i]] + 1 | 1;
  }
  let i = 1;
  for (let key in obj) {
      if (obj[key] === 1) {
          if (i === k) {
              return key;
          }
          i++;
      }
  }
  return '';
};

console.log(kthDistinct(["d","b","c","b","c","a"], 2))