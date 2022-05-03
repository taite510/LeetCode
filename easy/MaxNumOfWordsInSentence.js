// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

const mostWordsFound = function(sentences) {
  let maxNum = 0;
  for (let i = 0; i < sentences.length; i++) {
    let temp = sentences[i].split(' ');
    if (temp.length > maxNum) {
      maxNum = temp.length;
    }
  }
  return maxNum;
};


console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))