# In a string s of lowercase letters, these letters form consecutive groups of the same character.

# For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".

# A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].

# A group is considered large if it has 3 or more characters.

# Return the intervals of every large group sorted in increasing order by start index.

def largeGroupPositions(s):
    res = []
    s += '*'
    start = 0
    size = 1
    for i in range(1, len(s)):
        if s[i] == s[i - 1]:
            if size == 1:
                start = i - 1
            size += 1
        else:
            if size > 2:
                res.append([start, i - 1])
            size = 1
    return res


print(largeGroupPositions('abcdddeeeeaabbbcd') == [[3, 5], [6, 9], [12, 14]])
print(largeGroupPositions('aabcc') == [])
