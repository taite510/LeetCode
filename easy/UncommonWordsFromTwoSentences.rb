# A sentence is a string of single-space separated words where each word consists only of lowercase letters.

# A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

# Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

def uncommon_from_sentences(s1, s2)
  res = []
  $word_hash = {}
  def add_to_word_hash(s)
      s.split(' ').each do |word|
          if $word_hash.key?(word)
              $word_hash[word] += 1
          else
              $word_hash[word] = 1
          end
      end
  end
  add_to_word_hash(s1)
  add_to_word_hash(s2)
  $word_hash.each do |key, value|
      if value == 1
          res.append(key)
      end
  end
  return res
end

puts uncommon_from_sentences("this apple is sweet", "this apple is sour") == ["sweet","sour"]