# The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

# For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
# Given an integer n, return its complement.

def bitwiseComplement(n):
    binary = bin(n)[2:]
    opp = ''
    for num in binary:
        if num == '0':
            opp += '1'
        else:
            opp += '0'
    return int(opp, 2)


print(bitwiseComplement(5) == 2)
