# Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

# Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

def findContentChildren(g, s):
    g.sort()
    s.sort()
    i = 0
    j = 0
    count = 0
    while i < len(g) and j < len(s):
        if g[i] <= s[j]:
            count += 1
            i += 1
        j += 1
    return count


print(findContentChildren([1, 2, 3], [1, 1, 2]) == 2)
print(findContentChildren([6, 7, 8, 9], [1, 2, 3]) == 0)