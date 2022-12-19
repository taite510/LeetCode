# The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

# You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

# For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

# Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

# slow
def next_greater_element(nums1, nums2)
  res = []
  for i in 0...nums1.length
      found = false
      greater = -1
      for j in 0...nums2.length
          if found && nums2[j] > nums1[i]
              greater = nums2[j]
              break
          elsif nums1[i] == nums2[j]
              found = true
          end
      end
      res.append(greater)
  end
  return res
end

# added a hash to increase speed
def faster_next_greater_element(nums1, nums2)
  res = []
  index_hash = {}
  for i in 0...nums2.length
      index_hash[nums2[i]] = i
  end
  for i in 0...nums1.length
      greater = -1
      for j in index_hash[nums1[i]]...nums2.length
          if nums2[j] > nums1[i]
              greater = nums2[j]
              break
          end
      end
      res.append(greater)
  end
  return res
end

puts next_greater_element([4,1,2], [1,3,4,2]) == [-1, 3, -1]
puts faster_next_greater_element([4,1,2], [1,3,4,2]) == [-1, 3, -1]