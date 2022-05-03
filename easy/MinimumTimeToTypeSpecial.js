// There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a circle with a pointer.

// A character can only be typed if the pointer is pointing to that character. The pointer is initially pointing to the character 'a'.

// Each second, you may perform one of the following operations:

// Move the pointer one character counterclockwise or clockwise.

// Type the character the pointer is currently on.

// Given a string word, return the minimum number of seconds to type out the characters in word.

const minTimeToType = function(word) {
  const typewriter = {'a':0,'b':1,'c':2,'d':3,'e':4,'f':5,'g':6,'h':7,'i':8,'j':9,'k':10,'l':11,'m':12,'n':13,'o':14,'p':15,'q':16,'r':17,'s':18,'t':19,'u':20,'v':21,'w':22,'x':23,'y':24,'z':25};
  let position = 0;
  let time = 0;
  for (let i = 0; i < word.length; i++) {
    let nextPosition = typewriter[word[i]]
    let moves = Math.abs(nextPosition - position);
    if (moves > 13) {
      moves = Math.abs(position + 26 - nextPosition);
      if (moves > 13) {
        moves = Math.abs(position - 26 - nextPosition);
      }
    }
    time += moves + 1;
    position = nextPosition;
  }
  return time;
};


console.log(minTimeToType('zjpc'))