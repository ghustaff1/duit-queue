class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}

function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
          return true;
      }
  }
  return false;
}

function createLinkedList(arr, pos) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  let cycleNode = null;

  if (pos === 0) cycleNode = head;

  for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
      if (i === pos) cycleNode = current;
  }

  if (cycleNode !== null) current.next = cycleNode;

  return head;
}

let list1 = createLinkedList([3, 2, 0, -4], 1);
console.log(hasCycle(list1)); // Output: true

let list2 = createLinkedList([1, 2], 0);
console.log(hasCycle(list2)); // Output: true

let list3 = createLinkedList([1], -1);
console.log(hasCycle(list3)); // Output: false
