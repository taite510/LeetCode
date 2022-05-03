// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

const mergeTwoLists = function(list1, list2) {
  const arr = [];
  let temp = list1;
  if (!list1 && !list2) {
    return {};
  }
  while (temp !== null) {
    arr.push(temp.val);
    temp = temp.next;
  }
  temp = list2;
  while (temp !== null) {
    arr.push(temp.val);
    temp = temp.next;
  }
  arr = arr.sort((a,b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  let node;
  for (let i = 0; i < arr.length; i++) {
    if (!node) {
      node = new ListNode(arr[i]);
      temp = node;
    } else {
      temp.next = new ListNode(arr[i]);
      temp = temp.next;
    }
  }
  return node;
};

let thing1 = {
  val: 5,
  next: {
    val: 1,
    next: {
      val: 12,
      next: null
    }
  }
}
let thing2 = {
  val: 2,
  next: {
    val: 3,
    next: {
      val: 6,
      next: null
    }
  }
}

console.log(mergeTwoLists(thing1, thing2))