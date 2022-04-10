# Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

# The value of |x| is defined as:

# x if x >= 0.
# -x if x < 0.

def countKDifference(nums, k) :
  [count, i, length] = [0, 0, len(nums)]
  while i < length :
    j = length - 1
    while j > i :
      if abs(nums[i] - nums[j]) == k :
        count += 1
      j -= 1
    i += 1
  return count

print(countKDifference([1,2,2,1], 1))