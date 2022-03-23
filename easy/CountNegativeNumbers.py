# Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

def countNegatives(grid) :
  count = 0
  for row in grid :
    for num in reversed(row) :
      if num < 0 :
        count += 1
      else :
        break
  return count

print(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))