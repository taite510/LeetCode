// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

const firstPalindrome = function(words) {
  for (let i = 0; i < words.length; i++) {
    let isPalindrome = true;
    for (let j = 0; j < (words[i].length) / 2; j++) {
      if (words[i][j] !== words[i][words[i].length - 1 - j]) {
        isPalindrome = false;
        break;
      }
    }
    if (isPalindrome) {
      return words[i];
    }
  }
  return '';
};


console.log(firstPalindrome(["notapalindrome","racecar"]))