# Given the head of a singly linked list, return the middle node of the linked list.

# If there are two middle nodes, return the second middle node.

def middleNode(head):
    listLength = 0
    node = head
    while node != None:
        node = node.next
        listLength += 1
    mid = listLength // 2
    node = head
    while mid > 0:
        node = node.next
        mid -= 1
    return node
