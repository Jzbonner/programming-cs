## Doubly Linked List 
A doubly linked list is a data structure that consist of a set of sequentially linked records called nodes. Each node contains two fields, called __links__, that are references to the previous and to the next node in the sequence. 

![Diagram1](https://www.oreilly.com/library/view/learning-javascript-data/9781783554874/graphics/4874OS_05_19.jpg)

Having two node links allows traversal in either direction but adding and removing a node in a doubly linked list requires changing more than links than the same operation of a traditional linked list.  

The beginning and ending nodes point to some kind of terminator, typically a sentinel node or null, to facilitate traversal of the list. If there is only one sentinel node, then the list is circularly linked via the sentinel node. Double linked list are essentially two singly linked list formed from the same data items, but in opposite sequential order.  

```javascript 
function Node(data) {
  this.data = data;
  this.previous = null;
  this.next = null;
}
function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
}
```

### Use Case Examples in Javascript 
```javascript 
DoublyLinkedList.prototype.add = function (data) {
  var node = new Node(data);
  if(!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  this.numberOfValues++;
};
DoublyLinkedList.prototype.remove = function(data) {
  var current = this.head;
  while(current) {
    if(current.data === data) {
      if(current === this.head && current === this.tail) {
        this.head = null;
        this.tail = null;
      } else if(current === this.head) {
        this.head = this.head.next;
        this.head.previous = null;
      } else if(current === this.tail) {
        this.tail = this.tail.previous;
        this.tail.next = null;
      } else {
        current.previous.next = current.next;
        current.next.previous = current.previous;
      }
      this.numberOfValues--;
    }
    current = current.next;
  }
};
DoublyLinkedList.prototype.insertAfter = function(data, toNodeData) {
  var current = this.head;
  while(current) {
    if(current.data === toNodeData) {
      var node = new Node(data);
      if(current === this.tail) {
        this.add(data);
      } else {
        current.next.previous = node;
        node.previous = current;
        node.next = current.next;
        current.next = node;
        this.numberOfValues++;
      }
    }
    current = current.next;
  }
};
DoublyLinkedList.prototype.traverse = function(fn) {
  var current = this.head;
  while(current) {
    if(fn) {
      fn(current);
    }
    current = current.next;
  }
};
DoublyLinkedList.prototype.traverseReverse = function(fn) {
  var current = this.tail;
  while(current) {
    if(fn) {
      fn(current);
    }
    current = current.previous;
  }
};
DoublyLinkedList.prototype.length = function() {
  return this.numberOfValues;
};
DoublyLinkedList.prototype.print = function() {
  var string = '';
  var current = this.head;
  while(current) {
    string += current.data + ' ';
    current = current.next;
  }
  console.log(string.trim());
};
```

### Applications of Doubly Linked List 
__Applications of Doubly Linked List__ 
* The browser cache which allows you to hit both the forward and back buttons
* Applications that have a Most Recently Used list 
* A stack, hash table or binary tree can be implemented using a doubly linked list 
* Undo functionality in Photoshop or Microsoft Word
* A music player that has "next song" and "previous song" functionality 