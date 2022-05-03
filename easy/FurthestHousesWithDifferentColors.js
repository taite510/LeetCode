// There are n houses evenly lined up on the street, and each house is beautifully painted.

// You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.

// Return the maximum distance between two houses with different colors.

// The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.

const maxDistance = function(colors) {
  let distance = 1
  for (let i = 0; i < colors.length; i++) {
    for (let j = colors.length - 1; j > i; j--) {
      if (colors[i] !== colors[j] && j - i > distance) {
        distance = j - i;
      }
    }
  }
  return distance;
};


console.log(maxDistance([1,1,1,6,1,1,1]))