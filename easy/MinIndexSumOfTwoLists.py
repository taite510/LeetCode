# Given two arrays of strings list1 and list2, find the common strings with the least index sum.

# A common string is a string that appeared in both list1 and list2.

# A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

# Return all the common strings with the least index sum. Return the answer in any order.

import math


def findRestaurant(list1, list2):
    indexSum = math.inf
    res = []
    for i in range(len(list1)):
        try:
            match = list2.index(list1[i])
            if match + i < indexSum:
                indexSum = match + i
                res = [list1[i]]
            elif match + i == indexSum:
                res.append(list1[i])
        except:
            pass
    return res


print(findRestaurant(['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], [
      'Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']) == ['Shogun'])

print(findRestaurant(['happy', 'sad', 'good'], [
      'sad', 'happy', 'good']) == ['happy', 'sad'])
