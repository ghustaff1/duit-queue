// Структура вузла зв'язаного списку
function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

function doubleLinkedList(head) {
  let num = 0;
  let current = head;
  while (current !== null) {
      num = num * 10 + current.val;
      current = current.next;
  }

  num *= 2;

  let dummy = new ListNode(0);
  let newHead = dummy;
  let strNum = num.toString();

  for (let i = 0; i < strNum.length; i++) {
      newHead.next = new ListNode(Number(strNum[i]));
      newHead = newHead.next;
  }

  return dummy.next;
}


let head = new ListNode(1, new ListNode(8, new ListNode(9)));

let result = doubleLinkedList(head);


let current = result;
let resultArray = [];
while (current !== null) {
  resultArray.push(current.val);
  current = current.next;
}
console.log(resultArray);  // Очікуваний результат: [3, 7, 8]
