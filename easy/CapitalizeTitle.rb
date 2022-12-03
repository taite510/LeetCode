# You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

# If the length of the word is 1 or 2 letters, change all letters to lowercase.
# Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
# Return the capitalized title.

def capitalize_title(title)
  arr = title.downcase.split(' ')
  for i in 0...arr.length
      if arr[i].length > 2
          arr[i].capitalize!
      end
  end
  return arr.join(' ')
end

puts capitalize_title('capiTalIze tHe titLe') == 'Capitalize The Title'
puts capitalize_title('luFFy IS joyBOY') == 'Luffy is Joyboy'