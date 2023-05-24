class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function detectCycle(head) {
  let nodeVisited = new Set();
  while (head != null) {
    if (nodeVisited.has(head)) {
      return true;
    } else {
      nodeVisited.add(head);
    }
    head = head.next;
  }
  return false;
}

// Test the function
let n1 = new Node(10);
let n2 = new Node(20);
let n3 = new Node(30);
let n4 = new Node(40);
let n5 = new Node(50);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n1; // This creates a cycle

console.log(detectCycle(n1));
