# Given an integer array nums (0-indexed) and two integers target and start, find an index i such that nums[i] == target and abs(i - start) is minimized. Note that abs(x) is the absolute value of x.

# Return abs(i - start).

# It is guaranteed that target exists in nums.
import math


def getMinDistance(nums, target, start):
    dist = math.inf
    i = 0
    while i < len(nums):
        if nums[i] == target and abs(start - i) < dist:
            dist = abs(start - i)
        i += 1
    return dist


print(getMinDistance([1, 2, 3, 4, 5, 6, 1], 6, 4) == 1)
