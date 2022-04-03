# Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

# The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

def shortestToChar(s, c) :
  (arr, location) = ([], [])
  i = 0
  for letter in s :
    if letter == c :
      location.append(i)
    i += 1
  j = 0
  while j < len(s) :
    shortest = float('inf')
    for num in location :
      diff = abs(num - j)
      if diff < shortest :
        shortest = diff
        if shortest == 0 :
          break
    arr.append(shortest)
    j += 1
  return arr


testS = "loveleetcode"
testC = "e"

print(shortestToChar(testS, testC))