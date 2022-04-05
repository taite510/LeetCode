# You are given a positive integer num consisting only of digits 6 and 9.

# Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

def maximum69Number(num) :
  splitNum = [int(a) for a in str(num)]
  i = 0
  for number in splitNum :
    if number == 6 :
      splitNum[i] = 9
      break
    i += 1
  return int(''.join(map(str,splitNum )))

print(maximum69Number('6699'))