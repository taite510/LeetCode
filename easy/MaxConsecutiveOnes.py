# Given a binary array nums, return the maximum number of consecutive 1's in the array.

def findMaxConsecutiveOnes(nums):
    count = 0
    maxOnes = 0
    for i in range(len(nums)):
        if nums[i] == 1:
            count += 1
            if count > maxOnes:
                maxOnes = count
        else:
            count = 0
    return maxOnes


print(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]) == 3)
