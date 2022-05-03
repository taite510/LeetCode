# Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

def uniqueOccurrences(arr) :
  obj, occurArr = {}, []
  for num in arr :
    obj[num] = obj.get(num, 0) + 1
  for key in obj :
    if obj[key] in occurArr :
      return False
    else :
      occurArr.append(obj[key])
  return True

print(uniqueOccurrences([1,2,2]))
