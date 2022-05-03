// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


const reverseList = function(head) {
  let previousNode = null;
  let nextNode = null;
  let currentNode = head;
  while (currentNode !== null) {
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }
  return previousNode;
};

const node1 = new ListNode(1)
const node2 = new ListNode(2, node1)
const node3 = new ListNode(3, node2)

console.log(reverseList(node3))