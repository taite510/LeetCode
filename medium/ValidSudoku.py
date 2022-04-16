# Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

# Each row must contain the digits 1-9 without repetition.
# Each column must contain the digits 1-9 without repetition.
# Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
# Note:

# A Sudoku board (partially filled) could be valid but is not necessarily solvable.
# Only the filled cells need to be validated according to the mentioned rules.

def isValidSudoku(board) :
  for row in board :
    for num in row :
      if num != '.' and row.count(num) > 1 :
        return False
  i = 0
  while i < 9 :
    nums = []
    for row in board :
      num = row[i]
      if num != '.' :
        if num not in nums :
          nums.append(num)
        else :
          return False
    i += 1
  i = 0
  while i < 9 :
    nums, j = [], (i // 3) * 3
    while j < 3 + (i // 3) * 3:
      k = (i - (i // 3) * 3) * 3
      while k < 3 * ((i - (i // 3) * 3) + 1) :
        num = board[j][k]
        if num != '.' :
          if num not in nums :
            nums.append(num)
          else :
            return False
        k += 1
      j += 1
    i += 1
  return True

testBoard = [[".",".","4",".",".",".","6","3","."],
[".",".",".",".",".",".",".",".","."],
["5",".",".",".",".",".",".","9","."],
[".",".",".","5","6",".",".",".","."],
["4",".","3",".",".",".",".",".","1"],
[".",".",".","7",".",".",".",".","."],
[".",".",".","5",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."]]

print(isValidSudoku(testBoard))