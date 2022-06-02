// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

const isSelfDividing = function(num) {
  const splitStr = ('' + num).split('');
  for (let i = 0; i < splitStr.length; i++) {
    if (num % splitStr[i] !== 0) {
      return false
    }
  }
  return true
}

const selfDividingNumbers = function(left, right) {
  let arr = [];
  for (let i = left; i <= right; i++) {
    arr.push(i);
  }
  return arr.filter((num) => isSelfDividing(num))
};

console.log(isSelfDividing(128))
console.log(selfDividingNumbers(1,44))