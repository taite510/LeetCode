// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

var rotate = function(matrix) {
  let n = matrix.length
  if (n === 1) {
    return;
  }
  for (let i = 0; i < n; i++) {
    for (let j = n - (i + 1); j >= 0; j--) {
      [matrix[i][j], matrix[j][n - (i + 1)]] = [matrix[j][n - (i + 1)], matrix[i][j]];
    }
  }
  for (let i = 0; i < (n - 2) / 2; i++) {
    for (let j = i + 1; j < n - (i + 1); j++) {
      [matrix[j][i], matrix[n - (i + 1)][j]] = [matrix[n - (i + 1)][j], matrix[j][i]];
    }
  }
  return
};

let testMatrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(testMatrix)