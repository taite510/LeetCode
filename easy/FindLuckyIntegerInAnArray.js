// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array. If there is no lucky integer return -1.

var findLucky = function(arr) {
  let obj = {};
  let largestLuckyNum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1;
  }
  console.log(obj)
  for (let key in obj) {
    if (key == obj[key] && key > largestLuckyNum) {
      largestLuckyNum = obj[key];
    }
  }
  if (largestLuckyNum === -Infinity) {
    return -1;
  }
  return largestLuckyNum;
};

let testArr = [2,2,2,3,3]
console.log(findLucky(testArr))