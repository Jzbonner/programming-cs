## Fibonacci Number
![Diagram1](https://github.com/Jzbonner/ProgrammingConcepts/blob/master/img-media/fibonacci.png?raw=true)

### Implementation
When it comes to the implementation of a fibonacci sequence in javascript there are two main ways to do it: through looping and recursively. For every loop variation you will sum the two previous sequence values, and then push the new values to your initial variables. When the loop reaches the desired index it will return the final summed value. 

Taking this approach with a `FOR` loop would look something like this: 
```javascript 
var looping = function(n) {
    var a = 0, b = 1, f = 1; 
    for (var index = 2; i <= n; i ++) { 
        f = a + b; 
        a = b; 
        b = f; 
    } 
    return f; 
}
```

When evaluating the fibonacci sequence from a recursive standpoint, you have to design a function that is capable of calling itself and iterating through itself until the desired index has been reached. This can be done as follows: 
```javascript 
var recursive = function(n) {
    if (n <= 2) {
        return 1; 
    } else { 
        return this.recursive(n - 1) + this.recursive(n - 2); 
    }
}
```