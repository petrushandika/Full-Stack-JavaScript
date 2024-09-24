class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function diameterOfTree(root) {
  let diameter = 0;

  function computeHeight(node) {
    if (node === null) return 0;

    const leftHeight = computeHeight(node.left);
    const rightHeight = computeHeight(node.right);

    diameter = Math.max(diameter, leftHeight + rightHeight + 1);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  computeHeight(root);

  return diameter;
}

const root = new TreeNode(40);
root.left = new TreeNode(30);
root.right = new TreeNode(65);
root.left.left = new TreeNode(22);
root.left.right = new TreeNode(38);
root.right.right = new TreeNode(78);

const treeDiameter = diameterOfTree(root);
console.log(treeDiameter);
