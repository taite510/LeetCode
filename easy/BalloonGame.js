// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

var maxNumberOfBalloons = function(text) {
  const charObj = {};
  const b = 'balon';
  let max = Infinity;
  for (let i = 0; i < text.length; i++) {
      charObj[text[i]] = charObj[text[i]] + 1 || 1;
  }
  for (let i = 0; i < b.length; i++) {
      let freq = charObj[b[i]];
      if (freq) {
          if (b[i] === 'l' || b[i] == 'o') {
              if (freq / 2 < max) {
                  max = Math.floor(freq / 2);
              }
          } else {
              if (freq < max) {
                  max = freq;
              }
          }
      } else {
          return 0;
      }
  }

  return max;
};

console.log(maxNumberOfBalloons("loonbalxballpoon"))