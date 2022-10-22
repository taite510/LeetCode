# Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

# Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.


def relativeSortArray(arr1, arr2):
    obj = {}
    res = []
    rem = []
    for num in arr1:
        if num in arr2:
            obj[num] = obj.get(num, 0) + 1
        else:
            rem.append(num)
    for num in arr2:
        res += [num] * obj[num]
    rem.sort()
    res += rem
    return res


print(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [
      2, 1, 4, 3, 9, 6]) == [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19])
