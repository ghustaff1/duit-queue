class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}

function reorderList(head) {
  if (!head || !head.next || !head.next.next) return;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  }

  let prev = null;
  let current = slow.next;
  slow.next = null;

  while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  }

  let first = head;
  let second = prev;

  while (second !== null) {
      let temp1 = first.next;
      let temp2 = second.next;

      first.next = second;
      second.next = temp1;

      first = temp1;
      second = temp2;
  }
}

function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
  }
  return head;
}

function linkedListToArray(head) {
  let arr = [];
  while (head !== null) {
      arr.push(head.val);
      head = head.next;
  }
  return arr;
}

// Test cases
let list1 = createLinkedList([1, 2, 3, 4]);
reorderList(list1);
console.log(linkedListToArray(list1)); // Output: [1, 4, 2, 3]

let list2 = createLinkedList([1, 2, 3, 4, 5]);
reorderList(list2);
console.log(linkedListToArray(list2)); // Output: [1, 5, 2, 4, 3]
