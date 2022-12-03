# Given a binary array nums, return the maximum number of consecutive 1's in the array.

def find_max_consecutive_ones(nums)
  curr = 0
  max = 0
  nums.each do |num|
      if num == 1
          curr += 1
          max = [max, curr].max
      else
          curr = 0
      end
  end
  return max
end

puts find_max_consecutive_ones([0,1,1,0,0,0,1,0]) == 2