// Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

const isToeplitzMatrix = function(matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
      for(let j = 0; j < matrix[i].length - 1; j++) {
          if (matrix[i + 1][j + 1] !== matrix[i][j]){
              return false
          }
      }
  }
  return true
};

console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]))