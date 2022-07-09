// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

const decodeString = function(s) {
  let stack = [];
  let strStack = [];
  let res = '';
  let str = '';
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
        let j = i + 1;
        while (j < s.length && !isNaN(s[j])) {
            j++;
        }
        stack.push(Number(s.substring(i,j)));
        i = j - 1;
    } else {
      if (stack.length === 0) {
        res += s[i];
      } else {
        if (s[i] === ']') {
          if (strStack.length > 1) {
            strStack[strStack.length - 2] += strStack.pop().repeat(stack.pop());
          } else {
            res += strStack.pop().repeat(stack.pop());
          }
        } else if (s[i] === '[') {
          let j = i + 1;
          while (j < s.length && isNaN(s[j]) && s[j] !== ']') {
            str += s[j];
            j++;
          }
          i = j - 1;
          strStack.push(str);
          str = '';
        } else {
          strStack[strStack.length - 1] += s[i];
        }
      }
    }
  }
  return res;
};

console.log(decodeString('3[a]2[bc]'))