// You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.

// You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi. For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.

// Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.

// Return the number of rectangles that can make a square with a side length of maxLen.

const countGoodRectangles = function(arr) {
  let max = 0;
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    const size = arr[i][0] < arr[i][1] ? arr[i][0] : arr[i][1];
    if (size === max) {
      num++;
    } else if (size > max) {
      max = size;
      num = 1;
    }
  }
  return num;
};

console.log(countGoodRectangles([[5,8],[3,9],[5,12],[16,5]]))