// Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.

// Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.

// A prefix of a string s is any leading contiguous substring of s.

const isPrefix = function(prefix, word) {
  for (let i = 0; i < prefix.length; i++) {
      if (prefix[i] !== word[i]) {
          return false;
      }
  }
  return true;
}

const isPrefixOfWord = function(sentence, searchWord) {
  const wordArr = sentence.split(' ');
  for (let i = 0; i < wordArr.length; i++) {
      if (isPrefix(searchWord, wordArr[i])) {
          return i + 1;
      }
  }
  return -1;
};

console.log(isPrefixOfWord('i love eating burgers', 'burg'))