# Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

# Return the largest lucky integer in the array. If there is no lucky integer return -1.

def findLucky(arr) :
  obj = {}
  largest = -1
  for num in arr :
    if num in obj :
      obj[num] += 1
    else :
      obj[num] = 1
  for num in obj  :
    if num == obj[num] and num > largest:
      largest = num
  return largest

print(findLucky([1,1,1,1,1,2,2,1,5,5,5,5,5]))