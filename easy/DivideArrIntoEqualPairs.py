# You are given an integer array nums consisting of 2 * n integers.

# You need to divide nums into n pairs such that:

# Each element belongs to exactly one pair.
# The elements present in a pair are equal.
# Return true if nums can be divided into n pairs, otherwise return false.

class Solution:
    def divideArray(self, nums) -> bool:
        obj = {}
        for num in nums:
            obj[num] = obj.get(num, 0) + 1
        for num in obj:
            if obj[num] % 2 != 0:
                return False
        return True


test = Solution()
print(test.divideArray([3, 2, 3, 2, 2, 2]) == True)
print(test.divideArray([1, 2, 3, 4]) == False)
