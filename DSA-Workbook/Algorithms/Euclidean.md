## Euclidean Algorithm 
The Euclidean Algorithm is a simple method for finding the highest common factor (or Greatest Common Divisor - *GCD*) for two positive integers (i.e. the largest number that divides both of them without a remainder). **Example:** The Greatest Common Divisor of 20 and 30 is *10*. The Greateste Common Divisor of 42, 120, and 285 is *3*. 

![Diagram1](https://github.com/Jzbonner/ProgrammingConcepts/blob/master/img-media/euclidean.jpg?raw=true)

### Implementation 
The `mod` operation gives you the remainder when two positive integers are divided. It is written as follows: `A mod B = R`. Dividing A by B gives you the remainder R. This is different from the division operator which only provides you with the quotient: 

```javscript
/* the operation below provides the quotient */
14 / 2 = 7 

/* the operation below provides the remainder */
14 % 2 = 0
```

![Diagram2](https://i.imgur.com/aa8oGgP.png)

There are different ways to implement the Euclidean Algorithm in Javascript, typically this dont through the use of a while loop but the same result can also be achieved via recursion. See below for example of each:  

```javascript 
/* non recursive method */
function gcd(a, b) {
    var R; 
    while ((a % b) > 0) {
        R = a % b; 
        a = b; 
        b = R; 
    }

    return b; 
}

/* recursive method */
function gcd(a, b) {
    if (b == 0) {
        return a; 
    } else {
        return gcd(b, (a % b)); 
    }
}
```