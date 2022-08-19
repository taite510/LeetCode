// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

const strToObj = function(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
      obj[str[i]] = obj[str[i]] + 1 || 1;
  }
  return obj;
}

const commonChars = function(words) {
  return words.reduce((a, b) => {
      const objA = strToObj(a);
      const objB = strToObj(b);
      const arr = [];
      for (let key in objA) {
          if (objB[key]) {
              let min = Math.min(objA[key], objB[key]);
              while (min > 0) {
                  arr.push(key);
                  min--;
              }
          }
      }
      return arr.join('');
  }).split('');
};

console.log(commonChars(["bella","label","roller"]))