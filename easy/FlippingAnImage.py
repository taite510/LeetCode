# Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

# To flip an image horizontally means that each row of the image is reversed.

# For example, flipping [1,1,0] horizontally results in [0,1,1].
# To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

# For example, inverting [0,1,1] results in [1,0,0].

def flipAndInvertImage(image):
  i = 0
  while i < len(image):
      image[i].reverse()
      j = 0
      while j < len(image[i]):
          if image[i][j] == 0:
              image[i][j] = 1
          else:
              image[i][j] = 0
          j += 1
      i += 1
  return image

print(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))