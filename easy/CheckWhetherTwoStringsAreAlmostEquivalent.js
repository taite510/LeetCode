// Two strings word1 and word2 are considered almost equivalent if the differences between the frequencies of each letter from 'a' to 'z' between word1 and word2 is at most 3.

// Given two strings word1 and word2, each of length n, return true if word1 and word2 are almost equivalent, or false otherwise.

// The frequency of a letter x is the number of times it occurs in the string.

const strToObj = function(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
      obj[str[i]] = obj[str[i]] + 1 || 1;
  }
  return obj;
}
const compareObjects = function(obj1, obj2) {
  for (let char in obj1) {
      let diff = 0;
      if (obj2[char]) {
          diff += Math.abs(obj2[char] - obj1[char])
      } else {
          diff += obj1[char]
      }
      if (diff > 3) {
          return false;
      }
  }
  return true
}
var checkAlmostEquivalent = function(word1, word2) {
  const word1Obj = strToObj(word1);
  const word2Obj = strToObj(word2);
  if (!compareObjects(word1Obj, word2Obj) || !compareObjects(word2Obj, word1Obj)) {
      return false
  }
  return true;
};

console.log(checkAlmostEquivalent("yttnjqdknymzuneqesuagmbdlyaerihwtnomrxjeygbwhsudxcfiminvecgblhnbpuorgntntzmgz", "lsgwihmvznuaijslavjbwqpfnnjkbzvthuoiktlydvmnoyetdkuqrfoekzeqqvqfjwsjkiqllfibi"))