// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

var luckyNumbers  = function(matrix) {
  let nums = [];
  for (let i = 0; i < matrix.length; i++) {
    let currentMin = Infinity
    let currentIndex
    let isLargest = true;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < currentMin) {
        currentMin = matrix[i][j];
        currentIndex = j;
      }
    }
    for (let k = 0; k < matrix.length; k++) {
      if (currentMin < matrix[k][currentIndex]) {
        isLargest = false;
        break
      }
    }
    if (isLargest) {
      nums.push(currentMin)
    }
  }
  return nums;
};


console.log(luckyNumbers([[2],[1],[9],[4]]))