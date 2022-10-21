# Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

# Return any array that satisfies this condition.

def sortArrayByParity(nums):
    i = 0
    j = len(nums) - 1
    while i < j:
        if nums[i] % 2 != 0:
            while i < j:
                if nums[j] % 2 == 0:
                    nums[i], nums[j] = nums[j], nums[i]
                    break
                j -= 1
        i += 1
    return nums


print(sortArrayByParity([3, 1, 2, 4]) == [4, 2, 1, 3])
