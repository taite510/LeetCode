# Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

# Substrings that occur multiple times are counted the number of times they occur.


# First implementation (slow)

def countBinarySubstrings(s):
    count = 0
    i = 1
    length = len(s)
    while i < length:
        size = 0
        orig = s[i]
        while i + size < length and i - size - 1 >= 0 and orig == s[i + size]:
            if s[i + size] != s[i - size - 1]:
                count += 1
            else:
                i += size
                break
            size += 1
        i += 1
    return count


print(countBinarySubstrings('00110011') == 6)


def countBinarySubstringsFaster(s):
    count = 0
    arr = []
    i = 1
    curr = 1
    while i < len(s):
        if s[i] == s[i - 1]:
            curr += 1
        else:
            arr.append(curr)
            curr = 1
        i += 1
    arr.append(curr)
    i = 1
    while i < len(arr):
        count += min(arr[i], arr[i - 1])
        i += 1
    return count


print(countBinarySubstringsFaster('00110011') == 6)
