# The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

# It has a length of k.
# It is a divisor of num.
# Given integers num and k, return the k-beauty of num.

# Note:

# Leading zeros are allowed.
# 0 is not a divisor of any value.
# A substring is a contiguous sequence of characters in a string.

def divisorSubstrings(num, k):
    count = 0
    strNum = str(num)
    for i in range(len(str(num)) - k + 1):
        val = (int(strNum[i: i + k]))
        if val and num % val == 0:
            count += 1
    return count


print(divisorSubstrings(4300043, 2) == 2)
