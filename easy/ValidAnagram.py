# Given two strings s and t, return true if t is an anagram of s, and false otherwise.

# An Anagram is a word or phrase formed by rearranging the obj[s[i]]s of a different word or phrase, typically using all the original obj[s[i]]s exactly once.

def isAnagram(s, t) :
  if len(s) != len(t) :
    return False
  t = list(t)
  for let1 in s :
    i = 0
    for let2 in t :
      if let1 == let2 :
        del t[i]
        break
      i += 1
  return len(t) == 0

print(isAnagram('roxas', 'sorax'))

def isAnagram2(s, t) :
  if len(s) != len(t) :
    return False
  (objS, objT) = ({}, {})
  for letter in s :
    objS[letter] = objS.get(letter, 0) + 1
  for letter in t :
    objT[letter] = objT.get(letter, 0) + 1
  for letter in objS :
    try :
      if (objS[letter] != objT[letter]) :
        return False
    except:
      return False
  return True

print(isAnagram2('roxas', 'soraxn'))


# below is after I figured out that you could directly compare dictionaries in Python
def isAnagram3(s, t) :
  (objS, objT) = ({}, {})
  for letter in s :
    objS[letter] = objS.get(letter, 0) + 1
  for letter in t :
    objT[letter] = objT.get(letter, 0) + 1
  return objS == objT