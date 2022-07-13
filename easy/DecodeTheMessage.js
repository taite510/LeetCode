// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
// Return the decoded message.

const decodeMessage = function(key, message) {
  let cypher = {};
  let index = 0;
  let decoded = '';
  for (let i = 0; i < key.length; i++) {
    if (cypher[key[i]] === undefined && key[i] !== ' ') {
      cypher[key[i]] = String.fromCharCode(97 + index);
      index++;
    }
  }
  for (let i = 0; i < message.length; i++) {
    if (message[i] !== ' ') {
      decoded += cypher[message[i]];
    } else {
      decoded += ' ';
    }
  }
  return decoded;
};

console.log(decodeMessage('eljuxhpwnyrdgtqkviszcfmabo', 'zwx hnfx lqantp mnoeius ycgk vcnjrdb'))