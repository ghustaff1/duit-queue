class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}

function deleteNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

// Test case setup
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

// Creating a linked list and specifying the node to delete
let head = createLinkedList([4, 5, 1, 9]);
let nodeToDelete = head.next; // Node with value 5

deleteNode(nodeToDelete);
console.log(linkedListToArray(head)); // Output: [4, 1, 9]
