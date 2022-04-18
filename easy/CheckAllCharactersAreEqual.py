# Given a string s, return true if s is a good string, or false otherwise.

# A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

def areOccurrencesEqual(s) :
  num, i, arr = s.count(s[0]), 1, [s[0]]
  while i < len(s) :
    if s[i] not in arr :
        arr.append(s[i])
        if num != s.count(s[i]) :
            return False
    i += 1
  return True

print(areOccurrencesEqual('abcdabcdabcd'))