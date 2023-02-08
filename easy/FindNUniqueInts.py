# Given an integer n, return any array containing n unique integers such that they add up to 0.

class Solution:
    def sumZero(self, n: int):
        res = []
        if n % 2 == 1:
            res.append(0)
            n -= 1
        while n > 0:
            res.extend([n, -n])
            n -= 2
        return res


test = Solution()
ans = test.sumZero(6)
print(sum(ans) == 0 and len(ans) == 6)
