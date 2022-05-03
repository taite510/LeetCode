// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


const letterCombinations = function(digits) {
  const arr = [];
  if (digits.length > 0) {
    const letter = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",'6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"};
    const comboGenerator = (digits, str, i) => {
      if (i === digits.length) {
        return arr.push(str);
      }
      const currentLetters = letter[digits[i]];
      for (let j = 0; j < currentLetters.length; j++) {
        comboGenerator(digits, str += currentLetters[j], i += 1);
        i -= 1;
        str = str.slice(0, -1);
      }
    }
    comboGenerator(digits, '', 0);
  }
  return arr;
};


console.log(letterCombinations(''))