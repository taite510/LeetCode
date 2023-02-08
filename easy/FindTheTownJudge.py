# In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

# If the town judge exists, then:

# The town judge trusts nobody.
# Everybody (except for the town judge) trusts the town judge.
# There is exactly one person that satisfies properties 1 and 2.
# You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

# Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

class Solution:
    def findJudge(self, n: int, trust) -> int:
        townies = [0] * (n + 1)
        for person, trusts in trust:
            townies[person] -= 1
            townies[trusts] += 1
        for i in range(1, len(townies)):
            if townies[i] == n - 1:
                return i
        return -1


test = Solution()
print(test.findJudge(3, [[1, 3], [2, 3]]) == 3)
