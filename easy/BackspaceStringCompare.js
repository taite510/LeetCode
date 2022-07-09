// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

const backspaceCompare = function(s, t) {
  const backspace = function(string) {
      let stack = [];
      for (let i = 0; i < string.length; i++) {
          if (string[i] === '#') {
              stack.pop();
          } else {
              stack.push(string[i]);
          }
      }
      return stack.join('');
  }
  return backspace(s) === backspace(t);
};

console.log(backspaceCompare('ad#c', 'af#c'))