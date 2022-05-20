// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

const diagonalSum = function(mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    if (i + 1 !== mat.length - i) {
      sum += mat[i][mat.length - i - 1];
    }
      sum += mat[i][i];
  }
  return sum;
};

console.log(diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]))