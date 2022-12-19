# You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

# Return the merged string.

def merge_alternately(w1, w2)
  res = ''
  sm, lrg = w1.length > w2.length ? [w2, w1] : [w1, w2]
  for i in 0...sm.length
      res << w1[i]
      res << w2[i]
  end
  res << lrg[sm.length..-1]
end

puts merge_alternately('luffy', 'joyboy') == 'ljuofyfbyoy'