// A parentheses string is valid if and only if:

// It is the empty string,
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

// For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
// Return the minimum number of moves required to make s valid.

var minAddToMakeValid = function(s) {
  let count = 0;
  let addCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      if (count < 0) {
        count = 1;
      } else {
        count++;
      }
    } else if (s[i] === ')') {
      count--;
      if (count < 0) {
        addCount++;
      }
    }
  }
  if (count > 0) {
    addCount += count;
  }
  return addCount;
};


console.log(minAddToMakeValid("(((()((("))