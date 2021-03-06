// You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with m rows and n columns using all the elements from original.

// The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.

// Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.

const construct2DArray = function(original, m, n) {
  const resArr = [];
  if (m * n < original.length) {
    return resArr;
  }
  for (let i = 0; i < m; i++) {
    const arr = [];
    for (let j = 0; j < n; j++) {
      if(original.length > 0) {
        arr.push(original.splice(0,1)[0]);
      } else {
        return [];
      }
    }
    resArr.push(arr);
  }
  return resArr;
};

console.log(construct2DArray([1], 1, 2));