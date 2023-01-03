// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

const generate = function (numRows) {
  const res = [[1]]
  let i = 1
  while (i < numRows) {
    let j = 0
    const arr = [1, 1]
    while (j < i - 1) {
      arr.splice(1, 0, res[i - 1][j] + res[i - 1][j + 1]);
      j++
    }
    res.push(arr)
    i++
  }
  return res
};

console.log(generate(5))