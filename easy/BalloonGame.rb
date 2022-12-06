# Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

# You can use each character in text at most once. Return the maximum number of instances that can be formed.

def max_number_of_balloons(text)
  freq = Hash.new(0)
  word = 'balon'
  num = Float::INFINITY
  for i in 0...text.length
      freq[text[i]] += 1
  end
  for i in 0...word.length
      letter = word[i]
      if letter == 'l' || letter == 'o'
          num = [freq[letter] / 2, num].min
      else
          num = [freq[letter], num].min
      end
  end
  return num
end

puts max_number_of_balloons('luffy') == 0
puts max_number_of_balloons('loonbalxballpoon') == 2