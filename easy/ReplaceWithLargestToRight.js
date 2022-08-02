// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

const replaceElements = function(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
      let largest = -Infinity;
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] > largest) {
              largest = arr[j];
          }
      }
      arr[i] = largest;
  }
  arr[arr.length - 1] = -1;
  return arr;
};

console.log(replaceElements([17,18,5,4,6,1]))