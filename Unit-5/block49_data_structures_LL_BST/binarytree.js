class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class NodeWithDepth {
  constructor(node, depth) {
    this.node = node;
    this.depth = depth;
  }
}

function isBalanced(root) {
  if (root == null) {
    return true;
  }

  let stack = [];
  let depths = [];
  stack.push(new NodeWithDepth(root, 0));

  while (stack.length > 0) {
    let current = stack.pop();
    let node = current.node;
    let depth = current.depth;

    if (node.left == null && node.right == null) {
      if (!depths.includes(depth)) {
        depths.push(depth);
        if (
          depths.length > 2 ||
          (depths.length == 2 && Math.abs(depths[0] - depths[1]) > 1)
        ) {
          return false;
        }
      }
    } else {
      if (node.left != null) {
        stack.push(new NodeWithDepth(node.left, depth + 1));
      }
      if (node.right != null) {
        stack.push(new NodeWithDepth(node.right, depth + 1));
      }
    }
  }

  return true;
}

// Test the code
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.left.left.left = new Node(60);
if (isBalanced(root)) {
  console.log("Balanced Tree");
} else {
  console.log("Unbalanced Tree");
}
