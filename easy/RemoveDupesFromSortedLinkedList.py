# Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

def deleteDuplicates(head):
    if head is not None:
        lastNode = head
        curr = head.next
        while curr is not None:
            if lastNode.val == curr.val:
                while curr is not None and lastNode.val == curr.val:
                    curr = curr.next
                lastNode.next = curr
            else:
                lastNode = curr
                curr = curr.next
    return head
