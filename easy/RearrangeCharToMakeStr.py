# You are given two 0-indexed strings s and target. You can take some letters from s and rearrange them to form new strings.

# Return the maximum number of copies of target that can be formed by taking letters from s and rearranging them.

import math


def strToObj(s):
    obj = {}
    for char in s:
        obj[char] = obj.get(char, 0) + 1
    return obj


def rearrangeCharacters(s, target):
    inputObj = strToObj(s)
    targetObj = strToObj(target)
    copies = math.inf
    for char in targetObj:
        if char in inputObj:
            copies = min(copies, inputObj[char] // targetObj[char])
        else:
            return 0
    return copies


print(rearrangeCharacters('ilovecodingonleetcode', 'code') == 2)
