# Given an array of integers nums, you start with an initial positive value startValue.

# In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

# Return the minimum positive value of startValue such that the step by step sum is never less than 1.

def min_start_value(nums)
  lowest = 0
  total = 0
  for num in nums
      total += num
      if total < lowest
          lowest = total
      end
  end
  return 1 + -lowest
end

puts min_start_value([-3,2,-3,4,2]) == 5

puts min_start_value([2,4]) == 1