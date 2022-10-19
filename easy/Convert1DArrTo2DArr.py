# You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using all the elements from original.

# The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.

# Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.


# First implementation (slow)

def construct2DArray(original, m, n):
    resArr = []
    if (m * n) == len(original):
        i = 0
        row = []
        while i < len(original):
            row.append(original[i])
            if (i + 1) % n == 0:
                resArr.append(row)
                row = []
            i += 1
    return resArr


print(construct2DArray([1, 2, 3, 4], 2, 2) == [[1, 2], [3, 4]])


def construct2DArrayFast(original, m, n):
    resArr = []
    if (m * n) == len(original):
        i = 0
        while i < len(original):
            resArr.append(original[i:(i+n)])
            i += n
    return resArr


print(construct2DArrayFast([1, 2, 3, 4], 2, 2) == [[1, 2], [3, 4]])
