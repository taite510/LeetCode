// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

const mySqrt = function(x) {
  let low = 0;
  let high = Math.ceil(x/2);
  while (low < high) {
    let mid = Math.floor((high - low + 1) / 2) + low;
    if (mid * mid > x) {
      high = mid - 1;
    } else {
      low = mid;
    }
  }
  return low;
};

console.log(mySqrt(9))