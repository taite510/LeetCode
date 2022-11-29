# For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

# Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

import math


def gcdOfStrings(str1, str2):
    if str1 + str2 == str2 + str1:
        return str1[:math.gcd(len(str1), len(str2))]
    return ''


print(gcdOfStrings('ABCABC', 'ABC') == 'ABC')
print(gcdOfStrings('ABABAB', 'ABAB') == 'AB')
print(gcdOfStrings('BIRD', 'UP') == '')
