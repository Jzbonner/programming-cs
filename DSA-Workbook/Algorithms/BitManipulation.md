## Bit Manipulation
Computers operate with binary digits (i.e. 1s and 0s). At the lower levels of computing, everything is in machine code - which is a stream of raw, usually binary data. The computer uses encodings such as UTF-8 to map saved bit combinations to characters, digits or different symbols. 

### Bitwise Operators
Bit manipulation in Javascript employs the use of *bitwise operators*, these operands are converted into signed 32 bit integers. 

**And -> &** 
Bitwise _AND_, when applied to a single binary digit returns 1 if both digits are 1. When applied to two binary numbers it will return 1 whenever the corresponding bits of both are 1. 

```javascript 
const foo = 0b10101; //21
const bar = 0b10011; //19

const result = foo & bar; //17

result.toString(2); //10001
```

**OR -> |** 
Bitwise _OR_, will return 1 whenever one of the corresponding bits of the operand is 1. 

```javascript 
const foo = 0b10101; //21
const bar = 0b10011; //19

const result = foo | bar; //23

result.toString(2); //10111
```

**XOR -> ^**
Bitwise _XOR_, also known as _exclusive or_, will return 1 whenever the two corresponding bits are different from each other. This means that any combination of zeros and ones will result in 1, except for 1 and 1, and 0 and 0. 

```javascript 
const foo = 0b10101; //21
const bar = 0b10011; //19

const result = foo ^ bar; //6 

result.toString(2); // '110'
```

**NOT -> ~** 
Bitwise _NOT_ inverts an operand, just as you'd expect it finds a 1 and turns it into a 0. This transforms positive numbers into negative numbers and vice versa. The _NOT_ operator is applied to each bit of a number individually. This means that 0111 would become 1000 (<- this is also known as one's compliment). 