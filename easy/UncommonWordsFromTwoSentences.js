// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

const uncommonFromSentences = function(s1, s2) {
  const wordBank = {};
  const resArr = [];
  s1 = s1.split(' ');
  s2 = s2.split(' ');
  const addToWorkBank = function(sentence) {
    sentence.forEach(word => {
      if (wordBank[word] === undefined) {
        wordBank[word] = 1;
      } else {
        wordBank[word]++;
      }
    })
  }
  addToWorkBank(s1);
  addToWorkBank(s2);
  for (let key in wordBank) {
    if (wordBank[key] === 1) {
      resArr.push(key);
    }
  }
  return resArr;
};



const testSentence1 = "apple apple";
const testSentence2 = "banana";

console.log(uncommonFromSentences(testSentence1, testSentence2))