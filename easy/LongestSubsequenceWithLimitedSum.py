# You are given an integer array nums of length n, and an integer array queries of length m.

# Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].

# A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

def bSearch(nums, target):
    low = 0
    high = len(nums) - 1
    while low <= high:
        mid = (low + high) // 2
        if nums[mid] > target:
            high = mid - 1
        elif nums[mid] < target:
            low = mid + 1
        else:
            return mid + 1
    return low


def answerQueries(nums, queries):
    res = []
    sums = []
    nums.sort()
    total = 0
    for num in nums:
        total += num
        sums.append(total)
    for query in queries:
        res.append(bSearch(sums, query))
    return res


print(answerQueries([4, 5, 2, 1], [3, 10, 21]) == [2, 3, 4])
