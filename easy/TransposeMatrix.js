// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

const transpose = function(matrix) {
  const resArr = [];
  for (let x = 0; x < matrix[0].length; x++) {
      const tempArr = [];
      for (let y = 0; y < matrix.length; y++) {
          tempArr.push(matrix[y][x]);
      }
      resArr.push(tempArr);
  }
  return resArr;
};

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))