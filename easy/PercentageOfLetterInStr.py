# Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

def percentageLetter(s, letter):
    return s.count(letter) * 100 // len(s)


print(percentageLetter('leetcode', 'e') == 38)
