// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

// You may assume all four edges of the grid are all surrounded by water.

const numIslands = function(grid) {
  let result = 0;
  const removeIsland = (y, x) => {
    if (grid[y][x] === '1') {
      grid[y][x] = '0';
    } else {
      return;
    }
    if (grid.length - 1 > y) {
      removeIsland(y + 1, x);
    }
    if (grid[y].length - 1 > x) {
      removeIsland(y, x + 1);
    }
    if (y > 0) {
      removeIsland(y - 1, x);
    }
    if (x > 0) {
      removeIsland(y, x - 1);
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        result++;
        removeIsland(i,j);
      }
    }
  }
  return result;
};


const testGrid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","1"]
];
console.log(numIslands(testGrid))