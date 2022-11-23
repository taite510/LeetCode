# Given a string s and an array of strings words, determine whether s is a prefix string of words.

# A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.

# Return true if s is a prefix string of words, or false otherwise.

def isPrefixString(s, words):
    prefix = ''
    i = 0
    while len(prefix) < len(s):
        try:
            prefix += words[i]
            i += 1
        except:
            break
    return prefix == s


print(isPrefixString('iloveleetcode', [
      'i', 'love', 'leetcode', 'apples']) == True)
print(isPrefixString('luffyisjoyboy', [
      'luffy', 'is', 'the', 'pirate', 'king']) == False)
