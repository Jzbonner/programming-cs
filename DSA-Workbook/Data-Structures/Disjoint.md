## Disjoint Set 
A **Disjoint Set** is a data structure that keeps track of a set of elements partitioned into a number of disjoint subsets. A _union-find algorithm_ is an algorithm that performs two useful operations: 
1. **Find**: Determine which subset a particular element is in. This can be used for determining if two elements are in the same subset. 
2. **Union**: Join two subsets into a single subset. 

_Disjoint-Sets_ provide near constant time operations to add new sets, to merge existing sets, and to determine whether elements are in the same set. The _Disjoint-Set_ data structure is useful for quickly testing whether nodes in a graph are connected or not. 

![Diagram1](https://raw.githubusercontent.com/Jzbonner/ProgrammingConcepts/master/img-media/Disjoint-set.png)

For further understanding and implementation of the Find and Union operations in the context of Disjoint-Set Data Structures please refer to [this link](https://www.mathblog.dk/disjoint-set-data-structure/). 🌐

**Disjoint Set Implementation in Javascript** 
```javascript 
function main (numNodes, edges) {

  const parent = [];
  const rank = [];

  function makeSet (x) {
    parent[x] = x;
    rank[x] = 0;
  }

  function find (x) {
    if (x !== parent[x]) parent[x] = find(parent[x]);
    return parent[x];
  }

  function union (x, y) {
    const xRoot = find(x);
    const yRoot = find(y);
    
    if (xRoot === yRoot) {
      return false; // items were already in the same set
    }

    if (rank[xRoot] < rank[yRoot]) {
      parent[xRoot] = yRoot;
    } else if (rank[xRoot] > rank[yRoot]) {
      parent[yRoot] = xRoot;
    } else {
      parent[yRoot] = xRoot
      rank[xRoot] = rank[xRoot] + 1
    }

    return true; // items were not already in the same set
  }

  for (let node = 0; node < numNodes; node++) {
    makeSet(node);
  }

  for (let e = 0; e < edges.length; e++) {
    const [node1, node2] = edges[e];
    const didSomething = union(node1, node2);
  }
}
```



