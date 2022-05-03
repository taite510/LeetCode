// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

const areOccurrencesEqual = function(s) {
  const bank = {};
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    bank[s[i]] ? bank[s[i]]++ : bank[s[i]] = 1;
  }
  for (chara in bank) {
    if (num && num !== bank[chara]) {
      return false;
    } else {
      num = bank[chara];
    }
  }
  return true;
};

console.log(areOccurrencesEqual('abcdabcdabcd'));