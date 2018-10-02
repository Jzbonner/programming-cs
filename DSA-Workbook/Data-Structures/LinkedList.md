## Linked List 
A data structure consisting of a group of nodes which together represent a sequence. In it's simplest form, each node is composed of data and a reference. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. 

Con: Access time is linear (and difficult to pipeline), and faster access if not feasible. Arrays have better cache locality as compared to linked list. You can not access individual elements directly. You must start at the beginning of the list and follow the references until you get to a specific item.  

Pros: A disadvantage of using arrays to store data is that arrays are static structures and therefore cannot be easily extended or reduced to fit the data set. Linked List are dynamic data structures 

![Diagram1](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/pix/linkedlist.bmp)

Each element or node of a list is composed of two elements - the data and the reference to the next node; with the last node having a reference to `null`. The entry point into a linked list is known as a __head__ of the list. The term __head__ is not a separate node but a reference to the first node; if empty then the __head__ has a null reference. 

```javascript 
class LinkedListNode {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next;
    }; 
};
```

### Use Case Examples of Linked List in Javascript 
```javascript 
import LinkedListNode from 'previous-example';

class LinkedList {
  prepend(value) {
    // Make new node to be a head.
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    // If there is no tail yet let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  };
  append(value) {
    const newNode = new LinkedListNode(value);
    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    // Attach new node to the end of linked list.
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  };
  delete(value) {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    // If the head must be deleted then make next node that is differ
    // from the head to be a new head.
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;
    if (currentNode !== null) {
      // If next node must be deleted then make next node to be a next next one.
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    // Check if tail must be deleted.
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }
    return deletedNode;
  };
  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode) {
      // If callback is specified then try to find node by callback.
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      // If value is specified then try to compare by value..
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }; 
  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      // There is only one node in linked list.
      this.head = null;
      this.tail = null;
      return deletedTail;
    }
    // Rewind to the last node and delete "next" link for the node before the last one.
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;
    return deletedTail;
  }; 
  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  }; 
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (currNode) {
      // Store next node.
      nextNode = currNode.next;

      // Change next node of the current node so it would link to previous node.
      currNode.next = prevNode;

      // Move prevNode and currNode nodes one step forward.
      prevNode = currNode;
      currNode = nextNode;
    }

    // Reset head and tail.
    this.tail = this.head;
    this.head = prevNode;
    return this;
  };
}; 
```

### Applications of Linked List
__Applications of linked list in computer science__
* Implementation of stacks and queues
* Implementation of graphs : Adjacency list representation of graphs is most popular which is uses linked list to store adjacent vertices.
* Dynamic memory allocation : We use linked list of free blocks.
* Maintaining directory of names
* Performing arithmetic operations on long integers
* Manipulation of polynomials by storing constants in the node of linked list
representing sparse matrices

__Applications of linked list in real world__
* **Image viewer** – Previous and next images are linked, hence can be accessed by next and previous button.
* **Previous and next page in web browser** – We can access previous and next url searched in web browser by pressing back and next button since, they are linked as linked list.
* **Music Player** – Songs in music player are linked to previous and next song. you can play songs either from starting or ending of the list.