# Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

import math


class Solution:
  # first implementation (slow)
    def firstUniqChar1(self, s: str) -> int:
        for i, char in enumerate(s):
            if char not in s[i + 1:] and char not in s[0:i]:
                return i
        return -1

    # second implementation (faster)
    def firstUniqChar2(self, s: str) -> int:
        charDict = {}
        index = math.inf
        for i, char in enumerate(s):
            charDict[char] = [charDict.get(char, [0, i])[0] + 1, i]
        for value in charDict.values():
            if value[0] == 1:
                index = min(index, value[1])
        if index == math.inf:
            return -1
        else:
            return index


test = Solution()
print(test.firstUniqChar1('luffy is joyboy') == 0)
print(test.firstUniqChar2('luffy is joyboy') == 0)
