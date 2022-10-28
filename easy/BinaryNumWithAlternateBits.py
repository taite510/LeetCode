# Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

def hasAlternatingBits(n):
    bStr = bin(n)
    i = 3
    while i < len(bStr):
        if bStr[i] == bStr[i - 1]:
            return False
        i += 1
    return True


print(hasAlternatingBits(5) == True)
print(hasAlternatingBits(7) == False)
