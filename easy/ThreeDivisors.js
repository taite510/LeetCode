// Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

// An integer m is a divisor of n if there exists an integer k such that n = k * m.

const isThree = function (n) {
  let i = 1;
  let count = 0;
  while (i <= n && count < 4) {
    if (n % i === 0) {
      count++;
    }
    i++;
  }
  return count === 3;
};

console.log(isThree(4) === true);
console.log(isThree(100) === false);