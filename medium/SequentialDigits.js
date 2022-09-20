// An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

// Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

const sequentialDigits = function(low, high) {
  const resArr = [];
  const digits = '123456789';
  let lowLen = (low + '').length;
  const highLen = (high + '').length;
  while (lowLen <= highLen) {
      for (let i = lowLen; i <= digits.length; i++) {
          let num = Number(digits.slice(i - lowLen, i));
          if (low <= num && num <= high) {
              resArr.push(num);
          } else if (num > high) {
              break;
          }
      }
      lowLen++;
  }
  return resArr;
};

console.log(sequentialDigits(100, 300))