// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

var maxAreaOfIsland = function(grid) {
  let maxArea = 0;
  let currentArea = 0;
  let removeIsland = (y, x) => {
    if (grid[y][x] === 1) {
      grid[y][x] = 0;
      currentArea++
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
      if (grid[i][j] === 1) {
        removeIsland(i,j);
        if (currentArea > maxArea) {
          maxArea = currentArea;
        }
        currentArea = 0;
      }
    }
  }
  return maxArea;
};


console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]))