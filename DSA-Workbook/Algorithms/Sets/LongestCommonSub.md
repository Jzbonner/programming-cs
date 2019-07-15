## Longest Common Subsequence

The longest subsequence is a sequence that appears in the same relative
order but is not necessarily contiguous in both strings. The longest
common subsequence algorithm is tied to the problem of finding the
longest subsequence common to all sequences in a set of sequences.

### Implementation

The longest common subsequence algorithm is typically used as a basis
for data comparison programs, version control, and bioinformatics. The
implementation of this algorithm is usually done recursively but
differs from the longest common substring solution in that sequences
are not required to occupy consecutive positions within the original
sequences.

```javascript
var longest = (xs, ys) => (xs.length > ys.length ? xs : ys);

var lcs = (xx, yy) => {
  if (!xx.length || !yy.length) {
    return '';
  }

  var x = xx[0],
    y = yy[0];
  xs = xx.slice(1);
  ys = yy.slice(1);

  return x === y ? lcs(xs, ys) : longest(lcs(xx, ys), lcs(xs, yy));
};
```
