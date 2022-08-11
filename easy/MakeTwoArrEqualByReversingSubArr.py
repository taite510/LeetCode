# You are given two integer arrays of equal length target and arr. In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.

# Return true if you can make arr equal to target or false otherwise.

def canBeEqual(target, arr) :
  def arrToObj(arr) :
    obj = {}
    for num in arr :
        if num in obj :
          obj[num] += 1
        else :
          obj[num] = 1
    return obj
  return arrToObj(target) == arrToObj(arr)

print(canBeEqual([1,2,3,4], [2,4,1,3]))