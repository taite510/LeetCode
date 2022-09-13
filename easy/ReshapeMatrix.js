// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

const extractMatrix = function(mat) {
  const resArr = [];
  for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[0].length; j++) {
          resArr.push(mat[i][j]);
      }
  }
  return resArr;
}

const matrixReshape = function(mat, r, c) {
  if (mat.length * mat[0].length !== r * c) {
      return mat;
  }
  const resArr = [];
  const flatMat = extractMatrix(mat);
  let row = 0;
  let i = 0;
  while (row < r) {
      const tempArr = [];
      let col = 0;
      while (col < c) {
          tempArr.push(flatMat[i]);
          col++;
          i++;
      }
      resArr.push(tempArr);
      row++;
  }
  return resArr;
};

console.log(matrixReshape([[1,2],[3,4]], 1, 4))