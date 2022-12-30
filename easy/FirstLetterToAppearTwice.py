# Given a string s consisting of lowercase English letters, return the first letter to appear twice.

# Note:

# A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
# s will contain at least one letter that appears twice.

def repeatedCharacter(s):
    obj = {}
    for char in s:
        if char in obj:
            return char
        else:
            obj[char] = 1


print(repeatedCharacter('abcddef') == 'd')
