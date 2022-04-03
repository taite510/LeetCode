# Write a function that reverses a string. The input string is given as an array of characters s.

# You must do this by modifying the input array in-place with O(1) extra memory.

def reverseString(s) :
  s.reverse()

arr = ["d","i","a","m","o","n","d","b","a","c","k"]
reverseString(arr)
print(arr)