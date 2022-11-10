// The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

// It has a length of k.
// It is a divisor of num.
// Given integers num and k, return the k-beauty of num.

// Note:

// Leading zeros are allowed.
// 0 is not a divisor of any value.
// A substring is a contiguous sequence of characters in a string.

const divisorSubstrings = function (num, k) {
  let count = 0;
  const str = num + '';
  for (let i = k; i < str.length + 1; i++) {
    if (num % Number(str.substring(i - k, i)) === 0) {
      count++;
    }
  }
  return count;
};

console.log(divisorSubstrings(430043, 2) === 2);