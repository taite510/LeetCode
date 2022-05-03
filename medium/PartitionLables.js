// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Return a list of integers representing the size of these parts.

const partitionLabels = function(s) {
  const arr = [], letterStart = {}, letterEnd = {};
  for (let j = s.length - 1; j >= 0; j--) {
    if (!letterEnd[s[j]]) {
      letterEnd[s[j]] = j;
    }
  }
  let currentStart = 0, currentEnd;
  for (let i = 0; i < s.length; i++) {
    if (currentEnd) {
      if (i !== currentEnd) {
        if (currentEnd === s.length - 1) {
          arr.push(currentEnd - currentStart + 1);
          break
        } else if (letterEnd[s[i]] > currentEnd) {
          currentEnd = letterEnd[s[i]]
        }
      } else {
        arr.push(currentEnd - currentStart + 1)
        currentStart = currentEnd + 1;
        currentEnd = undefined;
      }
    } else {
      if (letterEnd[s[i]] === currentStart) {
        arr.push(1)
        currentStart = letterEnd[s[i]] + 1;
        currentEnd = undefined;
      } else {
        currentEnd = letterEnd[s[i]];
      }
    }
  }
  return arr;
};
console.log(partitionLabels("eccbbbbdec"))