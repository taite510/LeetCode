// Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

// Answers within 10-5 of the actual answer will be considered accepted.

const trimMean = function(arr) {
  const trimSize = Math.floor(arr.length * 0.05);
  let copy = [...arr];
  copy.sort((a,b) => a - b);
  for (let i = 0; i < trimSize; i++) {
      copy.shift();
      copy.pop();
  }
  return copy.reduce((a,b) => a + b) / copy.length;
};

console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]))