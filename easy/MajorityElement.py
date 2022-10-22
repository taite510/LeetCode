# Given an array nums of size n, return the majority element.

# The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

from collections import Counter


def majorityElement(nums):
    count = Counter(nums)
    for num in count:
        if count[num] > len(nums) // 2:
            return num


print(majorityElement([2, 2, 1, 1, 1, 2, 2, 3, 2]) == 2)
