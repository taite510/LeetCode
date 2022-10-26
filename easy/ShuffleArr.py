# Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

# Return the array in the form [x1,y1,x2,y2,...,xn,yn].

def shuffle(nums, n):
    arr = []
    for i in range(n):
        arr.extend([nums[i], nums[i + n]])
    return arr


print(shuffle([2, 5, 1, 3, 4, 7], 3) == [2, 3, 5, 4, 1, 7])
