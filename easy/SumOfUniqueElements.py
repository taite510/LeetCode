# You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

# Return the sum of all the unique elements of nums.

def sumOfUnique(nums):
  sum = 0
  for n in nums:
    if (nums.count(n) == 1):
      sum += n
  return sum

sumOfUnique([1,2,3,2])