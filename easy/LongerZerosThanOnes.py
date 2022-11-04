# Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise.

# For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the longest continuous segment of 0s has length 3.
# Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0. The same applies if there is no 1's.

def checkZeroOnes(s):
    zeros = 0
    ones = 0
    curr = 1
    for i in range(1, len(s)):
        if s[i] == s[i - 1]:
            curr += 1
        else:
            if s[i - 1] == '0':
                zeros = max(zeros, curr)
            else:
                ones = max(ones, curr)
            curr = 1
    if s[-1] == '0':
        zeros = max(zeros, curr)
    else:
        ones = max(ones, curr)
    return ones > zeros


print(checkZeroOnes("110100010") == False)
