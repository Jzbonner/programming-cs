## Queues
A queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). This means that entities in the collection are kept in order and the principle operations on the collection are the addition of entities to the rear terminal position, known as the enqueue, and removal of entities from the front terminal position, known as the dequeue. Basically in a FIFO data structure the first element added to the queue will be the first one to be removed. 

![Diagram1](https://www.studytonight.com/data-structures/images/introduction-to-queue.png)

Characteristics of Stacks and Queues include: 
* Linear Data Structures 
* Flexible Size 

The standard queue data structure also has two other variations: **the double ended queue** and **the circular queue**. In a standard queue, a character is inserted at the back and deleted at the front; however in a *double ended queue characters*, can be inserted deleted from both the front and the back of the queue. 

A circular queue is an improvement over the standard queue structure. In a standard queue when an element is deleted, the vacant space is not reutilized. However, in a circular queue, vacant spaces are reutilized. 

![Diagram2](https://he-s3.s3.amazonaws.com/media/uploads/51fe410.png)

Example of the implementation of a queue in javascript: 
```javascript 
function generatePrintBinary(n) 
{ 
    // Create an empty queue of strings 
    var q = new Queue(); 
           
    // Enqueue the first binary number 
    q.enqueue("1"); 
           
    // This loops is like BFS of a tree with 1 as root 
    // 0 as left child and 1 as right child and so on 
    while(n-- > 0) 
    { 
        // print the front of queue 
        var s1 = q.front(); 
        q.dequeue(); 
        console.log(s1); 
               
        // Store s1 before changing it 
        var s2 = s1; 
               
        // Append "0" to s1 and enqueue it 
        q.enqueue(s1 + "0"); 
               
        // Append "1" to s2 and enqueue it. Note that s2 contains 
        // the previous front 
        q.enqueue(s2 + "1"); 
     } 
} 
  
// calling the above function     
// prints [1 10 11 100 101] 
generatePrintBinary(5)
```

## Stacks 
A stack is an abstract data type that serves as a collection of elements, with two principal operations: __Push__, which adds an element to the collection and __Pop__ which removes the most recently added element that was not yet removed. Typically, stacks are utilized in a *Last In First Out (LIFO)* method of operation. 

The principal operations of stacks include: 
* peek — returns the item on the top of the stack, without removing it.
* empty — returns true if the stack is empty, false otherwise
* swap — the two top most elements of the stack can be swapped


Examples of Stacks in javascript: 
```javascript 
// Creates a stack
var Stack = function() {
    this.count = 0;
    this.storage = {};
}

// Adds a value onto the end of the stack
Stack.prototype.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
}

// Removes and returns the value at the end of the stack
Stack.prototype.pop = function() {
    // Check to see if the stack is empty
    if (this.count === 0) {
        return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}

// Returns the length of the stack
Stack.prototype.size = function() {
    return this.count;
}
```
