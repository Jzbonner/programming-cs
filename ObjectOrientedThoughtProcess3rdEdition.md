# Object Oriented Thought Process 
An in depth looked at Object Oriented Programming Concepts ranging from classes and objects to relational databases and client/server applications. Developers will be able to utilize these notes for practical and real world applicable design patterns in object oriented programming environments. 

## Introduction to Object-Oriented Concepts ~ Chapter 1
Object Wrappers are object oriented code that includes other code inside. You can also use object wrappers to wrap functionality such as security features, non-portable hardware features and so on. Developers who can combine the skills of mainframe and web development are in demand. 

An object is an entity that contains both data and behavior. In procedural programming code is placed into totally distinct functions or procedures; these procedures then become "black boxes" where input goes in and output comes out. In object oriented design, the attributes and behaviors are contained within a single object; there is no separation. In structured programming data is often separate from the procedures, at times this data is global (meaning it can be easy to modify that data outside the scope of your code). In Object Oriented design there is no such thing as data that is global. In object oriented programming methods are used to perform operations on the data as well as other actions. 

Object Oriented Design | 
--- |
* _Data_ is referred to as attributes. Data stored within an object represents the state of the object. 
* _Behaviors_ are referred to as methods. This is essentially what the data can do. In procedural programming the behavior is defined by procedures, functions and subroutines. In Object Oriented Programming these behaviors are contained in methods and you invoke a method by sending a message to it. 

![Diagram 1](https://github.com/Jzbonner/ProgrammingConcepts/blob/gh-pages/img-media/OOTP%20Ch.1%20Diagram%201.png)

> Procedural Programming normally separates the data of a system from the operation that manipulate the data. For example, if you want to send information across a network, only the relevant data is sent, with the expectation that the program at the other end of the network pipe knows what to do with the it. The fundamental advantage of Object Oriented programming is that data and the operations that manipulate the data (the code) are both encapsulated in the object.  

(_Object Oriented Thought Process_, Ch. 1)

The concept of Getters and Setters supports the concept of data hiding. Because other objects should not directly manipulate data within another object, the getters and setters provide controlled access to an object's data. Getters and Setters are sometimes referred to as accessor methods and mutator methods, respectively. 

### Example of Concepts 

![Diagram 2](https://github.com/Jzbonner/ProgrammingConcepts/blob/gh-pages/img-media/OOTP%20Ch.1%20Diagram%202.png)

