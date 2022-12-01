# Given a string s, reverse only all the vowels in the string and return it.

# The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

def reverseVowels(s):
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    arr = list(s)
    i = 0
    j = len(arr) - 1
    while i < j:
        if arr[i] in vowels:
            while i < j:
                if arr[j] in vowels:
                    arr[i], arr[j] = arr[j], arr[i]
                    j -= 1
                    break
                j -= 1
        i += 1
    return ''.join(arr)


print(reverseVowels('leetcode') == 'leotcede')
