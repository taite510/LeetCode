// You are given an array of strings words and a string pref.

// Return the number of strings in words that contain pref as a prefix.

// A prefix of a string s is any leading contiguous substring of s.

const prefixCount = function (words, pref) {
  let count = 0
  words.forEach(word => {
    word.split(pref)[0] === '' ? count++ : null
  })
  return count
};

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at") == 2)