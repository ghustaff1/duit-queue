class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  let dummy = new ListNode();
  let current = dummy;

  while (list1 !== null && list2 !== null) {
      if (list1.val <= list2.val) {
          current.next = list1;
          list1 = list1.next;
      } else {
          current.next = list2;
          list2 = list2.next;
      }
      current = current.next;
  }

  if (list1 !== null) {
      current.next = list1;
  } else {
      current.next = list2;
  }

  return dummy.next;
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

let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 4]);
let mergedList = mergeTwoLists(list1, list2);
console.log(linkedListToArray(mergedList)); // Output: [1, 1, 2, 3, 4, 4]

list1 = createLinkedList([]);
list2 = createLinkedList([]);
mergedList = mergeTwoLists(list1, list2);
console.log(linkedListToArray(mergedList)); // Output: []

list1 = createLinkedList([]);
list2 = createLinkedList([0]);
mergedList = mergeTwoLists(list1, list2);
console.log(linkedListToArray(mergedList)); // Output: [0]
