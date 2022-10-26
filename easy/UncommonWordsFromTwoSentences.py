# A sentence is a string of single-space separated words where each word consists only of lowercase letters.

# A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

# Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

def uncommonFromSentences(s1, s2):
    words = {}
    resArr = []
    wordsArr = s1.split() + s2.split()
    for word in wordsArr:
        words[word] = words.get(word, 0) + 1
    for word in words:
        if (words[word] == 1):
            resArr.append(word)
    return resArr


print(uncommonFromSentences("this apple is sweet",
      "this apple is sour") == ["sweet", "sour"])
