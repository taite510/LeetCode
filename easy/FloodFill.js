// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

const floodFill = function(image, sr, sc, color) {
  const oldColor = image[sr][sc];
  if (oldColor === color) {
    return image;
  }
  const fill = function(x, y) {
    image[y][x] = color;
    if (x - 1 >= 0 && image[y][x - 1] === oldColor) {
      fill(x - 1, y);
    }
    if (x + 1 < image[0].length && image[y][x + 1] === oldColor) {
      fill(x + 1, y);
    }
    if (y - 1 >= 0 && image[y - 1][x] === oldColor) {
      fill(x, y - 1);
    }
    if (y + 1 < image.length && image[y + 1][x] === oldColor) {
      fill(x, y + 1);
    }
  }
  fill(sc, sr);
  return image;
};

console.log(floodFill([[0,0,0],[0,0,0]], 1, 0, 2))