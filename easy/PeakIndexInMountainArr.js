// Let's call an array arr a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].


const peakIndexInMountainArray = function(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    let mid = Math.floor((high - low) / 2) + low;
    if (arr[mid + 1] < arr[mid]) {
      if (arr[mid - 1] < arr[mid]) {
        return mid;
      }
      high = mid;
    } else {
      low = mid;
    }
  }
};

console.log(peakIndexInMountainArray([0,1,2,4,6,5,3,0]));