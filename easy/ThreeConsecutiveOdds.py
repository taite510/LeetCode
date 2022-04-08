# Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

def threeConsecutiveOdds(arr) :
  counter = 0
  for num in arr :
    if num % 2 != 0 :
      if counter == 2 :
        return True
      counter += 1
    else :
      counter = 0
  return False

print(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]))