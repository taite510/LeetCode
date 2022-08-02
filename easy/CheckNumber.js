// You are given a 0-indexed string num of length n consisting of digits.

// Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.

const digitCount = function(num) {
  const obj = {};
  for (let i = 0; i < num.length; i++) {
      obj[num[i]] = obj[num[i]] + 1 || 1;
  }
  for (let i = 0; i < num.length; i++) {
      if (num[i] == 0) {
          if (obj[i] !== undefined) {
              return false;
          }
      } else if (obj[i] != num[i]) {
          return false;
      }
  }
  return true;
};

console.log(digitCount("030"))