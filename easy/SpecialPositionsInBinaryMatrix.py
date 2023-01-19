# Given an m x n binary matrix mat, return the number of special positions in mat.

# A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

class Solution:
    def numSpecial(self, mat) -> int:
        count = 0
        row = [0] * len(mat)
        col = [0] * len(mat[0])
        for i, arr in enumerate(mat):
            for j, pos in enumerate(arr):
                if pos == 1:
                    row[i] += 1
                    col[j] += 1
        for i in range(len(row)):
            for j in range(len(col)):
                if mat[i][j] == 1 and row[i] == 1 and col[j] == 1:
                    count += 1
        return count


test = Solution()
print(test.numSpecial([[1, 0, 0], [0, 1, 0], [0, 0, 1]]) == 3)
