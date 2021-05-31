type BTree = any;

export class BTreeNode {
  values: number[];
  leaf: boolean;
  children: BTreeNode[];
  tree: BTree;
  parent: BTreeNode;

  constructor(isLeaf) {
    this.values = [];
    this.leaf = isLeaf;
    this.children = [];
    this.tree = null;
    this.parent = null;
  }

  get n() {
    return this.values.length;
  }

  addValue(value: number) {
    if (!value) return;

    let pos = 0;
    while (pos < this.n && this.values[pos] < value) {
      // while the current pointer is less than the entire array
      // and the value at the pointer is less than the given value
      // move forward
      pos++;
    }

    // at this point the pointer is at the position to the right of the highest value
    this.values.splice(pos, 0, value);
  }

  removeValue(pos: number) {
    if (pos >= this.n) return null;
    // remove the value at position and return that value
    return this.values.splice(pos, 1)[0];
  }

  addChild(node: BTreeNode, pos: number) {
    this.children.splice(pos, 0, node);
    node.parent = this;
  }

  removeChild(pos: number) {
    return this.children.splice(pos, 1)[0];
  }
}
