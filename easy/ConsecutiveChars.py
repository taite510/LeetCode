# The power of the string is the maximum length of a non-empty substring that contains only one unique character.

# Given a string s, return the power of s.

def maxPower(s):
    power = 1
    currPow = 1
    i = 1
    while i < len(s):
        if s[i] == s[i - 1]:
            currPow += 1
        else:
            if currPow > power:
                power = currPow
            currPow = 1
        i += 1

    return max(power, currPow)


print(maxPower('abbcccddddeeeeedcba') == 5)
