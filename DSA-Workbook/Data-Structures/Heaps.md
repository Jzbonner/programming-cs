<!--
    TODO: Review Heaps for Interview Practice 
    * Need to think about Heaps in terms of arrays 
    * Need to derive some ways to apply Heaps to real life examples
-->

## Heaps 
In computer science a heap is a specialized tree-based data structure where the root node key is compared with its children and arranged accordingly. Elements are always inserted into a heap at the next empty node looking top to bottom, left to right. 

**Min-Heap/Max-Heap Algorithm Construction Psuedocode:** 
1. Create a new node at the end of the heap 
2. Assign new value to node
3. Compare the value of this child node with it's parent 
4. If the value of the parent is less than that of the child, then swap them (*Min-Heap*)
    * If the value of the parent is greater than that of the child, then swap them (*Max-Heap*)
5. Repeat step 3 and 4 until property holds 

**Min-Heap/Max-Heap Deletion Algorithm Psuedocode:** 
1. Remove root node 
2. Move the last element of last level to root
3. Compate the value of this child node with it's parent
4. If value of parent is less than that of the child element, then swap them (*Min-Heap*)
    * If the value of the parent is greater than that of the child, then swap them (*Max-Heap*)
5. Repeat step 3 and 4 until property holds

##### key(a) >= key(b)
__Max-Heap__: Where the value of the root node is greater than or equal to either of it's children. 
![Diagram1](https://www.tutorialspoint.com/data_structures_algorithms/images/max_heap_example.jpg)

##### key(a) <= key(b)
__Min-Heap__: Where the value of the root node is less than or equal to either of it's children. 
![Diagram2](https://www.tutorialspoint.com/data_structures_algorithms/images/min_heap_example.jpg)

##### Applications of Heap Data Structures 
* To quickly find the smallest and largest element from a collection of items or array.
* In the implementation of Priority queue in graph algorithms like Dijkstra's algorithm (shortest path), Prim's algorithm (minimum spanning tree) and Huffman encoding (data compression).
* In order to overcome the Worst Case Complexity of Quick Sort algorithm from `O(n^2) to O(nlog(n))` in Heap Sort.
* For finding the order in statistics.
* Systems concerned with security and embedded system such as Linux Kernel uses Heap Sort because of the `O(nlog(n))`.