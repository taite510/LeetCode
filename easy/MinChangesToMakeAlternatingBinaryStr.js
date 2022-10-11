// You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.

// The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.

// Return the minimum number of operations needed to make s alternating.

var minOperations = function (s) {
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0 && s[i] === '0') {
      count1++
    } else if (i % 2 !== 0 && s[i] === '1') {
      count1++
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0 && s[i] === '1') {
      count2++
    } else if (i % 2 !== 0 && s[i] === '0') {
      count2++
    }
  }
  return Math.min(count1, count2)
};

console.log(minOperations('1111') === 2)