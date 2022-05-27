# Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

# The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

from pkg_resources import find_distributions


def findGCD(nums) :
  def gcd (a, b) :
    if b  == 0 :
      return a
    else :
      return gcd(b, a % b)
  return gcd(min(nums), max(nums))

findGCD([2,5,6,9,10])