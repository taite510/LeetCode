# Given an array of integers nums, return the number of good pairs.

# A pair (i, j) is called good if nums[i] == nums[j] and i < j.

def numIdenticalPairs(nums) :
  [pairs, i, length] = [0, 0, len(nums)]
  while i < length :
    j = length - 1
    while j > i :
      if nums[i] == nums[j] :
        pairs += 1
      j -= 1
    i += 1
  return pairs

print(numIdenticalPairs([1,2,3,1,1,3]))