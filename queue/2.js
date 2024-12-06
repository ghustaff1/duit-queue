class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}

function deleteDuplicates(head) {
  let current = head;
  while (current !== null && current.next !== null) {
      if (current.val === current.next.val) {
          current.next = current.next.next;
      } else {
          current = current.next;
      }
  }
  return head;
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

let list1 = createLinkedList([1, 1, 2]);
let noDuplicates = deleteDuplicates(list1);
console.log(linkedListToArray(noDuplicates)); // Output: [1, 2]

list1 = createLinkedList([1, 1, 2, 3, 3]);
noDuplicates = deleteDuplicates(list1);
console.log(linkedListToArray(noDuplicates)); // Output: [1, 2, 3]
