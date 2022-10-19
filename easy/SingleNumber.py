# Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

# You must implement a solution with a linear runtime complexity and use only constant extra space.


def singleNumber(nums):
    res = 0
    for num in nums:
        res ^= num
    return res


print(singleNumber([4, 1, 2, 1, 2]) == 4)
