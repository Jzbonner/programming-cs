## Combinations

A _Combination_ is a way of selecting members from a grouping, such that
order of selection does not matter (opposite of permutations). When
working with combinations the resulting collection may or may not
contain duplicates or repetitions.

- :beginner: Combinations with Repetitions - Where `n` is the number of items to choose from and we choose `r` of them; repeition allowed order doesn't matter.

- :beginner: Combinations without Repetitions - Where `n` is the number of things to choose from, and we choose `r` of them; no repeition order doesn't matter.

![Diagram 3](https://github.com/Jzbonner/ProgrammingConcepts/blob/master/img-media/Combinations.png?raw=true)

### Implementation

```javascript
function getCombinations(chars)
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
