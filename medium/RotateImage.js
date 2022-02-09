// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

var rotate = function(matrix) {
  let n = matrix.length
  if (n === 1) {
    return;
  }
  for (let i = 0; i < n; i++) {
    for (let j = n - (i + 1); j >= 0; j--) {
      // let temp = matrix[i][j];
      // matrix[i][j] = matrix[n - (i + 1)][j];
      // matrix[n - (i + 1)][j] = temp
      [matrix[i][j], matrix[j][n - (i + 1)]] = [matrix[j][n - (i + 1)], matrix[i][j]];
    }
  }
  for (let i = 1; i < n - 1; i++) {
    [matrix[i][0], matrix[n - 1][i]] = [matrix[n - 1][i], matrix[i][0]]
  }
  console.log(matrix)
  return
};

let testMatrix = [[1]]
rotate(testMatrix)