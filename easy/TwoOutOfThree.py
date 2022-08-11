# Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

def twoOutOfThree(nums1, nums2, nums3) :
  resArr = []
  for num in nums1 :
      if num not in resArr and num in nums2 :
          resArr.append(num)
      elif num not in resArr and num in nums3 :
          resArr.append(num)
  for num in nums2 :
      if num not in resArr and num in nums3 :
          resArr.append(num)
  return resArr

print(twoOutOfThree([1,1,3,2], [2,3], [3]))