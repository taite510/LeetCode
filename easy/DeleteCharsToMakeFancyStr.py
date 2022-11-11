# A fancy string is a string where no three consecutive characters are equal.

# Given a string s, delete the minimum possible number of characters from s to make it fancy.

# Return the final string after the deletion. It can be shown that the answer will always be unique.

def makeFancyString(s):
    arr = []
    count = 1
    char = s[0]
    for i in range(1, len(s)):
        if s[i] == char:
            count += 1
        else:
            if count > 1:
                arr.append(char)
            arr.append(char)
            char = s[i]
            count = 1
    if count > 1:
        arr.append(char)
    arr.append(char)
    return ''.join(arr)


print(makeFancyString('leeetcode') == 'leetcode')
