// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

const isPalindrome = function(x) {
  x = x + '';
  for (let i = 0; i < (x.length)/2; i++) {
    if (x[i] !== x[x.length - 1 - i]) {
        return false;
    }
  }
  return true;
};

console.log(isPalindrome(12366321))