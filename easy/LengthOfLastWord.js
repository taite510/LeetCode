// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.


const lengthOfLastWord = function(s) {
  const arr = s.split(' ');
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== '') {
      return arr[i].length
    }
  }
};



const string = "luffy       is  still   joyboy    hmm           "
console.log(lengthOfLastWord(string))