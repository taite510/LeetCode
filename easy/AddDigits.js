// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

const addDigits = function(num) {
  let strNum = num + '';
  while (strNum.length > 1) {
      strNum = strNum.split('');
      strNum = strNum.reduce((a,b) => Number(a) + Number(b));
      strNum += '';
  }
  return Number(strNum);
};

console.log(addDigits(777))