# We distribute some number of candies, to a row of n = num_people people in the following way:

# We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.

# Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.

# This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.  The last person will receive all of our remaining candies (not necessarily one more than the previous gift).

# Return an array (of length num_people and sum candies) that represents the final distribution of candies.
import math
def distributeCandies(candies, num_people) :
  n = math.floor((-1 + math.sqrt(1 - (4 * (-candies * 2)))) / 2)
  remainderCandies = candies - (n * (n + 1) // 2)
  print(remainderCandies)
  rounds = n // num_people
  remainderRounds = n - (rounds * num_people)
  i = 1
  arr = []
  while i <= num_people :
    candiesToAdd = ((rounds * (rounds - 1) // 2) * num_people) + (i * rounds)
    if remainderRounds :
      candiesToAdd += (rounds * num_people) + i
      remainderRounds -= 1
    else :
      candiesToAdd += remainderCandies
      remainderCandies = 0
    arr.append(candiesToAdd)
    i += 1
  return arr

print(distributeCandies(7, 4))