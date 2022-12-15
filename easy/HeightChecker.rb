# A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

# You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

# Return the number of indices where heights[i] != expected[i].

def height_checker(heights)
  expected = heights.sort
  count = 0
  for i in 0...heights.length
      if heights[i] != expected[i]
          count += 1
      end
  end
  return count
end

puts height_checker([1,1,4,2,1,3]) == 3
puts height_checker([1,2,3,4,5]) == 0