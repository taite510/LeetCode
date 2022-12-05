# The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

# F(0) = 0, F(1) = 1
# F(n) = F(n - 1) + F(n - 2), for n > 1.
# Given n, calculate F(n).

def fib(n)
  if n < 2
      return n
  end
  a = 0
  b = 1
  for i in 1...n
      temp = a + b
      a = b
      b = temp
  end
  return b
end

puts fib(3) == 2
puts fib(10) == 55