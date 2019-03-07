## Factorial 
Whe you factorialize a number you are multiplying that number by each consecutive number minus one. For instance the Factorialization of 5 would look like: 

```
5! = 5 x 4 x 3 x 2 x 1 ==> 120 
```

### Theoretical and Real Life Use
In Javascript Factorials are typically written in either an iterative or recursive process. The iterative methods employ the use of a FOR or WHILE loop, while the recursive method can employ memoization for maximum efficiency. Let's look at the instance of using a FOR loop to factorialize a number *(num)*: 

```javascript 
function factorialize(num) {
  // If num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1)
    return 1;
  
  // We start the FOR loop with i = 4
  // We decrement i after each iteration 
  for (var i = num - 1; i >= 1; i--) {
    // We store the value of num at each iteration
    num = num * i; // or num *= i;
    /* 
                    num      var i = num - 1       num *= i         i--       i >= 1?
    1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes   
    2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
    3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes  
    4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no             
    5th iteration: 120               0                120
    End of the FOR loop 
    */
  }
  return num; //120
}
factorialize(5);
```

If for some reason you don't want to utilize the use of FOR loop, there is another iterative method that employs a WHILE loop: 

```javascript 
function factorialize(num) {
  // Step 1. Create a variable result to store num
  var result = num;
   
  // If num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1) 
    return 1; 
 
  // Step 2. Create the WHILE loop 
  while (num > 1) { 
    num--; // decrementation by 1 at each iteration
    result = result * num; // or result *= num; 
    /* 
                    num           num--      var result      result *= num         
    1st iteration:   5             4            5             20 = 5 * 4      
    2nd iteration:   4             3           20             60 = 20 * 3
    3rd iteration:   3             2           60            120 = 60 * 2
    4th iteration:   2             1          120            120 = 120 * 1
    5th iteration:   1             0          120
    End of the WHILE loop 
    */
  }
     
  // Step 3. Return the factorial of the provided integer
  return result; // 120
}
factorialize(5);
```
The results from each of the above examples can also be accomplished in a recursive format as well. In Javascript, *recursion* simply means calling a function on itself. Refer to the following for a coded example: 

```javascript 
function factorialize(num) {
  // If the number is less than 0, reject it.
  if (num < 0) 
        return -1;
    
  // If the number is 0, its factorial is 1.
  else if (num == 0) 
      return 1;
    
  // Otherwise, call the recursive procedure again
    else {
        return (num * factorialize(num - 1));
        /* 
        First Part of the recursion method
        You need to remember that you won’t have just one call, you’ll have several nested calls
        
        Each call: num === "?"        	         num * factorialize(num - 1)
        1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
        2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
        3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
        4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
        5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)
        
        Second part of the recursion method
        The method hits the if condition, it returns 1 which num will multiply itself with
        The function will exit with the total value
        
        5th call will return (5 * (5 - 1))     // num = 5 * 4
        4th call will return (20 * (4 - 1))    // num = 20 * 3
        3rd call will return (60 * (3 - 1))    // num = 60 * 2
        2nd call will return (120 * (2 - 1))   // num = 120 * 1
        1st call will return (120)             // num = 120
        
        If we sum up all the calls in one line, we have
        (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
        */
    }
}
factorialize(5);
```

Each of these methods clearly presents a mathematical advantage to repetitive computation, but Factorials also have real world application. The number *n!* is the number of ways you can arrange *n* objects. For instance if you wanted to know how many ways you could shuffle a standard deck of playing cards (i.e. n = 52) then you could simply use a factorial argument: 

```
52! = 80658175170943878571660636856403766975289505440883277824000000000000
```

As you can see Factorials can get out of hand quickly and its in the best interest of a developer to use some type of optimization to speed up the efficiency of functions or programs that employ factorial arguments. The main may of doing this is **memoization**. By configuring your function to store "factorial fragments" for later use in other computations the efficiency of a program can be greatly improved. Let's have a look:

```javascript 
var lookup = {};
function memoized(n) {
  if(n <= 1) { return 1; }

  if(lookup[n]) {
    return lookup[n];
  }

  lookup[n] = n * memoized(n - 1);
  return lookup[n];
}
```