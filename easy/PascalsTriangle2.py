# Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

# In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

class Solution:
    def getRow(self, rowIndex: int):
        if rowIndex == 0:
            return [1]
        row = [1, 1]
        i = 1
        while i < rowIndex + 1:
            i += 1
            temp = [1] * i
            for j in range(1, len(temp) - 1):
                temp[j] = row[j] + row[j - 1]
            row = temp
        return row


test = Solution()
print(test.getRow(3) == [1, 3, 3, 1])
