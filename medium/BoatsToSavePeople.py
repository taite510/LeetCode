# You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

# Return the minimum number of boats to carry every given person.

def numRescueBoats(people, limit):
    people.sort()
    boats = 0
    i = 0
    j = len(people) - 1
    while i <= j:
        if people[i] + people[j] <= limit:
            i += 1
            j -= 1
        else:
            j -= 1
        boats += 1
    return boats


print(numRescueBoats([3, 2, 2, 1], 3) == 3)
print(numRescueBoats([3, 5, 3, 4], 5) == 4)
