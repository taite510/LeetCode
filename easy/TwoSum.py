# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.


# slow solution
def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]


# fast solution
def twoSumFast(nums, target):
    obj = {}
    for i in range(len(nums)):
        if nums[i] in obj:
            return [obj[nums[i]], i]
        else:
            obj[target - nums[i]] = i


print(twoSum([2, 7, 11, 15], 9) == [0, 1])
print(twoSumFast([2, 7, 11, 15], 9) == [0, 1])
