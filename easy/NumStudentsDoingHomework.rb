# Given two integer arrays startTime and endTime and given an integer queryTime.

# The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

# Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

def busy_student(start_time, end_time, query_time)
  count = 0
  for i in 0...start_time.length
      if query_time.between?(start_time[i], end_time[i])
          count += 1
      end
  end
  return count
end

puts busy_student([1,2,3], [3,2,7], 4) == 1
puts busy_student([4], [4], 2) == 0