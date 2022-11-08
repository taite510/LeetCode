# Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

# Each letter in magazine can only be used once in ransomNote.

def canConstruct(ransomNote, magazine):
    for char in ransomNote:
        if ransomNote.count(char) > magazine.count(char):
            return False
    return True


print(canConstruct('aa', 'aab') == True)
print(canConstruct('a', 'b') == False)
