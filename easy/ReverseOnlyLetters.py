# Given a string s, reverse the string according to the following rules:

# All the characters that are not English letters remain in the same position.
# All the English letters (lowercase or uppercase) should be reversed.
# Return s after reversing it.

def reverseOnlyLetters(s) :
  i = 0
  arr = []
  s = list(s)
  for chara in s :
    if chara.isalpha() :
      arr.append(s[i])
      s[i] = None
    i += 1
  i = 0
  for chara in s :
    if chara == None :
      s[i] = arr[len(arr) - 1]
      del arr[len(arr) - 1]
    i += 1
  return ''.join(s)

testStr = "Test1ng-Leet=code-Q!"
print(reverseOnlyLetters(testStr))
