# Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

class Solution:
    def isEmpty(self, charDict) -> bool:
        for key in charDict:
            if charDict[key] != 0:
                return False
        return True

    def findAnagrams(self, s: str, p: str):
        charDict = {}
        res = []
        for char in p:
            charDict[char] = charDict.get(char, 0) + 1
        for char in s[0:len(p)]:
            if char in charDict:
                charDict[char] -= 1
        if self.isEmpty(charDict):
            res.append(0)
        for i in range(1, len(s) - len(p) + 1):
            if s[i - 1] in charDict:
                charDict[s[i - 1]] += 1
            if s[i + len(p) - 1] in charDict:
                charDict[s[i + len(p) - 1]] -= 1
            if self.isEmpty(charDict):
                res.append(i)
        return res
