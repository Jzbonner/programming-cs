## Power Sets

The Power Set of a set is the set of all subsets, or a collection of all
the different combination of items contained in the given set. A **set**
is a collection of any number of unique objects whose order does not
matter. A set is expressed using bracket notation and basic sets are
order agnostic. A **subset** is any combination of its members such that
it is contained inside the superset.

### Implementation

```javascript
function powerSet(str) {
  var obj = {};
  //This loop is to take out all duplicate number/letter
  for (var i = 0; i < str.length; i++) {
    obj[str[i]] = true;
  }
  //variable array will have no duplicates
  var array = Object.keys(obj);
  var result = [[]];
  for (var i = 0; i < array.length; i++) {
    //this line is crucial! It prevents us from infinite loop
    var len = result.length;
    for (var x = 0; x < len; x++) {
      result.push(result[x].concat(array[i]));
    }
  }
  return result;
}
```