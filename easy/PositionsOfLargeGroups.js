// In a string s of lowercase letters, these letters form consecutive groups of the same character.

// For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".

// A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].

// A group is considered large if it has 3 or more characters.

// Return the intervals of every large group sorted in increasing order by start index.


const largeGroupPositions = function (s) {
  const res = []
  let size = 1
  let start = 0
  s += '*'
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      size++
    } else {
      if (size > 2) {
        res.push([start, i - 1])
      }
      size = 1
      start = i
    }
  }
  return res
};

console.log(largeGroupPositions("abcdddeeeeaabbbcd", [[3, 5], [6, 9], [12, 14]]))