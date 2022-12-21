# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

def contains_duplicate(nums)
  freq = Hash.new(0)
  for num in nums
      freq[num] += 1
      if freq[num] == 2 then return true end
  end
  return false
end

puts contains_duplicate([1,2,3,4,1]) == true
puts contains_duplicate([1,2,3,4,5,6]) == false