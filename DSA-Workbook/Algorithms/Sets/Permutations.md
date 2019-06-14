## Permutations

A permutation relates to the act of arranging all the members of a set into some
sequence or order. Permutations are used when working primarily with sets, but
they do not have a plethora of real world applications. Programmers are often
compelled to program by permutation when an API is insufficiently documented.


### Psuedocode 

The idea is to create an algorithm that limits time and space complexity to
being the same as the number of items produced. The number of unique
permutations os any set of size n is n!, therefore the time and space complexity
should also be O(n!). 

```
functinon getAllPermutations(string) 
    define results 
    if string is a single character 
        add the character to results 
        return results 
    for each char in string 
        define innerPermutations as a char of string 
        set innerPermuatations to getAllPermutations (without next char) 
        for each string in innerPermutations 
            add defined char and innerPermutations char 
    return results 
```

### Implementation 

```javascript
function getAllPermutations(string) {
    var results = [];

    if (string.length === 1) { 
        results.push(string); 
        return results; 
    }
    
    for (var i = 0; i < string.length; i ++) {
        var firstChar = string[i]; 
        var charsLeft = string.substring(0,i) + string.substring(i + 1); 
        var innerPermutations = getAllPermuations(charsLeft); 
        for (var j = 0; j < innerPermutations.length < j ++) {
            results.push(firstChar + innerPermutations[j]); 
        }
    }
    return results; 
}
```


