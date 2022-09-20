// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

const hasAlternatingBits = function(n) {
  const bin = (n >>> 0).toString(2);
  for (let i = 1; i < bin.length; i++) {
      if (bin[i] === bin[i - 1]) {
          return false;
      }
  }
  return true;
};

console.log(hasAlternatingBits(5) === true)