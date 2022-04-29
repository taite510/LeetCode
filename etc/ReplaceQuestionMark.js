// Replace all ? found in a string with a letter, but the letter cannot be the same as any adjacent letter

function solution(riddle) {
  let letters = ['a','b','c'];
  for (let i = 0; i < riddle.length; i++) {
      if (riddle[i] === '?') {
          for (let j = 0; j < letters.length; j++) {
              let [left, right] = [riddle[i - 1], riddle[i + 1]];
              let currentLetter = letters[j];
              if (currentLetter !== left && currentLetter !== right) {
                  riddle = riddle.substring(0, i) + currentLetter + riddle.substring(i + 1);
                  break
              }
          }
      }
  }
  return riddle;
}

console.log(solution('????????'))