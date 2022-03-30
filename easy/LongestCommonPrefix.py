# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

def longestCommonPrefix(strs) :
  result = ['']
  i = 0
  smallestIndex = smallestWord(strs)
  for letter in strs[smallestIndex] :
    stop = False
    for str in strs :
      if letter == str[i] :
        continue
      stop = True
      break
    if stop :
      break
    i += 1
    result.append(letter)
  return ''.join(result)

def smallestWord(strs) :
  length = float('inf')
  indexOfSmallest = ''
  i = 0
  for str in strs :
    if len(str) < length :
      length = len(str)
      indexOfSmallest = i
    i += 1
  return indexOfSmallest


print(longestCommonPrefix(["ab","a","abb"]))