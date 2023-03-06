# You are given an array of strings words and a string chars.

# A string is good if it can be formed by characters from chars (each character can only be used once).

# Return the sum of lengths of all good strings in words.
from typing import List


class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        total = 0
        charObj = {}
        for char in chars:
            charObj[char] = charObj.get(char, 0) + 1
        for word in words:
            copy = charObj.copy()
            isGood = True
            for char in word:
                if char in copy and copy[char] > 0:
                    copy[char] -= 1
                else:
                    isGood = False
                    break
            if isGood:
                total += len(word)
        return total


test = Solution()
print(test.countCharacters(["cat", "bt", "hat", "tree"], "atach") == 6)
