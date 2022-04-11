# A pangram is a sentence where every letter of the English alphabet appears at least once.

# Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

def checkIfPangram(sentence) :
  letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  listSentence = list(sentence)
  i = 0
  while i < len(letters) :
    if letters[i] not in listSentence :
      return False
    i += 1
  return True

print(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'))