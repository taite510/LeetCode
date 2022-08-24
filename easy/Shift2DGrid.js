// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

// In one shift operation:

// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.

const gridToArr = function(grid) {
  let resArr = [];
  for (let i = 0; i < grid.length; i++) {
      resArr = resArr.concat(grid[i]);
  }
  return resArr;
}

const shiftArr = function(arr, k) {
  k = k - Math.floor(k / arr.length) * arr.length;
  let tempArr = arr.splice(arr.length - k, k);
  return tempArr.concat(arr);
}

const arrToGrid = function(arr, x) {
  const resGrid = [];
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
      if (i % x === 0 && i !== 0) {
          resGrid.push(tempArr);
          tempArr = [];
      }
      tempArr.push(arr[i]);
  }
  resGrid.push(tempArr);
  return resGrid;
}

const shiftGrid = function(grid, k) {
  let arr = gridToArr(grid);
  arr = shiftArr(arr, k);
  return arrToGrid(arr, grid[0].length);
};

console.log(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4))