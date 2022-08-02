// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

const kWeakestRows = function(mat, k) {
  const rows = [];
  const res = [];
  for (let i = 0; i < mat.length; i++) {
      let strength = [0, i];
      for (let j = 0; j < mat[i].length; j++) {
          if (mat[i][j] === 1) {
              strength[0]++;
          }
      }
      rows.push(strength);
  }
  rows.sort((a, b) => {
      if (a[0] === b[0]) {
          return a[1] - b[1];
      }
      return a[0] - b[0];
  })
  for (let i = 0; i < k; i++) {
      res.push(rows[i][1]);
  }
  return res;
};

const matrix = [[1,1,0,0,0], [1,1,1,1,0], [1,0,0,0,0], [1,1,0,0,0], [1,1,1,1,1]]
console.log(kWeakestRows(matrix, 3))