# Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

# The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
# frequency
#  of at least one of the chosen numbers is different.

# The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.


def recurse(cans, arr, currNum, res):
    if currNum < 0:
        return
    elif currNum == 0:
        res.append(arr)
        return
    for i in range(len(cans)):
        recurse(cans[i:], arr + [cans[i]], currNum - cans[i], res)


def combinationSum(cans, target):
    res = []
    cans.sort()
    recurse(cans, [], target, res)
    return res


print(combinationSum([2, 3, 6, 7], 7) == [[2, 2, 3], [7]])
