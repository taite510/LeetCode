# You are given an integer array nums. A number x is lonely when it appears only once, and no adjacent numbers (i.e. x + 1 and x - 1) appear in the array.

# Return all lonely numbers in nums. You may return the answer in any order.

def findLonely(nums) :
  obj, resArr = {}, []
  for num in nums :
    obj[num] = obj.get(num, 0) + 1
  for num in obj :
    if obj[num] == 1 and num - 1 not in obj and num + 1 not in obj:
      resArr.append(num)
  return resArr

print(findLonely([10,5,6,2]) == [10,2])