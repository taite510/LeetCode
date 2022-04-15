# Given two integer arrays startTime and endTime and given an integer queryTime.

# The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

# Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

def busyStudent(startTime, endTime, queryTime) :
  i, count = 0, 0
  while i < len(startTime) :
    if startTime[i] <= queryTime and queryTime <= endTime[i] :
      print(startTime[i], endTime[i], queryTime)
      count += 1
    i += 1
  return count


print(busyStudent([1,2,3], [3,2,7], 4))