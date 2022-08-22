// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

const frequencySort = function(s) {
  const obj = {};
  const freqArr = [];
  const resArr = [];
  for (let i = 0; i < s.length; i++) {
      obj[s[i]] = obj[s[i]] + 1 || 1;
  }
  for (let key in obj) {
      freqArr.push([key, obj[key]]);
  }
  freqArr.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < freqArr.length; i++) {
      tempArr = Array(freqArr[i][1]).fill(freqArr[i][0]);
      resArr.push(...tempArr);
  }
  return resArr.join('');
};

console.log(frequencySort('mississippi'))