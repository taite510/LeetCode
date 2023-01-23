# You are given two strings current and correct representing two 24-hour times.

# 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

# In one operation you can increase the time current by 1, 5, 15, or 60 minutes. You can perform this operation any number of times.

# Return the minimum number of operations needed to convert current to correct.

class Solution:
    def convertTime(self, current: str, correct: str) -> int:
        hourDiff = int(correct[0:2]) - int(current[0:2])
        minDiff = int(correct[3:5]) - int(current[3:5])
        count = hourDiff if minDiff >= 0 else hourDiff - 1
        if minDiff < 0:
            minDiff = int(correct[3:5]) + (60 - int(current[3:5]))
        while minDiff != 0:
            if minDiff >= 15:
                minDiff -= 15
            elif minDiff >= 5:
                minDiff -= 5
            else:
                count += minDiff
                break
            count += 1
        return count


test = Solution()
print(test.convertTime("02:30", "04:36") == 4)
