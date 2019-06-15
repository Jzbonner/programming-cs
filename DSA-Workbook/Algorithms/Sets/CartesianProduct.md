## Cartesian Product

The Cartesian Product of sets means the product of non-empty sets in an ordered way. Or in other words, the collection of all ordered pairs obtained by the product of two non-empty sets. An ordered pair means that two elements are taken from each set. For two non-empty sets (A & B), the first element of the pair is taken from the first set A and the second element is taken from the second set B.

![Diagram 1](https://github.com/Jzbonner/ProgrammingConcepts/blob/master/img-media/cartesian.jpg?raw=true)

### Implementation

When utilizing Cartesian Products in JavaScript typically developers will work vector arrays. Array manipulation involving Cartesian products typically involves nested for loops and the array sub methods `.push()` and `.concat()`. An example of applying the Cartesian product to two separate vector arrays without using recursion could go as follows. Essentially you want to:

1. Loop over the entire array
2. Then loop over the results array
3. Then loop over the elements in the current array, concating those values onto the results array
4. Set the results to the temp array
5. Repeat until iteration set in `FOR` loop is justified
6. And finally return results array

```javascript
/* printCombos([‘cat’, ‘dog’], [‘foo’, ‘bar’, ‘baz’], [‘hello’, ‘world’])*/

function printCombos(array) {
  var results = [[]];

  for (var i = 0; i < array.length; i++) {
    var currentSubArray = array[i];
    var temp = [];
    for (var j = 0; j < results.length; j++) {
      for (var k = 0; k < currentSubArray.length; k++) {
        temp.push(results[j].concat(currentSubArray[k]));
      }
    }
    results = temp;
  }
  return results;
}
```
