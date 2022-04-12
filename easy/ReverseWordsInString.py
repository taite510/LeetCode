# Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

def reverseWords(s) :
  s = s.split()
  i = 0
  while i < len(s) :
    s[i] = list(s[i])
    s[i].reverse()
    s[i] = ''.join(s[i])
    i += 1
  return ' '.join(s)

print(reverseWords("Let's take LeetCode contest"))