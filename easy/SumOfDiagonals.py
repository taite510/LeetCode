# Given a square matrix mat, return the sum of the matrix diagonals.

# Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

def diagonalSum(mat):
    n, total = len(mat), 0
    for i in range(n):
        total += mat[n - i - 1][i]
        total += mat[i][i]
    if n % 2 == 1:
        total -= mat[n // 2][n // 2]
    return total


print(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) == 25)
