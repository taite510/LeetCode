# Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

# Return the running sum of nums.

def runningSum(nums) :
  [arr, sum] = [[], 0]
  for num in nums :
    sum += num
    arr.append(sum)
  return arr

runningSum([2,1,5,10,4])