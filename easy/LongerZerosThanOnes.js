// Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise.

// For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the longest continuous segment of 0s has length 3.
// Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0. The same applies if there is no 1's.

var checkZeroOnes = function (s) {
  let zeros = 0;
  let ones = 0;
  let count = 1;
  s += 'x';
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      if (s[i - 1] === '0' && count > zeros) {
        zeros = count;
      } else if (s[i - 1] === '1' && count > ones) {
        ones = count;
      }
      count = 1;
    }
  }
  return ones > zeros;
};

console.log(checkZeroOnes('10011010011') === false);