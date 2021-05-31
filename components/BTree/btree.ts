import { BTreeNode } from "./node";

export class BTree {
  root: BTreeNode;
  order: number;

  constructor(order: number) {
    this.order = order;
    this.root;
  }

  /**
   * search a value in the Tree and return the Node O(log N)
   * @param value
   */
  searchValue(value: number) {}

  /**
   * delete the value from the tree O(log N)
   * @param value
   */
  delete(value: number) {}

  /**
   * delete a value from a node
   * @param node
   * @param value
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
  insert(value) {}

  /**
   * insert a value in a not-full node O(1)
   * @param node
   * @param value
   */
  insertNonFull(node: BTreeNode, value: number) {}

  /**
   * divide child node from parent into parent.values[pos-1] and parent.value[pos]
   * @param child
   * @param parent
   * @param pos
   */
  split(child: BTreeNode, parent: BTreeNode, pos: number) {}
}
