# Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

require 'set'

def find_disappeared_numbers(nums)
  set = nums.to_set
  res = []
  for i in 1..nums.length
      unless set.include?(i)
          res.append(i)
      end
  end
  return res
end


# simpler solution
def find_disappeared_numbers_alt(nums)
  (1..nums.length).to_a - nums.uniq
end

puts find_disappeared_numbers([4,3,2,7,8,2,3,1]) == [5,6]
puts find_disappeared_numbers_alt([4,3,2,7,8,2,3,1]) == [5,6]