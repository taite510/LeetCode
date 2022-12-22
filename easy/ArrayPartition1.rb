# Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

def array_pair_sum(nums)
  sum = 0
  nums.sort!
  i = nums.length - 1
  while i >= 0
      sum += [nums[i], nums[i - 1]].min
      i -= 2
  end
  return sum
end

puts array_pair_sum([6,2,6,5,1,2]) == 9