# Given the head of a singly linked list, reverse the list, and return the reversed list.

def reverseList(head):
    last = None
    nextNode = head
    curr = head
    while nextNode != None:
        nextNode = curr.next
        curr.next = last
        last = curr
        curr = nextNode
    return last
