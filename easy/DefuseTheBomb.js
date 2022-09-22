// You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

// To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

// If k > 0, replace the ith number with the sum of the next k numbers.
// If k < 0, replace the ith number with the sum of the previous k numbers.
// If k == 0, replace the ith number with 0.
// As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

// Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

var decrypt = function(code, k) {
  const resArr = [];
  let i = 0;
  let inc = k > 0 ? 1 : -1;
  while (i < code.length) {
      let sum = 0;
      let j = 0;
      while (j !== k) {
          j += inc;
          if (code[i + j] !== undefined) {
              sum += code[i + j];
          } else if (k > 0) {
              sum += code[(i + j) - code.length];
          } else {
              sum += code[code.length + (i + j)];
          }
      }
      resArr.push(sum);
      i++;
  }
  return resArr;
};

console.log(decrypt([5,7,1,4], 3))