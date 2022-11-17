# Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

# Return the kth positive integer that is missing from this array.

def findKthPositive(arr, k):
    miss = 0
    i = 1
    j = 0
    while miss < k:
        try:
            if arr[j] != i:
                miss += 1
            else:
                j += 1
            i += 1
        except:
            break
    return i - 1 + (k - miss)


print(findKthPositive([2, 3, 4, 7, 11], 5) == 9)
