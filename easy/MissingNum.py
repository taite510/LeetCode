# Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


# Simple but slow implementation

def missingNumber(nums):
    i = len(nums)
    while i >= 0:
        if i not in nums:
            return i
        i -= 1


print(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) == 8)


# Faster implementation


def missingNumberFast(nums):
    n = len(nums)
    return n * (n + 1) // 2 - sum(nums)


print(missingNumberFast([9, 6, 4, 2, 3, 5, 7, 0, 1]) == 8)
