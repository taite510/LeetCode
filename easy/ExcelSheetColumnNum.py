# Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        total = 0
        for i, char in enumerate(columnTitle[::-1]):
            num = ord(char) - 64
            total += (26 ** i) * num
        return total


test = Solution()
print(test.titleToNumber('AB') == 28)
print(test.titleToNumber('ZY') == 701)
