// You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.

// Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location. If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.

// The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).

var nearestValidPoint = function(x1, y1, points) {
  let smallest = Infinity;
  let index = -1;
  for (let i = 0; i < points.length; i++) {
      let diff;
      let x2 = points[i][0];
      let y2 = points[i][1];
      if (x2 === x1) {
          diff = Math.abs(y2 - y1);
          if (diff < smallest) {
              smallest = diff;
              index = i;
          }
      } else if (y2 === y1) {
          diff = Math.abs(x2 - x1);
          if (diff < smallest) {
              smallest = diff;
              index = i;
          }
      }
  }
  return index;
};

console.log(nearestValidPoint(3,4,[[1,2],[3,1],[2,4],[2,3],[4,4]]))