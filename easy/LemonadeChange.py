# At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

# Note that you do not have any change in hand at first.

# Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.


def lemonadeChange(bills):
    fives = 0
    tens = 0
    for bill in bills:
        if bill == 5:
            fives += 1
        elif bill == 10 and fives > 0:
            fives -= 1
            tens += 1
        elif bill == 20 and fives > 0 and tens > 0:
            fives -= 1
            tens -= 1
        elif bill == 20 and fives > 2:
            fives -= 3
        else:
            return False
    return True
