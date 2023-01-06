# You are given a 0-indexed string array words.

# Two strings are similar if they consist of the same characters.

# For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'.
# However, "abacba" and "bcfd" are not similar since they do not consist of the same characters.
# Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar.

def similarPairs(words):
    obj = {}
    pairs = 0
    for word in words:
        altWord = ''.join(sorted(set(word)))
        obj[altWord] = obj.get(altWord, 0) + 1
    for key in obj:
        n = obj[key]
        pairs += (n * (n - 1)) // 2
    return pairs


print(similarPairs(["aba", "aabb", "abcd", "bac", "aabc"]) == 2)
