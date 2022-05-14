// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:

const uniqueMorseRepresentations = function(words) {
  const morse = {"a": ".-","b": "-...","c": "-.-.","d": "-..","e": ".","f": "..-.","g": "--.","h": "....","i": "..","j": ".---","k": "-.-","l": ".-..","m": "--","n": "-.","o": "---","p": ".--.","q": "--.-","r": ".-.","s": "...","t": "-","u": "..-","v": "...-","w": ".--","x": "-..-","y": "-.--","z": "--.."};
  let obj = {};
  for (let i = 0; i < words.length; i++) {
    let arr = [];
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      arr.push(morse[word[j]])
    }
    obj[arr.join('')] = true;
  }
  return Object.keys(obj).length
};

console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"]))