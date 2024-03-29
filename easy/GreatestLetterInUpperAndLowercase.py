# Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.

# An English letter b is greater than another letter a if b appears after a in the English alphabet.

def greatestLetter(s):
    up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    low = 'abcdefghijklmnopqrstuvwxyz'
    i = 25
    while i >= 0:
        if up[i] in s and low[i] in s:
            return up[i]
        i -= 1
    return ''


print(greatestLetter('AbCdEfGhIjK') == '')
print(greatestLetter('luFfyiSJoybOy') == 'O')
