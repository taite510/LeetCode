# A substring is a contiguous (non-empty) sequence of characters within a string.

# A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it.

# Given a string word, return the number of vowel substrings in word.

class Solution:
    def countVowelSubstrings(self, word: str) -> int:
        vowels = ['a', 'e', 'i', 'o', 'u']
        vowelObj = {}
        total = 0
        start = 0
        for i, char in enumerate(word):
            if char in vowels:
                if not vowelObj:
                    start = i
                vowelObj[char] = i
                if len(vowelObj) == 5:
                    total += min(vowelObj.values()) - start + 1
            elif vowelObj:
                vowelObj = {}
        return total


test = Solution()
print(test.countVowelSubstrings('cuaieuouac') == 7)
