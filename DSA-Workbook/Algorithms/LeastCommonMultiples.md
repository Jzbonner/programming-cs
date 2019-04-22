## Least Common Multiples
The **Least Common Multiple** of positive integers `n1, n2, n3,..., ni` is a number, which is a multiple of all given integers and is minimal to the subset. We denote the least common multiple of numbers `n1, n2, n3,..., ni` as follows: *`lcm(n1, n2, n3,..., ni)`*. 

![Diagram1](https://github.com/Jzbonner/ProgrammingConcepts/blob/master/img-media/lcm.jpeg?raw=true)

### Implementation
Calculating the Least Common Multiple is the essentially the lowest common denominator that can be used before fractions can be added, subtracted or compared. For instance consider the example below: 

![Diagram2](https://wikimedia.org/api/rest_v1/media/math/render/svg/ed5503ea5b6cffd8cb14cd2819c64cc1e37791c5)

```javascript 
function LCM(A)  // A is an integer array (e.g. [-50,25,-45,-18,90,447])
{   
    var n = A.length, a = Math.abs(A[0]);
    for (var i = 1; i < n; i++)
     { var b = Math.abs(A[i]), c = a;
       while (a && b){ a > b ? a %= b : b %= a; } 
       a = Math.abs(c*A[i])/(a+b);
     }
    return a;
}
 
/* For example:
   LCM([-50,25,-45,-18,90,447]) -> 67050
*/
```

