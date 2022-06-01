// You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.

// Return true if the square is white, and false if the square is black.

// The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

const squareIsWhite = function(coordinates) {
  const letters = {'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8};
  const splitStr = coordinates.split('');
  const evenLetter = letters[splitStr[0]] % 2 === 0;
  const evenNumber = splitStr[1] % 2 === 0;
  if (evenLetter) {
    if (evenNumber) {
      return false;
    }
    return true;
  } else {
    if (evenNumber) {
      return true;
    }
    return false;
  }
};