// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

const strToObj = function (s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = obj[s[i]] + 1 || 1;
  }
  return obj;
}

const canConstruct = function (ransomNote, magazine) {
  const noteObj = strToObj(ransomNote);
  const magObj = strToObj(magazine);
  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    if (!noteObj[char] || !magObj[char] || noteObj[char] > magObj[char]) {
      return false;
    }
  }
  return true;
};

console.log(canConstruct('aa', 'aab') === true)
console.log(canConstruct('a', 'b') === false)