# Given the head of a singly linked list, return true if it is a palindrome or false otherwise.


def isPalindrome(head):
    string = ''
    curr = head
    while curr is not None:
        string += str(curr.val)
        curr = curr.next
    half1 = string[:len(string) // 2]
    half2 = string[(len(string) + 1) // 2:]
    return half1 == half2[::-1]
