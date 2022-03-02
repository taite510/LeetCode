// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the obj[s[i]]s of a different word or phrase, typically using all the original obj[s[i]]s exactly once.

var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[j]) {
        t = t.split('');
        t.splice(j, 1);
        t = t.join('');
        break
      }
    }
  }
  return t.length === 0
};

let testStr1 = 'aacc';
let testStr2 = 'ccac';

console.log(isAnagram(testStr1, testStr2))

var isAnagram2 = function(s, t) {
  let obj = {};
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === undefined) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]]++;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (obj[t[i]] === undefined) {
      return false;
    } else if (obj[t[i]] === 1) {
      delete obj[t[i]];
    } else {
      obj[t[i]]--;
    }
  }
  return Object.keys(obj).length === 0
}


console.log(isAnagram2(testStr1, testStr2))
