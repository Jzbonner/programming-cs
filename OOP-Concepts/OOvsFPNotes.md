# Object Oriented vs. Functional Programming 
A reference guide for understanding how Object Oriented design can also exist within the scope of Functional Programming. This will be an in depth look at SOLID principles, functional language paradigms, and behavioral design patterns. A majority of examples in these notes will be illustrated in Java 8. 

## Lambadas: Parameterizing Code by Behavior ~ Chapter 1
Thinking in terms of functions and parameterizing by behavior rather than state is the the key in differentiating functional programming from object-oriented programming. _Lambada Expressions_ are a concise way of describing anonymous functions. Anonymous inner classes were designed to make it easier for Java programmers to represent and pass around behaviors.

An example of using an an anonymous inner class to associate behavior with a button click: 
```java 
button.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent event) {
        System.out.println("button clicked");
    }
});
``` 

An example of using a lambada expression for behavior parametrization: 

```java 
button.addActionListener(event => System.out.println("button clicked"));
```

Instead of passing an object that implements an interface, we're passing in a block of code - a function without a name, `event` is the name of a parameter, the same parameter as in the anonymous inner class example. In the previous example the the `event` variable needed to have its data type, `ActionEvent`, declared before instantiation. 

### Method References 
A __method reference__ is an abbreviated syntax that creates a lambada expression that calls a method on its parameter: 

`artist => artist.getName() .... Artist::getName` 

The standard form is `Classname::methodName`. You can also call constructors, and arrays using the same abbreviated syntax. This would be observed as: 

```java
// Constructor Example 
(name, nationality) => new Artist(name, nationality)

Artist::new 

// Array Example 
String[]::new 
```

These changes in Java reduces the boilerplate for callbacks and event handlers, and also reduces the boilerplate around __passing blocks of behaviors__. This makes parameterizing code by behavior a lot more attractive. This is key to functional programming, so key in fact that it has an associated name: __Higher-Order Functions__. 

__Higher-Order Functions__ are just functions, methods, that return other functions or take functions as a parameter. 

## SOLID Principles ~ Chapter 2 
~ Refer to Notes on Github 

## Design Patters ~ Chapter 3 
Functional Design Patterns | 
--- |

Patterns document reusable templates that solve common problems in software architecture. In a sense patterns codify what people consider to be a best-practice approach to a given problem. 