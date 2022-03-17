// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

var hammingWeight = function(n) {
  let counter = 0;
  while(n != 0) {
    counter += n & 1;
    n = n >>> 1;
  }
  return counter;
};

let testNum = 00000000000000000000000000001011;
console.log(hammingWeight(testNum))