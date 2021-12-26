// Given an array of points where points [i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

// @param {number[][]} points
// @param {number} k
// @return {number[][]}

 var kClosest = function(points, k) {
  let distanceArr = [];
  let resultArr = [];
  for (let i = 0; i < points.length; i++) {
    distanceArr.push([Math.sqrt(Math.pow((points[i][0] - 0), 2) + Math.pow((points[i][1] - 0), 2)), i])
  }
  distanceArr.sort((a,b) => {
    if (a[0] > b[0]) {
      return 1
    } else if (a[0] < b[0]) {
      return -1
    } else {
      return 0
    }
  });
  for (let i = 0; i < k; i++) {
    resultArr.push(points[distanceArr[i][1]])
  }
  return resultArr;
};

console.log(kClosest([[6,10],[-3,3],[-2,5],[0,2]], 3))