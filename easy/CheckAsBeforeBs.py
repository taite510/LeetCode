# Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

def checkString(s) :
  hasB = False
  for letter in s :
    if letter == 'a' and hasB == True :
      return False
    if letter == 'b' :
      hasB = True
  return True

print(checkString('aaaabbbbab'))