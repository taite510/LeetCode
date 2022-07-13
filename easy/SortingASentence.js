// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

const sortSentence = function(s) {
  const strArr = s.split(' ');
  const resArr = new Array(strArr.length - 1);
  for (let i = 0; i < strArr.length; i++) {
      let j = strArr[i].length - 2;
      while (!isNaN(strArr[i][j])) {
          j--;
      }
      j++;
      const index = Number(strArr[i].substring(j, strArr[i].length)) - 1;
      const text = strArr[i].substring(0, j);
      resArr[index] = text;
  }
  return resArr.join(' ');
};

console.log(sortSentence("is2 sentence4 This1 a3"))