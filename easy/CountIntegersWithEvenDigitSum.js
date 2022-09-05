// Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

// The digit sum of a positive integer is the sum of all its digits.

const countEven = function(num) {
  let odds = {'1': true,'3': true,'5': true,'7': true,'9': true};
  let count = 0;
  for (let i = 1; i <= num; i++) {
      let str = i + '';
      let numOdds = 0;
      str.split('').forEach((a) => {
          odds[a] ? numOdds++ : null;
      })
      numOdds % 2 === 0 ? count++ : null;
  }
  return count;
};

console.log(countEven(77))