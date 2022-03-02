// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

var reverseOnlyLetters = function(s) {
  let letters = {'a': true,'b': true,'c': true,'d': true,'e': true,'f': true,'g': true,'h': true,'i': true,'j': true,'k': true,'l': true,'m': true,'n': true,'o': true,'p': true,'q': true,'r': true,'s': true,'t': true,'u': true,'v': true,'w': true,'x': true,'y': true,'z': true,'A': true,'B': true,'C': true,'D': true,'E': true,'F': true,'G': true,'H': true,'I': true,'J': true,'K': true,'L': true,'M': true,'N': true,'O': true,'P': true,'Q': true,'R': true,'S': true,'T': true,'U': true,'V': true,'W': true,'X': true,'Y': true,'Z': true};
  let arr = [];
  s = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (letters[s[i]] !== undefined) {
      arr.push(s[i])
      s[i] = '\\'
    }
  }
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '\\') {
      s[i] = arr.splice(0, 1)[0]
    }
  }
  return s.join('')
};

let testStr = "Test1ng-Leet=code-Q!";
console.log(reverseOnlyLetters(testStr))