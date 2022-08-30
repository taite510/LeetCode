// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer num, return its complement.

const decToBin = function(dec) {
  return (dec >>> 0).toString(2);
}

const binToDec = function(bin) {
    return parseInt(bin, 2);
}

var findComplement = function(num) {
    const bin = decToBin(num);
    let comp = '';
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === '0') {
            comp += '1';
        } else {
            comp += '0';
        }
    }
    return binToDec(comp);
};

console.log(findComplement(55))