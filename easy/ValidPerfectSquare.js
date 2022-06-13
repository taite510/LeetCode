// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

const isPerfectSquare = function(num) {
  let low = 1;
  let high = Math.ceil(num / 2);
  while (low < high) {
    let mid = Math.floor((high - low + 1) / 2) + low;
    if (mid * mid > num) {
      high = mid - 1;
    } else {
      low = mid;
    }
  }
  return low * low === num;
};

console.log(isPerfectSquare(5))