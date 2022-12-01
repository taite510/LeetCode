# You are given a 2D integer array ranges and two integers left and right. Each ranges[i] = [starti, endi] represents an inclusive interval between starti and endi.

# Return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges. Return false otherwise.

# An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.

def isCovered(ranges, left, right):
    count = 0
    for i in range(left, right + 1):
        for low, high in ranges:
            if low <= i <= high:
                count += 1
                break
    return count == right - left + 1


print(isCovered([[1, 2], [3, 4], [5, 6]], 2, 5) == True)
print(isCovered([[1, 10], [10, 20]], 21, 2) == False)
