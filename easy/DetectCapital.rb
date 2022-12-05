# We define the usage of capitals in a word to be right when one of the following cases holds:

# All letters in this word are capitals, like "USA".
# All letters in this word are not capitals, like "leetcode".
# Only the first letter in this word is capital, like "Google".
# Given a string word, return true if the usage of capitals in it is right.

def detect_capital_use(word)
  if word == word.downcase
      return true
  elsif word == word.upcase
      return true
  elsif word == word.capitalize
      return true
  end
  return false
end

puts detect_capital_use('inCorrect') == false
puts detect_capital_use('Correct') == true