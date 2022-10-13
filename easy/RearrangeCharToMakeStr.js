// You are given two 0-indexed strings s and target. You can take some letters from s and rearrange them to form new strings.

// Return the maximum number of copies of target that can be formed by taking letters from s and rearranging them.

const strToObj = function (s) {
  const letters = {};
  for (let i = 0; i < s.length; i++) {
    letters[s[i]] = letters[s[i]] + 1 || 1;
  }
  return letters;
}
const rearrangeCharacters = function (s, target) {
  const sLet = strToObj(s);
  const tLet = strToObj(target);
  let copies = Infinity;
  for (let char in tLet) {
    if (sLet[char]) {
      const num = Math.floor(sLet[char] / tLet[char]);
      if (copies > num) {
        copies = num;
      }
    } else {
      return 0;
    }
  }
  return copies;
};

console.log(rearrangeCharacters('ilovecodingonleetcode', 'code') === 2)