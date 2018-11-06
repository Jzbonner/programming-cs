## Priority Queue 
A priority queue is similar to the queue data structure in that we insert an element from the back and remove an element from the front. However the logical order of elements in the priority queue depends on the priority of the elements. The element with the highest priority will be moved to the front of the queue and one with lowest priority will move to the back of the queue. Thus it is possible that if you enqueue an element at the back of the queue, it can move to the front because of its highest priority. 

Note: Priority Queues only support _comparable data_, meaning the data inserted into the priority queue must be ordered in some way either from least to greatest or greatest to least. This is so that we are able to assign relative priorities to each element. 

While priority queues are often implemented with heaps, they are conceptually distinct from heaps. A priority queue is an abstract concept like _a list or a map_; just as a list can be implemented with a linked list or an array, a priority queue can be implemented with a heap or a variety of other methods (i.e. unordered array).

![Diagram1](https://www.callicoder.com/assets/images/post/large/priority-queue-data-structure.jpg)

**Applications of Priority Queues** 
* You can use a priority queue whenever you need to dynamically fetch the _next best_ or _next worst_ element. 
* Used in Huffman coding (which is often used in lossless data compression)
* Used by Minimum Spanning Tree (MST) Algorithms (i.e. directed graphs)
* Used in certain implementations of Dijkstras's shortest path  algorithm 