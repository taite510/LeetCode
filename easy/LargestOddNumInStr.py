# You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

# A substring is a contiguous sequence of characters within a string.

def largestOddNumber(num):
    i = len(num) - 1
    while i >= 0:
        if int(num[i]) % 2 == 1:
            break
        i -= 1
    return num[:i + 1]


print(largestOddNumber('532') == '53')
print(largestOddNumber('8642') == '')
