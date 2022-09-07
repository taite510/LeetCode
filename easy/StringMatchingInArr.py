# Given an array of string words. Return all strings in words which is substring of another word in any order.

# String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

def stringMatching(words):
  resArr = []
  i = 0
  while i < len(words):
    j = 0
    while j < len(words):
      if i != j and words[i] in words[j] and words[i]:
        resArr.append(words[i])
        break
      j += 1
    i += 1
  return resArr

print(stringMatching(["mass","as","hero","superhero"]))