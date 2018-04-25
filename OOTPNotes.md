# Object Oriented Thought Process 
An in depth looked at Object Oriented Programming Concepts ranging from classes and objects to relational databases and client/server applications. Developers will be able to utilize these notes for practical and real world applicable design patterns in object oriented programming environments. 

## Introduction to Object-Oriented Concepts ~ Chapter 1
Object Wrappers are object oriented code that includes other code inside. You can also use object wrappers to wrap functionality such as security features, non-portable hardware features and so on. Developers who can combine the skills of mainframe and web development are in demand. 

An object is an entity that contains both data and behavior. In procedural programming code is placed into totally distinct functions or procedures; these procedures then become "black boxes" where input goes in and output comes out. In object oriented design, the attributes and behaviors are contained within a single object; there is no separation. In structured programming data is often separate from the procedures, at times this data is global (meaning it can be easy to modify that data outside the scope of your code). In Object Oriented design there is no such thing as data that is global. In object oriented programming methods are used to perform operations on the data as well as other actions. 

Object Oriented Design | 
--- |
* __Data__ is referred to as attributes. Data stored within an object represents the state of the object. 
* __Behaviors__ are referred to as methods. This is essentially what the data can do. In procedural programming the behavior is defined by procedures, functions and subroutines. In Object Oriented Programming these behaviors are contained in methods and you invoke a method by sending a message to it. 

![Diagram 1](https://github.com/Jzbonner/ProgrammingConcepts/blob/gh-pages/img-media/OOTP%20Ch.1%20Diagram%201.png)

> Procedural Programming normally separates the data of a system from the operation that manipulate the data. For example, if you want to send information across a network, only the relevant data is sent, with the expectation that the program at the other end of the network pipe knows what to do with the it. The fundamental advantage of Object Oriented programming is that data and the operations that manipulate the data (the code) are both encapsulated in the object.  

(_Object Oriented Thought Process_, Ch. 1)

The concept of Getters and Setters supports the concept of data hiding. Because other objects should not directly manipulate data within another object, the getters and setters provide controlled access to an object's data. Getters and Setters are sometimes referred to as accessor methods and mutator methods, respectively. 

### Example of Concepts 
![Diagram 2](https://github.com/Jzbonner/ProgrammingConcepts/blob/gh-pages/img-media/OOTP%20Ch.1%20Diagram%202.png)

The above is a UML Class Diagram that consist of three main parts: the name itself, the data (attributes) and the behaviors (methods). As you can see the Employee class diagram contains the attributes _SocialSecurityNUmber_, _Gender_, and _DateofBirth_. While the method section contains the behaviors that operate on those attributes. For now think of classes as templates from which objects are made. When objects are created we say that the objects are _instantiated_ (i.e. creating three real world employees using the above class structure would result in three instances of the Employee class). As you can see a _class_ is a blueprint for an object. In Object Oriented Programming the class always comes before the object, meaning an object can not be instantiated without a class. An implementation of a class and object relationship would look as follows: 
```java 
public class Person {
    //Attributes 
    private String name; 
    private String address; 

    //Methods 
    public String getName() {
        return name; 
    }

    public void setName(String n) {
        name = n;
    }

    public String getAddress() {
        return address; 
    }

    public void setAddress(String adr) {
        address = adr; 
    }
}
```

> When working in Java, a data type or method is defined as public, meaning other objects can directly access it. When a data type is defined as private, only that specified object can access it. In the person class, the behaviors `getName()`, `setName()`, `getAddress`, and `setAddress` allow other objects to inspect and change the values of the object's attributes. Messages are the communication mechanisms between objects. For instance when Object A invokes a method of Object B, it is really sending a message to Object B.

(_Object Oriented Thought Process_, Ch.1)

Let's take a look at another example of attributes, methods and messages in Java: 
```java 
public Class Payroll() {

    String name; 

    Person p = new Person(); // interaction with the previous Person class

    String = p.setName("Joe"); // Message being sent to the Person class

    ... code // additional code 

    String = p.getName(); // Message being received from the Person class
}
```

Encapsulation and Data Hiding | 
--- | 

In good Object Oriented Design an object should only reveal interfaces that other objects must have to interact with it. Details not pertinent to the use of the object should be hidden from all other objects. Essentially data hiding is a part of encapsulation. The basics of encapsulation involve _interface_ and _implementation_. 

The interface defines the fundamental means of communication between objects. The interface should completely describe how users of the class interact with the class. In java, for example, the methods that are part of the interface are designated with the `public` keyword. Yes there are interfaces to classes as well as methods, however it is important to remember that interfaces to the classes are the public methods while the interface to the methods relate to how you can call or invoke them in other objects. 

### Modeling Interface and Implementation Paradigms 
Let's assume that we are attempting to write the code for a class that calculates the squares of integers. In order to do this we will need a proper interface and implementation. Take notice of two important things in the code snippet below, the interface used to prime the calculation of the square integer and return the squared value is made public so that it can be accessed by other objects. The actual implementation of calculating the square integer should only be seen by the intSquare class so it is made private. 
```java 
public class intSquare {

    // private attribute that's only accessible to everything inside this class and nothing else
    private int squareValue; 

    // public interface 
    public int getSquare(int value) {
        squareValue = calculateSquare(value);
        return squareValue; 
    }

    // private implementation
    private int calculateSquare(int value) {
        return value*value; 
    }
}
```

### Inheritance 
One of the most powerful features of object oriented programming is code reuse. Object Oriented programming allows you to define relationships between classes that facilitate not only code reuse, but also better overall design. _Inheritance_ allows a class to inherit the attributes and methods of another class. 
![Diagram 3](https://github.com/Jzbonner/ProgrammingConcepts/blob/gh-pages/img-media/OOTP%20Ch.1%20Diagram%203.png)

The superclass or parent class contains all attributes and behaviors that are common to classes that inherit from it. The `Mammal` class would be seen as the parent class, since it contains general attributes and behaviors that are customary of a wide range of sub classes (i.e. eye color, hair color, generate body heat, etc.). The `dog` and `cat` sub classes inherit those commons traits (attributes and behaviors) and only needs to be defined by those attributes and behaviors that make it solely a cat. In some Object Oriented Languages a class can only have one parent class, this is known as __single-inheritance__; however in other Object Oriented Languages a class can have multiple parent class, this is known as __multi-inheritance__. 

### Is-A Relationships, Has-A Relationships and Inheritance/Composition 
__Polymorphism__ is often tightly coupled with inheritance but distinctly it is of the defining principles of Object Oriented Programming. In an inheritance hierarchy all subclasses inherit their interfaces from their superclass. However, because each subclass is a separate entity, each might require a separate response to the same message. This is known as polymorphism. 

Examples of Polymorphism with Shapes | 
--- |

Consider the following hierarchy: 

![Diagram 4](https://github.com/Jzbonner/ProgrammingConcepts/blob/gh-pages/img-media/OOTP%20Ch.1%20Diagram%204.png)

Clearly the _Circle_, _Square_, and _Star_ subclasses all inherit their interface through the _Shape_ superclass. This relationship is typically defined as an __is-a relationship__; because circle, square and star are all extensions of the _Shape_ class. Thus circle `is-a` shape, square `is-a` shape and star `is-a` shape. The `Draw()` method (derived from the shape superclass) for each of the subclasses should return a different response depending on the specific subclass. Instead of providing the implementation for the `Draw()` method in the Shape superclass you would relegate that responsibility to each individual subclass (i.e. your circle, square or star subclass). Consider the following __Shape__ class and the `getArea()` method: 

```java 
public abstract class Shape() { // When a class is designated by the keyword 'abstract', a subclass must provide the implementation for the method 

    private double area; 

    public abstract double getArea(); // the public implementation that is left up to the subclasses to define 

}

// Code to represent the Circle and Square subclasses 

public class Circle extends Shape { // The 'extends' keyword indicates that the Circle subclass inherits from the Shape superclass

    double radius; 

    public Circle(double r) { // This is a constructor 

        radius = r; 

    }

    public double getArea() { // polymorphism right here. The 'getArea()' implementation from the Shape superclass is now defined here

        area = 3.14*(radius*radius); 
        return area; 

    }
}

public class Rectangle extends Shape {

    double length; 
    double width; 

    public Rectangle(double l, double w) {

        length = l; 
        width = w; 
    }

    public getArea() {

        area = length*width; 
        return area; 
    }
}

// Instantiate the shape class by referencing the specific subclass and pointing to its specific constructor then defining the 'new' constructor; afterwards load the subclass shapes into a stack that references the superclass Shape and print the associated subclass areas from the stack. 

Circle circle = new Circle(5); 
Rectangle rectangle = new Rectangle(4,5); 

stack.push(circle);
stack.push(rectangle); 

while (!stack.empty()) {

    Shape shape = (Shape) stack.pop();
    System.out.println("Area = " + shape.getArea()); 

}
```
> A stack is a data structure that is last-in, first-out system. It is like a coin changer, where you insert coins at the top of the cylinder and, when you need a coin, you simply take one off the top; which is the last one you inserted. Pushing an item onto a stack means that you are adding an item to the top. Popping an item off the stack means you are taking the last item off the stack. 

(_Object Oriented Thought Process_, Ch.1)

As you can see from the above example, objects are often built or composed from other objects: in Object Oriented programming this is known as __Composition__. With regards to Object Oriented Programming there are only two ways to build classes from other classes: Inheritance and Composition. Inheritance allows one class to inherit from another class allowing the abstraction of attributes and behaviors for common classes. For instance dogs and cats are both mammals. Meaning that _dog_ is-a _mammal_ and _cat_ is-a _mammal_. 

With composition we can build classes by embedding classes in other classes. If you look at the relationship between a Car and an Engine, it would make sense to abstract them so that you could utilize the Engine class in numerous Car classes. However you would not say that an Engine _is-a_ Car, instead you would say that the Car class _has-a_ Engine class. This is the idea behind composition. 

* _is-a_ describes inheritance relationships 
* _has-a_ describes composition relationships 

## How to Think in Terms of Objects ~ Chapter 2
The most important principles when working with the Object Oriented paradigm include: 
* Knowing the difference between the interface and implementation 
* Thinking more abstractly 
* Giving the user the minimal interface possible

The services presented to an end user comprise the interface. The interface to a class should contain only what the user needs to know, however the most important aspect of identifying the interface is establishing the user and user case scenarios. 

The implementation details involve encapsulation and hide the details from the user. 
> A change to the implementation should not require a change to the user's code.

(_Object Oriented Thought Process_, Ch. 2)

The interface include the syntax to call a method and return a value. Both the user and implementation must conform to the interface specification. The following example paints a better picture of the association between interface and implementation. 

### Database Reader Class (Java) 
In creating a java class that is responsible for retrieving records from a database we setup a UML diagram like this: 

![Diagram](https://raw.githubusercontent.com/Jzbonner/ProgrammingConcepts/gh-pages/img-media/OOTP%20Ch.2%20Diagram%201.png)

In this case the database reader class is intended for programmers who require use of a database; in essence the interface is essentially the application-programming interface (API) that the programmer will use. When working with the above UML diagram a better way to think about the usefulness of this application is from reviewing the user case scenarios. 

![Diagram](https://raw.githubusercontent.com/Jzbonner/ProgrammingConcepts/gh-pages/img-media/OOTP%20Ch.2%20Diagram%202.png)

From observing the above user case scenarios you may set up a public class that resembles the following: 

```java 
public void open(String name) {

    /* Some application-specific processing */
    /* Call the SQLAnywhere API to open the database */ 
    /* Some more application-specific processing */ 

}
```

When designing a class, the rule of thumb is to always provide the user with as little knowledge of the inner workings of the class as possible. 

* Give the users only what they absolutely need. In effect, this means the class has as few interfaces as possible. When you start designing a class, start with a minimal interface. The design of a class is iterative, so you will soon discover that the minimal set of interfaces might not suffice. 
* Public interfaces define what the users can access. If you initially hide the entire class from the user by making the interfaces private, when programmers start using the class, you will be forced to make certain methods public - these methods thus become the public interface. 
* It is vital to design classes from a user's perspective and not from an information systems viewpoint. Too often designers of classes design the class to make it fit into a specific technological model. Even if the designer takes a user's perspective, it is still probably a technician user's perspective, and the class is designed with an eye on getting it to work from a technology standpoint and not from ease of use for the user. 
* Make sure when you are designing a class that you go over the requirements and the design with the people who will actually use it - not just developers. The class will most likely evolve and need to be updated when a prototype of the system is built. 

In identifying the user the developer must also work to understand the object behavior. Understanding how a class or program will be interacted with will require you to understand environmental constraints. Essentially the interface provides the functionality and interactive while the implementation contains the code that represents the state of an object. 

## Advanced Object-Oriented Concepts ~ Chapter 3
In Object Oriented Programming _constructors_ are methods that share the same name as the class and have no return type. Typically the compiler will recognize that the method name is identical to the class name and consider the method a constructor. Constructors are typically called in the following format: 

```java 
Cabbie myCabbie = new Cabbie();
```

The new keyword creates a new instance of the Cabbie class, thus allocating the required memory. Then the constructor itself is called, passing the arguments in the parameter list. If however a constructor is not provided for the Cabbie class will implement a default constructor; this is illustrated in the following example: 

```java 
public Cabbie() {
    super();

}
```

In the above case, Cabbie does not explicitly inherit from another class, the Object class will be the parent class. 

> The rule of thumb is that you should always provide a constructor class, even if you do not plan on doing anything inside it. You can provide a constructor with nothing in it and then add to it later. Although there is technically nothing wrong with using the default constructor provided by the compiler, it is always nice to know exactly what your code looks like

(_Object Oriented Thought Process_, Ch.3)

### Overloading Methods 
Overloading allows a programmer to use the same method name over and over, as long as the signature of the method is different each time. The signature consist of the method name and a parameter list. Thus the following methods all have different signatures: 

```java 
public void getCab(); 

// different parameter list
public void getCab(String cabbieName);

// different parameter list
public void getCab(int numberOfPassengers);

/* The above case is useful to prevent errors in syntax such as the following */

public void getCab(String cabbieName);

public int getCab(String cabbieName); 
``` 

Here is a code segment of our DatabaseReader class that illustrates how the constructor would operate where overloading methods is necessary: 

```java
public class DatabaseReader { 
    String dbName;
    int startPosition; 

    public DatabaseReader (String name) {
        dbName = name; 
        startPosition = 0;
    };

    public DatabaseReader (String name, int position)  {
        dbName = name; 
        startPosition = position; 
    };

};
```

![Diagram 1](https://raw.githubusercontent.com/Jzbonner/ProgrammingConcepts/gh-pages/img-media/OOTP%20Ch.3%20Diagram%201.png)

### Error Handling 
Constructors are used to ensure that the application is in a stable or safe state. For example, initializing an attribute to zero, when it is intended for use as a denominator in a division operation, might lead to an unstable application. 

#### Checking for Problems and Aborting the Application
You could choose to check for potential problems and abort the application when a problem is detected, the application can then display a message indicating that there is a problem. This isn't the most elegant case for the user but it does allow the system to clean up things and put itself in a more stable state, such as closing the file. 

#### Checking for Problems and Attempting to Recover
Checking for potential problems, catching the mistake, and attempting to recover is a far superior solution than simply checking for problems and aborting. Do remember that throwing an exception can be expensive in terms of overhead. Although they are a great design choice, you will still want to consider other error handling techniques, depending on your design and performance needs.  

![Diagram 2](https://raw.githubusercontent.com/Jzbonner/ProgrammingConcepts/gh-pages/img-media/OOTP%20Ch.3%20Diagram%202.png)

### Concept of Scope 
Methods represent the behaviors of an object; the state of the object is represented by attributes. There are three types of attributes: 
* Local Attributes - Local Attributes are owned by a specific method
* Object Attributes - When dealing with objects the keyword `this` directs the compiler toa ccess the variables of the object and not the local variables within the method bodies0
* Class Attributes - When dealing with class attributes the keyword `static` (in Java) signals the following attribute to be allocated to a single piece of memory. 

### Operator Overloading 
```java 
String firstName = "joe", 
String lastName = "smith";

String name = firstName + "" + lastName; 
```

> String concatenation is when two separate strings are combined to create a new, single string

(_Object Oriented Thought Process_, Ch.3)

## The Anatomy of a Class ~ Chapter 4