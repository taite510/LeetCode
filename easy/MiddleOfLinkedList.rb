# Given the head of a singly linked list, return the middle node of the linked list.

# If there are two middle nodes, return the second middle node.

class ListNode
    attr_accessor :val, :next
    def initialize(val = 0, _next = nil)
        @val = val
        @next = _next
    end
end

def middle_node(head)
  node_len = 0
  curr = head
  while curr != nil
      node_len += 1
      curr = curr.next
  end
  half = node_len / 2
  curr = head
  while half > 0
      half -= 1
      curr = curr.next
  end
  return curr
end

def create_linked_list(arr)
  head = ListNode.new(arr[0])
  curr = head
  for i in 1...arr.length
    curr.next = ListNode.new(arr[i])
    curr = curr.next
  end
  return head
end


def linked_list_to_arr(head)
  arr = []
  curr = head
  while curr != nil
    arr.append(curr.val)
    curr = curr.next
  end
  return arr
end

list1 = create_linked_list([1,2,3,4,5])
ans1 = create_linked_list([3,4,5])

puts linked_list_to_arr(middle_node(list1)) == linked_list_to_arr(ans1)