# Object Oriented Programming ~ A Glance. 
Notes and Information taken from the book entitled *Practical Object-Oriented Design in Ruby* by Sandi Metz. 

## Chapter 1 - Object Oriented Design 
When referencing Object Oriented applications, developers see them as consisting of two concepts: parts and how those parts interact with each other. Typically, a part is an object. Some OO applications have numerous parts and others have only a few, but these parts typically communicate by sending messages; which is how they interact with each other. Software development as a whole is defined by how you, the developer, arrange your code. 
* Managing dependencies means arranging your code so that objects or parts of the application can tolerate change. Objects that are two embedded in other parts or other objects in the application can cause immense damage to the function of the program as a whole. 
* The purpose of good software design is to enable more good design and reduce the overall cost of change. 

Utilizing code patterns or easily identifiable semantics is beneficial because it allows you to solve common problems in simple and possibly reusable ways. When working in Agile settings (a software development ideology that advocates for adaptive planning, evolutionary development, early delivery, and continuous improvement), Big Up Front Designs do not work. The goal in corporate application is to keep the average cost per feature as low as possible. 

> An application can be deemed successful if it lives a long time. Applications survive by being able to deal with change. Good software design enables this change. 

(*Practical Object-Oriented Design*, Ch.1)

## Chapter 2 - Single Purpose Classes 
Technical knowledge and organization are integral parts of the Object Oriented Programming. Typically your code should be easy to use and defined by simple yet useful classes that are primarily single use functions. Multi-use variables are useable but should not be overused. Their design makes them difficult to reuse and the overuse of explicit parts from outside the class imply entanglement from within the class.

Classes in applications should focus on and be defined by their behavior not necessarily the data. You can use encapsulation and message sending to access variables. Doing this creates clarity and promote scalability from within the project.  
* Methods, like classes, should also have a single responsibility
* Single responsibility exposes hidden qualities, removes the need for comments, and encourages reuse
* Single responsibility entities are easy to move around, are easy to isolate, and are easy to design 

Object Oriented Programming allows developers to focus on the larger aspects of the Software Development Life Cycle. Cost Analysis (current cost vs. future expense) and Time Management are just two areas where OOP can allow you to find the balance between pre-optimization and over-design. 

## Chapter 3 - Managing Dependencies
Emphasize the decoupling of your classes. You don't want your classes needing a lot of explicit information in order to function. You can create a standard for loosely coupled classes by utilizing dependency injection. 
* In software engineering, dependency injection is a technique whereby  one object supplies the dependencies of another object. A dependency is an object that can be used. An injection is the passing of a dependency to a dependent object that would use it
* If you are unable to remove a dependency, work towards isolating it. Try to reveal dependencies and lower the barrier to refactor 
* The most hazardous classes are the ones who have a lot of dependencies and are likely to have their requirements changed 

## Chapter 4 - Flexible Interfaces 
An important aspect of Object Oriented Programming  is the concentration on the messages as opposed to the classes themselves. Many Object Oriented applications in their nature are defined by the messages that flow between their objects. 

Be aware of how you are defining public interfaces. An interface is a programming structure/syntax that allows the computer to enforce certain properties on an object. Utilizing public interfaces allows the programmer to be more abstract when referencing objects. Interfaces require the programmer to create specific functions that are expected in an implementing class when it implements an Interface. 

You can limit the amount of procedural code you write by honoring the public interfaces of other classes, using necessary keywords, and employing the Law of Demeter. 
* The Law of Demeter is a design guideline for developing software in which the developer limits the amount of long message chaining. Long message chains are often times influenced by objects that you know about as a programmer. Knowing the interface will prompt you to amend message chains together to ger to distant behavior but be sure that these message chains do not become convoluted at long lengths. 

## Chapter 5 - Duck Typing 
Duck typing means that an operation does not formally specify the requirements that its operands have to meet, but just tries it out with what is given. It doesn't specifically have any particular preference between dynamic type systems or static type systems, however the main emphasis is to use coding practices that focus on what an object can do as oppose to what the object is. 

Duck typing inherently make things more abstract. Concrete code is easy to understand,but hard to extend. Abstract code is more obscure, but once understood it's easier to change and reuse. Real world software application development is dependent on a level of tolerance for abstraction and ambiguity in code. 

## Chapter 6 - Behavior Thought Inheritance
Always implement the parent-child class relationship with Object Oriented Programming. An accurately defined subclass should have the attributes of its parents class. In software engineering, the template method pattern is a behavioral design pattern that defines the program skeleton of an algorithm in an operation, deferring some steps to subclasses. This methodology lets developers redefine certain steps of an algorithm without changing the algorithm's structure. 
* In real world application the template method pattern is used to when two or more implementations of a similar algorithm exist. In the real world templates are used all the time: for architectural plans, and throughout the engineering domain 
* A template plan may be defined by which is then built on with further variations 
  * For example, a basic house plan can have many variations such as adding an extension or using a different heating system 

Subclasses can be decoupled and less error-prone if we use hook messages. Hook methods are ones containing a default implementation that may be overridden in some classes. Hook methods are intended to be overridden, concrete methods are not. 

## Chapter 7 - Share Roles Through Modules 
Modular Programming is a coding method that entails the use of routines, sub routines and functions in order to organize and execute specific sets of instructions pertaining to a given task to be done. Essentially the main idea behind this method is that if a set of instructions, that perform a specific task or calculation, will be called several times, it should be moved to a subroutine (if it does not return a value) or a function (if it does return a value) and called from the needed other parts of the program. 

One of the great advantages of the modular programming approach is that it allows developers to organize code in their own way of thinking. 

Object Oriented Programming is a coding method that entails the use of objects and their relationships in order to describe, programmatically the problem to be solved. The classic definition of OOP was based on three founding pillars: 
* Encapsulation: This term defines that both the data, and the functionality that could affect or display that data are both included under a unified name (i.e. the object name itself)
* Inheritance: This allows developers to define objects in a hierarchy. Each level of the hierarchy defines a more specific object than the parent level. Each level inherits all the properties and methods of it's parent object and at that point you define the more specific properties and methods need by the new level of object you created 
* Polymorphism: Describes a pattern in Object Oriented Programming in which classes have different functionality while sharing a common interface. Polymorphism is used to make applications more modular and extensible. Instead of conditional statements describing different courses of action, you create interchangeable objects that you select based on your needs. Example below: 

```C#
public abstract class Vehicle {
    public abstract int Wheels;
}

public class Bicycle : Vehicle {
    public override int Wheels() {
        return 2;
    }
}

public class Car : Vehicle {
    public override int Wheels() {
        return 4;
    }
}

public class Truck : Vehicle {
    public override int Wheels() {
        return 18;
    }
}

public void Main() {
    List<Vehicle> vehicles = new List<Vehicle>();

    vehicles.Add(new Bicycle());
    vehicles.Add(new Car());
    vehicles.Add(new Truck());

    foreach (Vehicle v in vehicles) {
        Console.WriteLine(
            string.Format("A {0} has {1} wheels.",
                v.GetType().Name, v.Wheels));
    }
}
```
* Interface: In programming, an interface defines what the behavior an object will have, but it will not actually specify the behavior. An interface generally defines the set of methods that an instance of a class that has that interface could respond to
* Abstraction: Through the process of abstraction, a programmer hides all but the relevant data about an object in order to reduce complexity and increase efficiency. The object referred to as an abstraction is a named entity made up of selected attributes and behavior specific to a particular usage of the originating entity. 


