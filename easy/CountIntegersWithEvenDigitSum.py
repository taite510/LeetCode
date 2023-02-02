# Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

# The digit sum of a positive integer is the sum of all its digits.


class Solution:
    def countEven(self, num: int) -> int:
        count = 0
        for i in range(2, num + 1):
            total = 0
            while i >= 10:
                total += i % 10
                i = i // 10
            if (total + i) % 2 == 0:
                count += 1
        return count


test = Solution()
print(test.countEven(30) == 14)
