# You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.

# Return true if the square is white, and false if the square is black.

# The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

def squareIsWhite(coordinates):
    letters = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8}
    if letters[coordinates[0]] % 2 == 0:
        if int(coordinates[1]) % 2 == 0:
            return False
    else:
        if int(coordinates[1]) % 2 == 1:
            return False
    return True


print(squareIsWhite('a1') == False)

print(squareIsWhite('h3') == True)
