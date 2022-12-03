# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

def longest_common_prefix(strs)
  prefix = ''
  word = strs[0]
  for i in 0...word.length
      char = word[i]
      is_prefix = true
      for j in 1...strs.length
          if char != strs[j][i]
              is_prefix = false
              break
          end
      end
      break unless is_prefix
      prefix += char
  end
  return prefix
end

puts longest_common_prefix(['flower', 'flow', 'flight']) == 'fl'
puts longest_common_prefix(['luffy', 'joyboy']) == ''