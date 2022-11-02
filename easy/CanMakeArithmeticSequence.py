# A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

# Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

def canMakeArithmeticProgression(arr):
    arr.sort()
    diff = arr[1] - arr[0]
    i = 2
    while i < len(arr):
        if arr[i] - arr[i - 1] != diff:
            return False
        i += 1
    return True


print(canMakeArithmeticProgression([7, 3, 1, 5]) == True)
print(canMakeArithmeticProgression([8, 2, 6]) == False)
