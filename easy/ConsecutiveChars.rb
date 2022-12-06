# The power of the string is the maximum length of a non-empty substring that contains only one unique character.

# Given a string s, return the power of s.

def max_power(s)
  max = 1
  curr = 1
  for i in 1...s.length
      if s[i] == s[i - 1]
          curr += 1
          max = [max, curr].max
      else
          curr = 1
      end
  end
  return max
end

puts max_power('aabbbcddeeeeffg') == 4
puts max_power('a') == 1