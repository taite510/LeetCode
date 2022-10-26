# Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

# Note that after backspacing an empty text, the text will continue empty.

def backspace(s):
    res = []
    for char in s:
        if char == '#' and len(res):
            res.pop()
        elif char is not '#':
            res.append(char)
    return ''.join(res)


def backspaceCompare(s, t) -> bool:
    return backspace(s) == backspace(t)


print(backspaceCompare('ab#c', 'ad#c') == True)
print(backspaceCompare('a#c', 'dd#') == False)
