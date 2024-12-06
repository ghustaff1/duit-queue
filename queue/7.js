function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

function mergeKLists(lists) {
  let minHeap = new MinHeap();
  let dummy = new ListNode();
  let current = dummy;

  for (let list of lists) {
      if (list) minHeap.push(list);
  }

  while (minHeap.size() > 0) {
      let node = minHeap.pop();
      current.next = node;
      current = current.next;
      if (node.next) minHeap.push(node.next);
  }

  return dummy.next;
}

class MinHeap {
  constructor() {
      this.heap = [];
  }

  push(node) {
      this.heap.push(node);
      this._heapifyUp();
  }

  pop() {
      if (this.size() === 0) return null;
      let root = this.heap[0];
      let last = this.heap.pop();
      if (this.size() > 0) {
          this.heap[0] = last;
          this._heapifyDown();
      }
      return root;
  }

  size() {
      return this.heap.length;
  }

  _heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
          let parentIndex = Math.floor((index - 1) / 2);
          if (this.heap[parentIndex].val <= this.heap[index].val) break;
          [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
          index = parentIndex;
      }
  }

  _heapifyDown() {
      let index = 0;
      while (index < this.heap.length) {
          let leftChildIndex = 2 * index + 1;
          let rightChildIndex = 2 * index + 2;
          let smallest = index;

          if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].val < this.heap[smallest].val) {
              smallest = leftChildIndex;
          }
          if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].val < this.heap[smallest].val) {
              smallest = rightChildIndex;
          }
          if (smallest === index) break;
          [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
          index = smallest;
      }
  }
}

// Приклад 1:
let lists1 = [
  new ListNode(1, new ListNode(4, new ListNode(5))),
  new ListNode(1, new ListNode(3, new ListNode(4))),
  new ListNode(2, new ListNode(6))
];

let result1 = mergeKLists(lists1);
let output1 = [];
while (result1 !== null) {
  output1.push(result1.val);
  result1 = result1.next;
}
console.log(output1); 

// Приклад 2:
let lists2 = [];
let result2 = mergeKLists(lists2);
let output2 = [];
while (result2 !== null) {
  output2.push(result2.val);
  result2 = result2.next;
}
console.log(output2);

// Приклад 3:
let lists3 = [new ListNode()];
let result3 = mergeKLists(lists3);
let output3 = [];
while (result3 !== null) {
  output3.push(result3.val);
  result3 = result3.next;
}
console.log(output3); 
