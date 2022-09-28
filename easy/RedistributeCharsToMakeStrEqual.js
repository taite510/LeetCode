// You are given an array of strings words (0-indexed).

// In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].

// Return true if you can make every string in words equal using any number of operations, and false otherwise.

const makeEqual = function (words) {
  const obj = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      obj[word[j]] = obj[word[j]] + 1 || 1;
    }
  }
  for (let letter in obj) {
    if (obj[letter] % words.length !== 0) {
      return false;
    }
  }
  return true;
};

console.log(makeEqual(['abc', 'bc', 'aabc']) === true)