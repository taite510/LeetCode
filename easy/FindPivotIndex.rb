# Given an array of integers nums, calculate the pivot index of this array.

# The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

# If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

# Return the leftmost pivot index. If no such index exists, return -1.

def pivot_index(nums)
  right = nums.sum - nums[0]
  left = 0
  i = 1
  return 0 if right == left
  while i < nums.length
      left += nums[i - 1]
      right -= nums[i]
      return i if right == left
      i += 1
  end
  return -1
end

puts pivot_index([1,7,3,6,5,6]) == 3
puts pivot_index([1,2,3,4,5]) == -1