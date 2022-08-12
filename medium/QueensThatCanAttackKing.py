# On an 8x8 chessboard, there can be multiple Black Queens and one White King.

# Given an array of integer coordinates queens that represents the positions of the Black Queens, and a pair of coordinates king that represent the position of the White King, return the coordinates of all the queens (in any order) that can attack the King.

def queensAttacktheKing(queens, king) :
  res = []
  def checkQueen(x, y) :
      check = king.copy()
      while check[0] >= 0 and check[0] < 8 and check[1] >= 0 and check[1] < 8 :
          check[0] += x
          check[1] += y
          if check in queens :
              res.append(check)
              break
  checkQueen(-1,0)
  checkQueen(-1, 1)
  checkQueen(0,1)
  checkQueen(1,1)
  checkQueen(1,0)
  checkQueen(1,-1)
  checkQueen(0,-1)
  checkQueen(-1,-1)
  return res

print(queensAttacktheKing([[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], [0,0]))