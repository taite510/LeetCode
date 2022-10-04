// Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

// A substring is a contiguous sequence of characters within a string.

const maxLengthBetweenEqualCharacters = function (s) {
  let obj = {};
  let dist = -1;
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]].push(i);
    } else {
      obj[s[i]] = [i];
    }
  }
  for (let char in obj) {
    const arr = obj[char];
    const len = arr.length;
    if (len > 1) {
      dist = Math.max(arr[len - 1] - arr[0] - 1, dist);
    }
  }
  return dist;
};

console.log(maxLengthBetweenEqualCharacters("afqlbca") === 5)