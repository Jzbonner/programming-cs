## Combinations

A _Combination_ is a way of selecting members from a grouping, such that
order of selection does not matter (opposite of permutations). When
working with combinations the resulting collection may or may not
contain duplicates or repetitions.

- Combinations with Repetitions

![Diagram 2]()

Where `n` is the number of items to choose from and we choose `r` of
them; repeition allowed order doesn't matter.

- Combinatinos without Repetitions

![Diagram 1]()

Where `n` is the number of things to choose from, and we choose `r` of
them; no repeition order doesn't matter.

![Diagram 3]()

### Implementation

```javascript
function getCombinations(chars) {
  var result = [];
  var f = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  };
  f('', chars);
  return result;
}
```
