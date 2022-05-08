// You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

// For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

// Return the head of the modified linked list.

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/* my solution (slow) */ const mergeNodes = function(head) {
  let sum = []
  let sumHead = null
  let currentSumNode = null
  let current = head
  while (current !== null) {
    if (current.val === 0) {
      if (sum.length > 1) {
        const newVal = sum.reduce((a, b) => a + b)
        const sumNode = new ListNode(newVal)
        if (sumHead === null) {
          sumHead = sumNode
          currentSumNode = sumNode
        } else {
          currentSumNode.next = sumNode
          currentSumNode = currentSumNode.next
        }
        sum = []
      } else if (sum.length === 1){
        if (sumHead === null) {
          sumHead = new ListNode(sum[0])
          currentSumNode = sumHead
        } else {
          currentSumNode.next = new ListNode(sum[0])
          currentSumNode = currentSumNode.next
        }
        sum = []
      }
    } else {
      sum.push(current.val)
    }
    current = current.next
  }
  return sumHead
};

/* anothers solution (fast) */ const mergeNodes1 = function(head) {
  let result = new ListNode(-1);
  let temp = result;
  while(head){
      if(head.val==0 && head.next){
          temp.next = new ListNode(0);
          temp = temp.next;
      }
      temp.val += head.val;
      head = head.next;
  }
  return result.next;
};

const arr = [0,1,0,3,0,2,2,0]
const head = arr.reverse().reduce((acc, curr) => {
  if (acc == null) {
    acc = new ListNode(curr);

  } else {
    acc = new ListNode(curr, acc);
  }
  return acc;
}, null);

console.log(mergeNodes(head))
console.log(mergeNodes1(head))