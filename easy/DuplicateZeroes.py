# Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

# Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.


def duplicateZeros(arr):
    origLen = len(arr)
    i = 0
    while i < len(arr):
        if arr[i] == 0:
            arr.insert(i, 0)
            arr.pop()
            i += 1
        i += 1


testArr1 = [1, 0, 2, 3, 0, 4, 5, 0]
testArr2 = [1, 2, 3]
duplicateZeros(testArr1)
duplicateZeros(testArr2)
print(testArr1 == [1, 0, 0, 2, 3, 0, 0, 4])
print(testArr2 == [1, 2, 3])
