# Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].

# Return the maximum difference. If no such i and j exists, return -1.

def maximumDifference(nums):
    minimum = nums[0]
    diff = -1
    for i in range(1, len(nums)):
        if nums[i] > minimum:
            diff = max(diff, nums[i] - minimum)
        else:
            minimum = min(minimum, nums[i])
    return diff


print(maximumDifference([1, 5, 2, 10]) == 9)
print(maximumDifference([7, 5, 2, 1]) == -1)
