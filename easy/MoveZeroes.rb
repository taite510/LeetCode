# Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Note that you must do this in-place without making a copy of the array.

def move_zeroes(nums)
  i = 0
  j = 0
  while i < nums.length
      if nums[i] != 0
          nums[i], nums[j] = nums[j], nums[i]
          j += 1
      end
      i += 1
  end
end


arr = [0,1,0,2,3]
move_zeroes(arr)
puts arr == [1,2,3,0,0]


