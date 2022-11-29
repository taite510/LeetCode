# Given two binary strings a and b, return their sum as a binary string.

def addBinary(a, b):
    return bin(int(a, 2) + int(b, 2))[2:]


print(addBinary('11', '1') == '100')
print(addBinary('1010', '1011') == '10101')
