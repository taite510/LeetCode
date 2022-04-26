# You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

# We repeatedly make duplicate removals on s until we no longer can.

# Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

# slow
def removeDuplicates(s) :
  i,  res = 1, s
  try :
    previousLetter = s[0]
  except :
    return s
  while i < len(s) :
    currentLetter = s[i]
    if currentLetter == previousLetter :
      s = s.replace(currentLetter + currentLetter, '')
      res = removeDuplicates(s)
    previousLetter = currentLetter
    i += 1
  return res

print(removeDuplicates('aaaaaaaaa'))

def removeDuplicates2(s) :
  i = 1
  while i < len(s) :
    if s[i] == s[i - 1] :
      s = s.replace(s[i] + s[i], '')
      if i > 1 :
        i -= 1
    else :
      i += 1
  return s

print(removeDuplicates2('abbaca'))