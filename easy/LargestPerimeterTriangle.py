# Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

def largestPerimeter(nums):
    nums.sort(reverse=True)
    total = 0
    i = 2
    while i < len(nums):
        if nums[i - 2] < nums[i] + nums[i - 1]:
            total = sum(nums[i - 2: i + 1])
            break
        i += 1
    return total


print(largestPerimeter([3, 2, 5, 6, 2, 1]) == 14)
print(largestPerimeter([1, 2, 1]) == 0)
