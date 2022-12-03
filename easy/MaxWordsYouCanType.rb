# There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

#   Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

def can_be_typed_words(text, broken_letters)
  words = text.split(' ')
  letters = broken_letters.split('')
  i = 0
  while i < words.length
      letters.each do |char|
          if words[i].include? char
              words.delete_at(i)
              i -= 1
              break
          end
      end
      i += 1
  end
  return words.length
end

puts can_be_typed_words('luffy is joyboy', 'ay') == 1