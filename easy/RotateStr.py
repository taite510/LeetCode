# Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

# A shift on s consists of moving the leftmost character of s to the rightmost position.

# For example, if s = "abcde", then it will be "bcdea" after one shift.

def rotateString(self, s: str, goal: str) -> bool:
    i = 1
    if len(goal) == len(s):
        while i < len(goal) + 1:
            if goal[:i] not in s:
                i -= 1
                break
            i += 1
        return goal[i:] in s
    return False
