# An alphabetical continuous string is a string consisting of consecutive letters in the alphabet. In other words, it is any substring of the string "abcdefghijklmnopqrstuvwxyz".

# For example, "abc" is an alphabetical continuous string, while "acb" and "za" are not.
# Given a string s consisting of lowercase letters only, return the length of the longest alphabetical continuous substring.

def longestContinuousSubstring(s):
    curr = 1
    longest = 1
    for i in range(1, len(s)):
        if ord(s[i]) - ord(s[i - 1]) == 1:
            curr += 1
        else:
            longest = max(longest, curr)
            curr = 1
    return max(longest, curr)


print(longestContinuousSubstring('rxdefkia') == 3)
