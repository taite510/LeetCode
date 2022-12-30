# You are given a 0-indexed string pattern of length n consisting of the characters 'I' meaning increasing and 'D' meaning decreasing.

# A 0-indexed string num of length n + 1 is created using the following conditions:

# num consists of the digits '1' to '9', where each digit is used at most once.
# If pattern[i] == 'I', then num[i] < num[i + 1].
# If pattern[i] == 'D', then num[i] > num[i + 1].
# Return the lexicographically smallest possible string num that meets the conditions.

def smallest_number(pattern)
  res = []
  stack = []
  for i in 0...pattern.length + 1
      stack.append(i + 1)
      if i == pattern.length || pattern[i] == 'I'
          while stack.length != 0
              res.append(stack.pop())
          end
      end
  end
  return res.join()
end

puts smallest_number('IIIDIDDD') == '123549876'
puts smallest_number('DDD') == '4321'