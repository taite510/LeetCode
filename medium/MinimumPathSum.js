// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.


// this one is a brute force implementation (slow)
const minPathSumSlow = function(grid) {
  let min = Infinity;
  const columns = grid[0].length - 1;
  const rows = grid.length - 1;
  const takePath = function(m, n, sum) {
      const right = n < columns;
      const down = m < rows;
      if (right) {
          takePath(m, n + 1, sum + grid[m][n + 1]);
      }
      if (down) {
          takePath(m + 1, n, sum + grid[m + 1][n]);
      }
      if (!right && !down && sum < min) {
          min = sum;
      }
  }
  takePath(0, 0, grid[0][0]);
  return min;
};

// this is much faster
const minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 1; i < m; i++) {
      grid[i][0] += grid[i - 1][0];
  }
  for (let i = 1; i < n; i++) {
      grid[0][i] += grid[0][i - 1];
  }
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
      }
  }
  return grid[m - 1][n - 1];
};

console.log(minPathSumSlow([[1,3,1],[1,5,1],[4,2,1]]) === 7)

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]) === 7)