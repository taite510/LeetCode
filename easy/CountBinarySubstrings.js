// Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

// Substrings that occur multiple times are counted the number of times they occur.

const countBinarySubstrings = function(s) {
  let count = 0;
  for (let i = 0; i < s.length - 1; i++) {
      let j = 0;
      const orig = s[i];
      while (s[i - j] !== undefined && s[i + j + 1] !== undefined) {
          if (s[i - j] !== s[i + j + 1] && s[i - j] === orig) {
              count++;
          } else {
              break;
          }
          j++;
      }
  }
  return count;
};

console.log(countBinarySubstrings("00110011"))