// You have n  tiles, where each tile has one letter tiles[i] printed on it.

// Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

const numTilePossibilities = function(tiles) {
  const obj = {};
  const tileBuilder = (remaining, current) => {
    if (current) {
      obj[current] = true;
    } else {
      current = '';
    }
    for (let i = 0; i < remaining.length; i++) {
      temp = remaining.slice(0, i) + remaining.slice(i + 1);
      tileBuilder(temp, current + remaining[i]);
    }
  }
  tileBuilder(tiles);
  return Object.keys(obj).length;
};

console.log(numTilePossibilities("ABCDEF"))