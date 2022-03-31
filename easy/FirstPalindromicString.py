# Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

# A string is palindromic if it reads the same forward and backward.

def firstPalindrome (words) :
  str = ''
  for word in words :
    i = 0
    isPalindrome = True
    while i <= len(word) / 2 :
      if word[i] != word[len(word) - i - 1] :
        isPalindrome = False
        break
      i += 1
    if isPalindrome :
      return word
  return str

print(firstPalindrome(["pope","notapalindrome","mappam","racecar"]))