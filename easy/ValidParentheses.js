// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      arr.push(s[i])
    } else if (s[i] === '{') {
      arr.push(s[i])
    } else if (s[i] === '[') {
      arr.push(s[i])
    } else if (s[i] === ')' && arr[arr.length - 1] === '(') {
      arr.splice(arr.length - 1, 1)
    } else if (s[i] === '}' && arr[arr.length - 1] === '{') {
      arr.splice(arr.length - 1, 1)
    } else if (s[i] === ']' && arr[arr.length - 1] === '[') {
      arr.splice(arr.length - 1, 1)
    } else {
      return false
    }
  }
  if (arr.length === 0) {
    return true
  } else {
    return false
  }
};



console.log(isValid('(({[{()}]}))'))