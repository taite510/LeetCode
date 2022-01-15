// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

var fib = function(n) {
  if (n < 2) {
    return n;
  }
  let a = 0;
  let b = 1;
  for (let i = 1; i < n; i++) {
    let temp = b;
    b = b + a;
    a = temp;
  }
  return b;
};


console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(9))
console.log(fib(10))
console.log(fib(11))