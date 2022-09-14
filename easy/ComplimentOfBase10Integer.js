// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer n, return its complement.

var bitwiseComplement = function(n) {
  const bin = (n >>> 0).toString(2);
  let compBin = '';
  for (let i = 0; i < bin.length; i++) {
      if (bin[i] === '0') {
          compBin += '1';
      } else {
          compBin += '0';
      }
  }
  return parseInt(compBin, 2);
};

console.log(bitwiseComplement(7) === 0)