// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

const percentageLetter = function(s, letter) {
  let freq = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === letter) {
          freq++
      }
  }
  return Math.floor(freq / s.length * 100)
};

console.log(percentageLetter('leetcode', 'e'))