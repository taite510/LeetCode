// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// s[i] == 'I' if perm[i] < perm[i + 1], and
// s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

const diStringMatch = function (s) {
  const res = []
  let left = 0
  let right = s.length
  let i = 0
  while (res.length !== s.length + 1) {
    res[i] = s[i] === 'I' ? left++ : right--
    i++
  }
  return res
};

console.log(diStringMatch('DIDI'))