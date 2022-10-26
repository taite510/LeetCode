# Given a positive integer num, write a function which returns True if num is a perfect square else False.

# Follow up: Do not use any built-in library function such as sqrt.

def isPerfectSquare(num):
    low = 1
    high = num // 2
    while low < high:
        mid = ((high - low + 1) // 2) + low
        if mid * mid > num:
            high = mid - 1
        else:
            low = mid
    return low * low == num


print(isPerfectSquare(16) == True)
print(isPerfectSquare(14) == False)
