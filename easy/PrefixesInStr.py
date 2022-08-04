# You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

# Return the number of strings in words that are a prefix of s.

# A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.

def countPrefixes(words, s) :
  count = 0
  for word in words :
    if len(word) <= len(s) :
      i = 0
      isPrefix = True
      while i < len(word) :
        if word[i] != s[i] :
          isPrefix = False
          break
        i += 1
      if isPrefix :
        count += 1
  return count

print(countPrefixes(["a","b","c","ab","bc","abc"], 'abc'))