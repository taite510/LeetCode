# Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

# In the American keyboard:

# the first row consists of the characters "qwertyuiop",
# the second row consists of the characters "asdfghjkl", and
# the third row consists of the characters "zxcvbnm".

def findWords(words):
    res = []
    [row1, row2, row3] = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    for word in words:
        lowerWord = word.lower()
        whichRow = ''
        i = 1
        if lowerWord[i - 1] in row1:
            whichRow = row1
        elif lowerWord[i - 1] in row2:
            whichRow = row2
        else:
            whichRow = row3
        while i < len(word):
            if lowerWord[i] in whichRow:
                i += 1
            else:
                break
        if i == len(word):
            res.append(word)
    return res


print(findWords(["Hello", "Alaska", "Dad", "Peace"]) == ["Alaska", "Dad"])
