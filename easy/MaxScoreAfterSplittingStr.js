// Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

// The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

const maxScore = function (s) {
  let curr = 0;
  if (s[0] === '0') {
    curr++;
  }
  for (let i = 1; i < s.length; i++) {
    if (s[i] === '1') {
      curr++;
    }
  }
  let max = curr;
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === '0') {
      curr++;
      if (curr > max) {
        max = curr;
      }
    } else {
      curr--;
    }
  }
  return max;
};

console.log(maxScore('011101') === 5)