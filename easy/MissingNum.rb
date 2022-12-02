# Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

def missing_number(nums)
  nums.sort!
  i = 0
  while i < nums.length do
      if i != nums[i]
          break
      end
      i += 1
  end
  return i
end

puts missing_number([0,1]) == 2
puts missing_number([5,2,4,1,0]) == 3