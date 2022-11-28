# Given an integer array nums, return the most frequent even element.

# If there is a tie, return the smallest one. If there is no such element, return -1.

import math


def mostFrequentEven(nums):
    obj = {}
    frequent = [-1, -math.inf]
    for num in nums:
        if num % 2 == 0:
            obj[num] = obj.get(num, 0) + 1
    for key in obj:
        if obj[key] > frequent[1]:
            frequent = [key, obj[key]]
        elif obj[key] == frequent[1] and key < frequent[0]:
            frequent[0] = key
    return frequent[0]


print(mostFrequentEven([0, 1, 1, 2, 2, 3, 4, 4, 5]) == 2)
print(mostFrequentEven([1, 3, 7, 11]) == -1)
