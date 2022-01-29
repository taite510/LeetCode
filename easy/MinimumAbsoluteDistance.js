// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

var minimumAbsDifference = function(arr) {
  let obj = {};
  let diff = Infinity;
  arr.sort((a,b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let newDiff = Math.abs(arr[i] - arr[j]);
      if (newDiff <= diff) {
        if (obj[newDiff] === undefined) {
          obj[newDiff] = [];
        }
        if (arr[i] > arr[j]) {
          obj[newDiff].push([arr[j], arr[i]])
        } else {
          obj[newDiff].push([arr[i], arr[j]])
        }
        diff = newDiff
      }
    }
  }
  return obj[diff]
};

console.log(minimumAbsDifference([4,3,2,1]))