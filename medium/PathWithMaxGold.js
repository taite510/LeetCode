// In a gold mine currGrid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

// Return the maximum amount of gold you can collect under the conditions:

// Every time you are located in a cell you will collect all the gold in that cell.
// From your position, you can walk one step to the left, right, up, or down.
// You can't visit the same cell more than once.
// Never visit a cell with 0 gold.
// You can start and stop collecting gold from any position in the currGrid that has some gold.


const getMaximumGold = function (grid) {
  let max = 0;
  const findPath = function(x, y, gold, currGrid) {
    const temp = currGrid[y][x];
    const up = currGrid[y - 1];
    const down = currGrid[y + 1];
    const right = currGrid[y][x + 1];
    const left = currGrid[y][x - 1];
    currGrid[y][x] = 0;
    if (gold > max) {
        max = gold;
    }
    if (up && up[x]) {
        findPath(x, y - 1, gold + up[x], currGrid);
    }
    if (down && down[x]) {
        findPath(x, y + 1, gold + down[x], currGrid);
    }
    if (right) {
        findPath(x + 1, y, gold + right, currGrid);
    }
    if (left) {
        findPath(x - 1, y, gold + left, currGrid);
    }
    currGrid[y][x] = temp;
  }
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x]) {
          findPath(x, y, grid[y][x], grid);
      }
    }
  }
  return max;
};

console.log(getMaximumGold([[0,6,0],[5,8,7],[0,9,0]]))