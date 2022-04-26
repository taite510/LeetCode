# There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

# Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

def canBeTypedWords(text, brokenLetters) :
  letterArr, wordArr = list(brokenLetters), text.split()
  words = len(wordArr)
  for word in wordArr :
    for letter in letterArr :
      if letter in word :
        words -= 1
        break
  return words

print(canBeTypedWords('hello world', 'am'))
