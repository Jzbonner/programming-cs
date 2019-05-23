## Pascal's Triangle 
Pascal's Triangle is a number triangle with numbers arranged in staggered rows such that: 

<a href="https://www.codecogs.com/eqnedit.php?latex=a_{nr}=\frac{n!}{r!(n-r)!}=&space;(\frac{n}{r})" target="_blank"><img src="https://latex.codecogs.com/gif.latex?a_{nr}=\frac{n!}{r!(n-r)!}=&space;(\frac{n}{r})" title="a_{nr}=\frac{n!}{r!(n-r)!}= (\frac{n}{r})" /></a>

Essentially pascal's triangle is an infinite, equilateral triangle composed of numbers. The numbers that make up Pascal's triangle follow a simple rule: each number is the sum of the two numbers above it. Looking at Pascal's triangle, you'll notice that the top number of the triangle is one. All of the numbers in each of the sides going down from the top are all ones. The numbers in the middle vary, depending upon the numbers above them. 

![Diagram1](https://github.com/Jzbonner/ProgrammingConcepts/blob/master/img-media/pascals.png?raw=true)

### Implementation 

```javascript 
function createPascalTriangle (numRows) {
  var pascalTriangle = [];
  
  for (var i = 0; i < numRows; i++) { 
    pascalTriangle[i] = new Array(i+1);
    
    for (var j = 0; j < i+1; j++) {            
      if (j === 0 || j === i) {
        pascalTriangle[i][j] = 1;
      } else {
        pascalTriangle[i][j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j];
      }
    }
  }
  
  return pascalTriangle;
}
```