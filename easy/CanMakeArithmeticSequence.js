// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

const canMakeArithmeticProgression = function(arr) {
  arr.sort((a, b) => a - b);
  const diff = arr[0] - arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] - arr[i + 1] !== diff) {
          return false;
      }
  }
  return true;
};

console.log(canMakeArithmeticProgression([3,5,1]))