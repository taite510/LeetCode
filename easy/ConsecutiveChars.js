// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.

const maxPower = function(s) {
  let power = 1;
  let currPower = 1;
  for (let i = 1; i < s.length; i++) {
      if (s[i] === s[i - 1]) {
          currPower++;
      } else {
          if (currPower > power) {
              power = currPower;
          }
          currPower = 1;
      }
  }
  return Math.max(power, currPower);
};

console.log(maxPower('abbbccdeeeeffg') === 4)