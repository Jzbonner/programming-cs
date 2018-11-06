## Trie 
A _Trie_ is an efficient information retrieval data structure. Every node of a Trie consists of multiple branches and each branch represents a possible character of keys. This special data structure is used to store strings that can be visualized like a graph. It consist of nodes and edges. Each node consists of at max 26 children and edges connect each parent node and its children. These 26 pointers are nothing but pointers for each of the 26 letters of the alphabet. Strings are stored in a top to bottom manner on the basis of their prefix in a trie. All prefixes of length 1 are stored at unit level 1. All prefixes of length 2 are stored at unit level 2 and so on. 

Tries are generally used on groups of strings, rather than a single string. When given multiple strings, we can solve a variety of problems based on them. 

> Example: consider the English dictionary and a single string _s_, find the prefix of the maximum length from the dictionary stings matching the _s_ string. 

### Solution 
Before processing each query of the type where we need to search the length of the longest prefix, we first need to add all the existing words into the dictionary. A Trie consist of a special node called the root node. This node doesn't have any incoming edges. It only contains 26 outgoing edges for each letter of the in the alphabet and is the root of the Trie. 

So the insertion of any string into a Trie starts from the root node. All prefixes of length one are direct children of the root node. In addition, all prefixes of length 2 become children of the nodes existing at level one. 

### Implementation 
```javascript 
// Go through all the words in the dictionary
for ( var i = 0, l = words.length; i < l; i++ ) {
    // Get all the letters that we need
    var word = words&#91;i&#93;, letters = word.split(""), cur = trie;
 
    // Loop through the letters
    for ( var j = 0; j < letters.length; j++ ) {
        var letter = letters&#91;j&#93;, pos = cur&#91; letter &#93;;
 
        // If nothing exists for this letter, create a leaf
        if ( pos == null ) {
            // If it's the end of the word, set a 0,
            // otherwise make an object so we can continue
            cur = cur&#91; letter &#93; = j === letters.length - 1 ? 0 : {};
         
        // If a final leaf already exists we need to turn it
        // into an object to continue traversing
        } else if ( pos === 0 ) {
            cur = cur&#91; letter &#93; = { $: 0 };
 
        // Otherwise there is nothing to be set, so continue on
        } else {
            cur = cur&#91; letter &#93;;
        }
    }
}&#91;/js&#93;
```

![Diagram1]()