// You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

const stringToObj = function(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = obj[str[i]] + 1 || 1;
  }
  return obj;
}

const minSteps = function(s, t) {
  const sObj = stringToObj(s);
  const tObj = stringToObj(t);
  let steps = 0;
  for (let char in sObj) {
    let diff = sObj[char]
    if (tObj[char] !== undefined) {
      diff -= tObj[char]
      if (diff < 0) {
        diff = 0
      }
    }
    steps += diff
  }
  return steps;
};

console.log(minSteps('leetcode', 'practice'))