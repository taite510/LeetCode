// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

const addTwoNumbers = function(l1, l2) {
  const arr1 = [];
  const arr2 = [];
  let head1 = l1;
  let head2 = l2;
  while (head1 !== null) {
    arr1.unshift(head1.value);
    head1 = head1.next
  }
  while (head2 !== null) {
    arr2.unshift(head2.value);
    head2 = head2.next
  }
  arr1 = arr1.join('');
  arr2 = arr2.join('');
  const combined = (+arr1 + +arr2 + '').split('')
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  let node, temp;
  for (let i = 0; i < combined.length; i++) {
    if (!node) {
      node = new ListNode(combined[i])
    } else {
      temp = new ListNode(combined[i])
      temp.next = node;
      node = temp;
    }
  }
  return node
};

const list1 = {
  value: 9,
  next: {
    value: 1,
    next: {
      value: 1,
      next: null
    }
  }
}
const list2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
}
console.log(addTwoNumbers(list1, list2))