// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

const strIntoObj = function (str) {
  const obj = {}
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] ? obj[str[i]]++ : obj[str[i]] = 1
  }
  return obj
}
const countCharacters = function (words, chars) {
  let res = 0
  const charsObj = strIntoObj(chars)
  words.forEach(word => {
    const wordObj = strIntoObj(word)
    let canBeFormed = true
    for (let char in wordObj) {
      if (charsObj[char] === undefined || wordObj[char] > charsObj[char]) {
        canBeFormed = false
        break
      }
    }
    if (canBeFormed) {
      res += word.length
    }
  })
  return res
};

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach") === 6)