// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

var uniqueOccurrences = function(arr) {
  let [obj, occurArr] = [{}, []];
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1;
  }
  for (key in obj) {
    let occurrences = obj[key]
    if (occurArr.indexOf(occurrences) === -1) {
      occurArr.push(occurrences);
    } else {
      return false;
    }
  }
  return true;
};

console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))