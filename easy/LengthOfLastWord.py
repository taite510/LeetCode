# Given a string s consisting of words and spaces, return the length of the last word in the string.

# A word is a maximal
# substring
#  consisting of non-space characters only.

def lengthOfLastWord(s):
    arr = s.split()
    return len(arr[-1])


print(lengthOfLastWord('luffy       is  still    joyboy     ') == 6)
