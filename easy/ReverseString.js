// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

const reverseString = function(s) {
  for (let i = 0; i < s.length / 2; i++) {
    let temp = s[s.length - (1 + i)];
    s[s.length - (1 + i)] = s[i];
    s[i] = temp
  }
  return s
};

const arr = ["d","i","a","m","o","n","d","b","a","c","k"]
const arr1 = ["h"]
console.log(reverseString(arr))
console.log(reverseString(arr1))