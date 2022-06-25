// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
const mapLettersToNum = function(string) {
  let obj = {};
  let res = '';
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]] !== undefined) {
      res += obj[string[i]] + '-';
    } else {
      obj[string[i]] = counter;
      res += counter + '-';
      counter++;
    }
  }
  return res;
}

const isIsomorphic = function(s, t) {
  return mapLettersToNum(s) === mapLettersToNum(t);
};

console.log(isIsomorphic("abcdefghijklmnopqrstuvwxyzva", "abcdefghijklmnopqrstuvwxyzck"))
