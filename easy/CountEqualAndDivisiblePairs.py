# Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.

def countPairs(nums, k) :
  [pairs, i, length] = [0, 0, len(nums)]
  while i < length :
    j = length - 1
    while j > i :
      if nums[i] == nums[j] and (i * j) % k == 0 :
        pairs += 1
      j -= 1
    i += 1
  return pairs

print(countPairs([3,1,2,2,2,1,3], 2))