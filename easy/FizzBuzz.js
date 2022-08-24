// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

const fizzBuzz = function(n) {
  const resArr = [];
  let i = 1;
  while (i <= n) {
      let str = '';
      if (i % 3 !== 0 & i % 5 !== 0) {
          str += i;
      } else {
          if (i % 3 === 0) {
              str += 'Fizz';
          }
          if (i % 5 === 0) {
              str += 'Buzz';
          }
      }
      resArr.push(str);
      i++;
  }
  return resArr;
};

console.log(fizzBuzz(5))