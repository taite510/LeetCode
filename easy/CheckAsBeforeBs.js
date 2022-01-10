// Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

var checkString = function(s) {
  let hasB = false;
  for (let i = 0; i < s.length; i++) {
    if (hasB) {
      if (s[i] === 'a') {
        return false;
      }
    } else {
      if (s[i] === 'b') {
        hasB = true;
      }
    }
  }
  return true
};


console.log(checkString('aaaba'))