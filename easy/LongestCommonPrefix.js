// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
  let prefix = '';
  if (strs.length === 1) {
    return strs[0]
  }
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return prefix
      }
    }
    prefix += strs[0][i];
  }
  return prefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]))