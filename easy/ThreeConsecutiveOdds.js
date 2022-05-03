// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

const threeConsecutiveOdds = function(arr) {
  let oddCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      oddCounter = 0;
    } else {
      if (oddCounter === 2) {
        return true;
      }
      oddCounter++;
    }
  }
  return false;
};

const testArr = [1,2,34,3,4,5,7,23,12];

console.log(threeConsecutiveOdds(testArr))