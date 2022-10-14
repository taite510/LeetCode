# Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Note that you must do this in-place without making a copy of the array.
array = [0, 1, 0, 3, 12]


def moveZeroes(nums):
    i = 0
    j = 0
    while i < len(nums):
        if nums[i] != 0:
            nums[i], nums[j] = nums[j], nums[i]
            j += 1
        i += 1


moveZeroes(array)
print(array == [1, 3, 12, 0, 0])
