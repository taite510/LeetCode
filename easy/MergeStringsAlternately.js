// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

var mergeAlternately = function(word1, word2) {
  let str = '';
  const smallestLen = Math.min(word1.length, word2.length);
  const largestWord = word1.length > word2.length ? word1 : word2;
  for (let i = 0; i < smallestLen; i++) {
    str += word1[i];
    str += word2[i];
  }
  str += largestWord.slice(smallestLen);
  return str;
};

console.log(mergeAlternately('123','abcdef'))