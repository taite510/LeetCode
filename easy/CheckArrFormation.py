# You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].

# Return true if it is possible to form the array arr from pieces. Otherwise, return false.

def canFormArray(arr, pieces):
    i = 0
    count = 0
    for j in range(len(arr)):
        if arr[i:j + 1] in pieces:
            count += 1
            i = j + 1
    return count == len(pieces)


print(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]) == True)
