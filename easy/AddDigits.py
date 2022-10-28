# Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

def addDigits(num):
    while num > 9:
        total = 0
        while num != 0:
            total += num % 10
            num = num // 10
        num = total
    return num


print(addDigits(138) == 3)
