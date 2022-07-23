// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

const reverseArr = function(arr) {
  const resArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    resArr.push(arr[i])
  }
  return resArr
}

const reversePrefix = function(word, ch) {
  let wordArr = word.split('')
  let index = wordArr.indexOf(ch) + 1
  let prefix = wordArr.slice(0, index)
  return reverseArr(prefix).join('') + wordArr.slice(index, word.length).join('')
};

console.log(reversePrefix('abcdefd', 'z'))