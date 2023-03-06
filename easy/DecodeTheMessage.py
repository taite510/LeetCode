# You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

# Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
# Align the substitution table with the regular English alphabet.
# Each letter in message is then substituted using the table.
# Spaces ' ' are transformed to themselves.
# For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
# Return the decoded message.

class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        res = ''
        cipher = {}
        newLetters = 0
        key = key.replace(' ', '')
        for char in key:
            if char not in cipher:
                cipher[char] = chr(97 + newLetters)
                newLetters += 1
        for char in message:
            try:
                res += cipher[char]
            except:
                res += char
        return res


test = Solution()
print(test.decodeMessage('eljuxhpwnyrdgtqkviszcfmabo',
      'zwx hnfx lqantp mnoeius ycgk vcnjrdb') == 'the five boxing wizards jump quickly')
