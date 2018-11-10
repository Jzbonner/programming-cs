## Tree 
Trees are well known as a non-linear data structure. It doesn't store data in a linear way. It organizes data in a hierarchial way. A tree is a collection of nodes connected by directed (or undirected) edges. A tree is a non-linear data structure, compared to arrays, linked lists, stacks and queues which are linear data structures. A tree can be empty with no nodes or a tree is structure consisting of one node called the root and zero or one or more subtrees. There are a different types of tree data structures: 
1. Binary Search Tree 
2. AVL Tree 
3. Red-Black Tree 
4. Segment Tree 
5. Fenwick Tree 

### Terminology Summary 
* Root: the topmost `node` of the `tree` 
* Edge: the link between 2 `nodes` 
* Child: a `node` that has a `parent node`
* Parent: a `node` that has an `edge` to a `child node` 
* Leaf: a `node` that does not have a `child node` in the `tree` 
* Height: the `height` of a `tree` is the length of the longest path to a `leaf` 
* Depth: the `depth` of a `node` is the length of the path to its `root` 

![Diagram1](https://www.tutorialride.com/images/data-structures/structure-of-tree.jpeg)

----
##### Binary Search Tree 
Sometimes called ordered or sorted binary trees, are a particular type of container: data structures that store "items" in memory. They allow for fast lookup, addition and removal of items, and can be used to implement either dynamic sets of items, or lookup tables that allow finding an item by its key. Binary search trees keep their keys in sorted order, so that lookup and other operations can use the principle of binary search: when looking for a key in a tree (or a place to insert a new key), they traverse the tree from root to leaf, making comparisons to keys stored in the nodes of the tree and deciding, on the basis of the comparison, to continue searching in left or right subtrees. On average this means that each comparison allows the operation to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree. This is faster than utilizing an unsorted array but slower than corresponding operations on a hash table. 

Binary Search Tree Properties: 
1. The left subtree of a node contains only nodes with keys lesser than the node's key
2. The right subtree of a node contains only nodes with keys greater than the node's key
3. The left and right subtree must also be a binary search tree 
4. There can be no duplicate nodes 

**Advantages of Binary Search Trees** 
1. We can get all keys in sorted order by just doing Inorder Traversal of BST. This is not a natural operation in Hash Tables and requires extra efforts.
2. Doing order statistics, finding closest lower and greater elements, doing range queries are easy to do with BSTs. Like sorting, these operations are not a natural operation with Hash Tables.
3. BSTs are easy to implement compared to hashing, we can easily implement our own customized BST. To implement Hashing, we generally rely on libraries provided by programming languages.
4. With Self-Balancing BSTs, all operations are guaranteed to work in O(Logn) time. But with Hashing, Θ(1) is average time and some particular operations may be costly, especially when table resizing happens.

Example of a Binary Search Tree in Javascript: 
```javascript 
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.add = function(data) {
  var node = new Node(data);
  if(!this.root) {
    this.root = node;
  } else {
    var current = this.root;
    while(current) {
      if(node.data < current.data) {
        if(!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else if (node.data > current.data) {
        if(!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      } else {
        break;
      }
    }
  }
};
BinarySearchTree.prototype.remove = function(data) {
  var that = this;
  var removeNode = function(node, data) {
    if(!node) {
      return null;
    }
    if(data === node.data) {
      if(!node.left && !node.right) {
        return null;
      }
      if(!node.left) {
        return node.right;
      }
      if(!node.right) {
        return node.left;
      }
      // 2 children
      var temp = that.getMin(node.right);
      node.data = temp;
      node.right = removeNode(node.right, temp);
      return node;
    } else if(data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    } else {
      node.right = removeNode(node.right, data);
      return node;
    }
  };
  this.root = removeNode(this.root, data);
};
BinarySearchTree.prototype.contains = function(data) {
  var current = this.root;
  while(current) {
    if(data === current.data) {
      return true;
    }
    if(data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return false;
};
BinarySearchTree.prototype._preOrder = function(node, fn) {
  if(node) {
    if(fn) {
      fn(node);
    }
    this._preOrder(node.left, fn);
    this._preOrder(node.right, fn);
  }
};
BinarySearchTree.prototype._inOrder = function(node, fn) {
  if(node) {
    this._inOrder(node.left, fn);
    if(fn) {
      fn(node);
    }
    this._inOrder(node.right, fn);
  }
};
BinarySearchTree.prototype._postOrder = function(node, fn) {
  if(node) {
    this._postOrder(node.left, fn);
    this._postOrder(node.right, fn);
    if(fn) {
      fn(node);
    }
  }
};
BinarySearchTree.prototype.traverseDFS = function(fn, method) {
  var current = this.root;
  if(method) {
    this['_' + method](current, fn);
  } else {
    this._preOrder(current, fn);
  }
};
BinarySearchTree.prototype.traverseBFS = function(fn) {
  this.queue = [];
  this.queue.push(this.root);
  while(this.queue.length) {
    var node = this.queue.shift();
    if(fn) {
      fn(node);
    }
    if(node.left) {
      this.queue.push(node.left);
    }
    if(node.right) {
      this.queue.push(node.right);
    }
  }
};
```
--- 
##### AVL Tree
Named after the inventors Adelson, Velski & Landis, __AVL Trees__ are height balancing binary search trees. *AVL Trees* check the height of the left and right subtrees and assures that the difference is not more than 1. This difference is called the __Balance Factor__. 

AVL Tree Properties: 
* Each node can hold a maximum of two child nodes 
* Each node can carry only one key value 
* The height of the child nodes of any time must differ in height by no more than 1 
* When there is a difference in height of more than 1 or less than -1 between the child nodes of a particular node, the tree goes through the process of rebalancing through a series of rotations until it is re-balanced 

###### The Balance Factor 
With every operation that the tree undergoes, the height of the nodes is always queried, details stored and the necessary rotations carried out if re-balancing of the tree is necessary. The balancing, as mentioned earlier is achieved by nodal rotations. The AVL goes out of balance whenever a insertion or deletion results in the tree being in an unbalanced state. 

Example: ![Diagram2](https://study.com/cimages/multimages/16/83da2409-d045-4efb-a630-4598fddaa910_balfact.png)

###### Rotations 
__Rotations__ involve the movement of nodes using a single node as the pivotal point of the rotation. The rotations could be in the left or right direction about the pivot. A node becomes the pivot of rotation to ensure that the height difference between the child nodes does not differ by more than 1. 

**Applications of AVL Tree** 
1. Particularly used for look up functionality in intensive applications (i.e. indexing large records in a database to improve search)
2. Primarily used for searching in _O(log n)_ time complexity 

Code Snippet from [GrowingWiththeWeb](https://www.growingwiththeweb.com/data-structures/avl-tree/overview/) 🌎️
```javascript 
/**
 * Creates a new AVL Tree.
 *
 * @param {function} customCompare An optional custom compare function.
 */
var AvlTree = function (customCompare) {
  this._root = null;
  this._size = 0;

  if (customCompare) {
    this._compare = customCompare;
  }
};

/**
 * Compares two keys with each other.
 *
 * @private
 * @param {Object} a The first key to compare.
 * @param {Object} b The second key to compare.
 * @return {number} -1, 0 or 1 if a < b, a == b or a > b respectively.
 */
AvlTree.prototype._compare = function (a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

/**
 * Inserts a new node with a specific key into the tree.
 *
 * @param {Object} key The key being inserted.
 * @param {Object} value The value being inserted.
 */
AvlTree.prototype.insert = function (key, value) {
  this._root = this._insert(key, value, this._root);
  this._size++;
};

/**
 * Inserts a new node with a specific key into the tree.
 *
 * @private
 * @param {Object} key The key being inserted.
 * @param {Object} value The value being inserted.
 * @param {Node} root The root of the tree to insert in.
 * @return {Node} The new tree root.
 */
AvlTree.prototype._insert = function (key, value, root) {
  // Perform regular BST insertion
  if (root === null) {
    return new Node(key, value);
  }

  if (this._compare(key, root.key) < 0) {
    root.left = this._insert(key, value, root.left);
  } else if (this._compare(key, root.key) > 0) {
    root.right = this._insert(key, value, root.right);
  } else {
    // It's a duplicate so insertion failed, decrement size to make up for it
    this._size--;
    return root;
  }

  // Update height and rebalance tree
  root.height = Math.max(root.leftHeight(), root.rightHeight()) + 1;
  var balanceState = getBalanceState(root);

  if (balanceState === BalanceState.UNBALANCED_LEFT) {
    if (this._compare(key, root.left.key) < 0) {
      // Left left case
      root = root.rotateRight();
    } else {
      // Left right case
      root.left = root.left.rotateLeft();
      return root.rotateRight();
    }
  }

  if (balanceState === BalanceState.UNBALANCED_RIGHT) {
    if (this._compare(key, root.right.key) > 0) {
      // Right right case
      root = root.rotateLeft();
    } else {
      // Right left case
      root.right = root.right.rotateRight();
      return root.rotateLeft();
    }
  }

  return root;
};

/**
 * Deletes a node with a specific key from the tree.
 *
 * @param {Object} key The key being deleted.
 */
AvlTree.prototype.delete = function (key) {
  this._root = this._delete(key, this._root);
  this._size--;
};

/**
 * Deletes a node with a specific key from the tree.
 *
 * @private
 * @param {Object} key The key being deleted.
 * @param {Node} root The root of the tree to delete from.
 * @return {Node} The new tree root.
 */
AvlTree.prototype._delete = function (key, root) {
  // Perform regular BST deletion
  if (root === null) {
    this._size++;
    return root;
  }

  if (this._compare(key, root.key) < 0) {
    // The key to be deleted is in the left sub-tree
    root.left = this._delete(key, root.left);
  } else if (this._compare(key, root.key) > 0) {
    // The key to be deleted is in the right sub-tree
    root.right = this._delete(key, root.right);
  } else {
    // root is the node to be deleted
    if (!root.left && !root.right) {
      root = null;
    } else if (!root.left && root.right) {
      root = root.right;
    } else if (root.left && !root.right) {
      root = root.left;
    } else {
      // Node has 2 children, get the in-order successor
      var inOrderSuccessor = minValueNode(root.right);
      root.key = inOrderSuccessor.key;
      root.value = inOrderSuccessor.value;
      root.right = this._delete(inOrderSuccessor.key, root.right);
    }
  }

  if (root === null) {
    return root;
  }

  // Update height and rebalance tree
  root.height = Math.max(root.leftHeight(), root.rightHeight()) + 1;
  var balanceState = getBalanceState(root);

  if (balanceState === BalanceState.UNBALANCED_LEFT) {
    // Left left case
    if (getBalanceState(root.left) === BalanceState.BALANCED ||
        getBalanceState(root.left) === BalanceState.SLIGHTLY_UNBALANCED_LEFT) {
      return root.rotateRight();
    }
    // Left right case
    if (getBalanceState(root.left) === BalanceState.SLIGHTLY_UNBALANCED_RIGHT) {
      root.left = root.left.rotateLeft();
      return root.rotateRight();
    }
  }

  if (balanceState === BalanceState.UNBALANCED_RIGHT) {
    // Right right case
    if (getBalanceState(root.right) === BalanceState.BALANCED ||
        getBalanceState(root.right) === BalanceState.SLIGHTLY_UNBALANCED_RIGHT) {
      return root.rotateLeft();
    }
    // Right left case
    if (getBalanceState(root.right) === BalanceState.SLIGHTLY_UNBALANCED_LEFT) {
      root.right = root.right.rotateRight();
      return root.rotateLeft();
    }
  }

  return root;
};

/**
 * Gets the value of a node within the tree with a specific key.
 *
 * @param {Object} key The key being searched for.
 * @return {Object} The value of the node or null if it doesn't exist.
 */
AvlTree.prototype.get = function (key) {
  if (this._root === null) {
    return null;
  }

  return this._get(key, this._root).value;
};

/**
 * Gets the value of a node within the tree with a specific key.
 *
 * @private
 * @param {Object} key The key being searched for.
 * @param {Node} root The root of the tree to search in.
 * @return {Object} The node or null if it doesn't exist.
 */
AvlTree.prototype._get = function (key, root) {
  var result = this._compare(key, root.key);

  if (result === 0) {
    return root;
  }

  if (result < 0) {
    if (!root.left) {
      return null;
    }
    return this._get(key, root.left);
  }

  if (!root.right) {
    return null;
  }
  return this._get(key, root.right);
};

/**
 * Gets whether a node with a specific key is within the tree.
 *
 * @param {Object} key The key being searched for.
 * @return {boolean} Whether a node with the key exists.
 */
AvlTree.prototype.contains = function (key) {
  if (this._root === null) {
    return false;
  }

  return !!this._get(key, this._root);
};

/**
 * @return {Object} The minimum key in the tree.
 */
AvlTree.prototype.findMinimum = function () {
  return minValueNode(this._root).key;
};

/**
 * Gets the minimum value node, rooted in a particular node.
 *
 * @private
 * @param {Node} root The node to search.
 * @return {Node} The node with the minimum key in the tree.
 */
function minValueNode(root) {
  var current = root;
  while (current.left) {
    current = current.left;
  }
  return current;
}

/**
 * @return {Object} The maximum key in the tree.
 */
AvlTree.prototype.findMaximum = function () {
  return maxValueNode(this._root).key;
};

/**
 * Gets the maximum value node, rooted in a particular node.
 *
 * @private
 * @param {Node} root The node to search.
 * @return {Node} The node with the maximum key in the tree.
 */
function maxValueNode(root) {
  var current = root;
  while (current.right) {
    current = current.right;
  }
  return current;
}

/**
 * @return {number} The size of the tree.
 */
AvlTree.prototype.size = function () {
  return this._size;
};

/**
 * @return {boolean} Whether the tree is empty.
 */
AvlTree.prototype.isEmpty = function () {
  return this._size === 0;
};

/**
 * Represents how balanced a node's left and right children are.
 *
 * @private
 */
var BalanceState = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
};

/**
 * Gets the balance state of a node, indicating whether the left or right
 * sub-trees are unbalanced.
 *
 * @private
 * @param {Node} node The node to get the difference from.
 * @return {BalanceState} The BalanceState of the node.
 */
function getBalanceState(node) {
  var heightDifference = node.leftHeight() - node.rightHeight();
  switch (heightDifference) {
    case -2: return BalanceState.UNBALANCED_RIGHT;
    case -1: return BalanceState.SLIGHTLY_UNBALANCED_RIGHT;
    case 1: return BalanceState.SLIGHTLY_UNBALANCED_LEFT;
    case 2: return BalanceState.UNBALANCED_LEFT;
    default: return BalanceState.BALANCED;
  }
}



/**
 * Creates a new AVL Tree node.
 *
 * @private
 * @param {Object} key The key of the new node.
 * @param {Object} value The value of the new node.
 */
var Node = function (key, value) {
  this.left = null;
  this.right = null;
  this.height = null;
  this.key = key;
  this.value = value;
};

/**
 * Performs a right rotate on this node.
 *
 *       b                           a
 *      / \                         / \
 *     a   e -> b.rotateRight() -> c   b
 *    / \                             / \
 *   c   d                           d   e
 *
 * @return {Node} The root of the sub-tree; the node where this node used to be.
 */
Node.prototype.rotateRight = function () {
  var other = this.left;
  this.left = other.right;
  other.right = this;
  this.height = Math.max(this.leftHeight(), this.rightHeight()) + 1;
  other.height = Math.max(other.leftHeight(), this.height) + 1;
  return other;
};

/**
 * Performs a left rotate on this node.
 *
 *     a                              b
 *    / \                            / \
 *   c   b   -> a.rotateLeft() ->   a   e
 *      / \                        / \
 *     d   e                      c   d
 *
 * @return {Node} The root of the sub-tree; the node where this node used to be.
 */
Node.prototype.rotateLeft = function () {
  var other = this.right;
  this.right = other.left;
  other.left = this;
  this.height = Math.max(this.leftHeight(), this.rightHeight()) + 1;
  other.height = Math.max(other.rightHeight(), this.height) + 1;
  return other;
};

/**
 * Convenience function to get the height of the left child of the node,
 * returning -1 if the node is null.
 *
 * @return {number} The height of the left child, or -1 if it doesn't exist.
 */
Node.prototype.leftHeight = function () {
  if (!this.left) {
    return -1;
  }
  return this.left.height;
};

/**
 * Convenience function to get the height of the right child of the node,
 * returning -1 if the node is null.
 *
 * @return {number} The height of the right child, or -1 if it doesn't exist.
 */
Node.prototype.rightHeight = function () {
  if (!this.right) {
    return -1;
  }
  return this.right.height;
}
```
---
