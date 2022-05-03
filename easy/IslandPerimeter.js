// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1.

// The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

const islandPerimeter = function(grid) {
  let periCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let possibleSides = 4;
      if (grid[i][j]) {
        if (j > 0 && grid[i][j - 1]) {
          possibleSides--;
        }
        if (j < grid[i].length - 1 && grid[i][j + 1]) {
          possibleSides--;
        }
        if (i > 0 && grid[i - 1][j]) {
          possibleSides--;
        }
        if (i < grid.length - 1 && grid[i + 1][j]) {
          possibleSides--;
        }
        periCount += possibleSides;
      }
    }
  }
  return periCount;
};

console.log(islandPerimeter([[1]]))