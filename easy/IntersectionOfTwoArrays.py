# Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

def intersection(nums1, nums2) :
  resArr = []
  i = 0
  while i < len(nums1) :
      num = nums1[i]
      if num in nums2 and num not in resArr :
          resArr.append(num)
      i += 1
  return resArr

print(intersection([4,9,5], [9,4,9,8,4]))