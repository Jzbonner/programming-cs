## Fisher-Yates Shuffle

The Fisher Yates Shuffle is an algorithm for generating a random permutation of a finite sequence. The algorithm effectively puts all the elements into a hat; it continually determines the next element by randomly drawing an element from the hat until no element remains. The algorithm produces and unbiased permutation; an instance where every permutation is equally likely. It takes time proportional to the number of items being shuffled and shuffles them in place.

Despite its simplicity, when developers attempt to code this from scratch it is extremely common that they make 'off by one ' errors, which results in a notably biased permutation. An implementation of how to combat this can be seen in the section below:

### Implementation

```javascript
function knuthShuffle(arr) {
  var rand, temp, i;

  for (i = arr.length - 1; i > 0; i -= 1) {
    rand = Math.floor((i + 1) * Math.random()); //get random between zero and i (inclusive)
    temp = arr[rand]; //swap i and the zero-indexed number
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

var res = {
  '1,2,3': 0,
  '1,3,2': 0,
  '2,1,3': 0,
  '2,3,1': 0,
  '3,1,2': 0,
  '3,2,1': 0,
};

for (var i = 0; i < 100000; i++) {
  res[knuthShuffle([1, 2, 3]).join(',')] += 1;
}

for (var key in res) {
  print(key + '\t' + res[key]);
}
```
