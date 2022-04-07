# There are n houses evenly lined up on the street, and each house is beautifully painted.

# You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.

# Return the maximum distance between two houses with different colors.

# The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.

def maxDistance(colors) :
  [max, i] = [0, 0]
  while i < len(colors):
    j = len(colors) - 1
    while j > i :
      if colors[i] != colors[j] and j - i > max:
        max = j - i
      j -= 1
    i += 1
  return max

print(maxDistance([1,1,1,6,1,1,1]))