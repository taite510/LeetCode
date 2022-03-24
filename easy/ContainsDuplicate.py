# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

def containsDuplicate(nums) :
  obj = {}
  for num in nums :
    if num in obj :
      return True
    else :
      obj[num] = True
  return False

print(containsDuplicate([2,3,5,1,6,10,9,11]))