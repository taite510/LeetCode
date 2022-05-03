// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// var longestValidParentheses = function(s) {
//   var arr = [0];
//   var validCounter = 0;
//   var currentLength = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '(') {
//       validCounter++;
//     }
//     if (s[i] === ')') {
//       validCounter--;
//       if (validCounter >= 0) {
//         currentLength += 2;
//         arr.push(currentLength)
//       } else {
//         arr.push(currentLength);
//         currentLength = 0;
//         validCounter = 0;
//       }
//     }
//   }
//   arr.sort()
//   console.log(arr)
//   return arr[arr.length - 1]
// };

const longestValidParentheses = function(s) {
  const arr = [0]
  var currentLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      var validCounter = 0;
      var length = 0;
      for (let j = i; j < s.length; j++) {
        if (s[j] === '(') {
          validCounter++;
          length++;
        } else {
          validCounter--;
          length++;
        }
        if (validCounter === 0) {
          currentLength += length;
          arr.push(currentLength);
          i = j
          break
        }
        if (j === s.length - 1) {
          arr.push(currentLength)
          currentLength = 0;
        }
      }
    } else {
      currentLength = 0;
    }
  }
  arr.sort((a,b) => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });
  return arr[0]
}

const string = "()(())"
console.log(longestValidParentheses(string))