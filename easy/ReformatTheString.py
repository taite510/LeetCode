# You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

# You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.

# Return the reformatted string or return an empty string if it is impossible to reformat the string.

def mixArrs(arr1, arr2):
    res = []
    for i in range(len(arr2)):
        res.append(arr1[i])
        res.append(arr2[i])
    if len(arr1) > len(arr2):
        res.append(arr1[-1])
    return res


def reformat(self, s: str) -> str:
    res = []
    let = []
    num = []
    for char in list(s):
        if char.isdigit():
            num.append(char)
        else:
            let.append(char)
    diff = len(let) - len(num)
    if diff == 1 or diff == 0:
        res = mixArrs(let, num)
    elif diff == -1:
        res = mixArrs(num, let)
    return ''.join(res)
