# According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

# The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

# Any live cell with fewer than two live neighbors dies as if caused by under-population.
# Any live cell with two or three live neighbors lives on to the next generation.
# Any live cell with more than three live neighbors dies, as if by over-population.
# Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
# The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

def aliveOrDead(board, x, y, status):
    neighbors = -status
    ySize = len(board)
    xSize = len(board[0])
    for i in range(-1, 2):
        if 0 <= x + i < xSize:
            if 0 <= y - 1 < ySize and board[y - 1][x + i]:
                neighbors += 1
            if 0 <= y + 1 < ySize and board[y + 1][x + i]:
                neighbors += 1
            if 0 <= y < ySize and board[y][x + i]:
                neighbors += 1
    if status:
        return 1 if 1 < neighbors < 4 else 0
    return 1 if neighbors == 3 else 0


def gameOfLife(board):
    res = []
    for y in range(0, len(board)):
        row = []
        for x in range(0, len(board[0])):
            row.append(aliveOrDead(board, x, y, board[y][x]))
        res.append(row)
    for y in range(0, len(board)):
        for x in range(0, len(board[0])):
            board[y][x] = res[y][x]


testboard = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]
gameOfLife(testboard)
print(testboard == [[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]])
