// Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.

// The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

const findTheDistanceValue = function(arr1, arr2, d) {
  return arr1.filter(n1 => arr2.every(n2 => Math.abs(n1 - n2) > d)).length
};

console.log(findTheDistanceValue([4,5,8], [10,9,1,8], 2))