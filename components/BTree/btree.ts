import { BTreeNode } from "./node";

/**
 * for order, pick a general size targeting cpu l2/l3 caches
 */
export class BTree {
  root: BTreeNode;
  order: number;

  constructor(order: number) {
    this.order = order;
    this.root;
  }

  /**
   * search a value in the Tree and return the Node O(log N)
   * @param node the BTreeNode
   * @param value value stored in node (number)
   *
   * how it works:
   * - traverse the search tree from top to bottom looking for the correct child in every iteration
   * - in the BST the algo goes right if target `k` is greater than the actual node value, and left if lower.
   * - then using the same logic, the BTree continues to the subtree where it target `k` should be stored
   * - this is done by comparing it with the values stored in the actual node.
   */
  searchValue(node: BTreeNode, value: number) {
    if (node.values.includes(value)) {
      console.info("found the value!");
      return node;
    }

    if (node.leaf) {
      console.warn("value was not found.");
      return null;
    }

    let child = 0;
    while (child < node.n && node.values[child] < value) {
      child++;
    }
    return this.searchValue(node.children[child], value);
  }

  /**
   * delete the value from the tree O(log N)
   * @param value
   */
  delete(value: number) {}

  /**
   * delete a value from a node
   * @param node
   * @param value
   *
   * how this works:
   * - recursively going through the height of the tree,
   * - trying to move the target value k to the bottom
   * - but always being sure that the next node has more than t - 1
   *   values before visiting it, otherwise do some operations before
   *   moving down
   */
  deleteFromNode(node: BTreeNode, value: number) {}

  /**
   * transfer one value from origin to target O(1)
   * @param origin
   * @param target
   */
  transferValue(origin: BTreeNode, target: BTreeNode) {}

  /**
   * combine 2 nodes into one 0(1)
   * @param origin
   * @param target
   */
  mergeNodes(origin: BTreeNode, target: BTreeNode) {}

  /**
   * insert a new value in the tree O(log N)
   * @param value
   */
  insert(value) {
    const actual = this.root;
    if (actual.n === 2 * this.order - 1) {
      // if full
      const temp = new BTreeNode(false);
      temp.tree = this;
      this.root = temp;
      temp.addChild(actual, 0);
      this.split(actual, temp, 1);
      this.insertNonFull(temp, value);
    } else {
      this.insertNonFull(actual, value);
    }
  }

  /**
   * insert a value in a not-full node O(1)
   * @param node
   * @param value
   */
  insertNonFull(node: BTreeNode, value: number) {
    if (node.leaf) {
      node.addValue(value); // insert
      return;
    }

    let temp = node.n;
    while (temp >= 1 && value < node.values[temp - 1]) {
      // iterate backward on node length
      // while counter is still more than 1 and
      // and value is smaller than the left value
      temp--;
    }

    if (node.children[temp].n === 2 * this.order - 1) {
      // if the current node is a full node (2t -1)
      // we split the node
      this.split(node.children[temp], node, temp + 1);
      if (value > node.values[temp]) {
        temp++;
      }
    }

    this.insertNonFull(node.children[temp], value);
  }

  /**
   * divide child node from parent into parent.values[pos-1] and parent.value[pos]
   * @param child
   * @param parent
   * @param pos
   */
  split(child: BTreeNode, parent: BTreeNode, pos: number) {
    const newChild = new BTreeNode(child.leaf);
    newChild.tree = this.root.tree; // ?
    for (let k = 1; k < this.order; k++) {
      newChild.addValue(child.removeValue(this.order));
    }
    if (!child.leaf) {
      for (let k = 1; k <= this.order; k++) {
        newChild.addChild(child.removeChild(this.order), k - 1);
      }
    }
    parent.addChild(newChild, pos);
    // pass value to parent
    parent.addValue(child.removeValue(this.order - 1));
    parent.leaf = false;
  }
}
