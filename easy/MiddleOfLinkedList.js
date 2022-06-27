// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

const middleNode = function(head) {
  let nodeLength = 0;
  let node = head;
  while (node) {
    node = node.next;
    nodeLength++;
  }
  let halfNodeLength = Math.floor(nodeLength / 2);
  let count = 0;
  node = head;
  while (count < halfNodeLength) {
    node = node.next;
    count++;
  }
  return node;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const node1 = new ListNode(1)
const node2 = new ListNode(2, node1)
const node3 = new ListNode(3, node2)
const node4 = new ListNode(4, node3)

console.log(middleNode(node3))