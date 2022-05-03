// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


var reverseList = function(head) {
  let previousNode = null;
  let nextNode = null;
  let currentNode = head;
  while (currentNode !== null) {
    nextNode = currentNode.next
    currentNode.next = previousNode
    previousNode = currentNode
    currentNode = nextNode
  }
  return previousNode
};

let node1 = new ListNode(1)
let node2 = new ListNode(2, node1)
let node3 = new ListNode(3, node2)

console.log(reverseList(node3))