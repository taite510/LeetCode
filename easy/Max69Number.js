// You are given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

var maximum69Number  = function(num) {
  num += '';
  let splitNum = num.split('');
  for (let i = 0; i < splitNum.length; i++) {
    if (splitNum[i] === '6') {
      splitNum[i] = '9';
      return splitNum.join('');
    }
  }
  return num;
};

console.log(maximum69Number(9999666))