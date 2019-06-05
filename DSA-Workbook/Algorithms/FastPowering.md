## Fast Powering
The Fast Powering algorithm is a way to compute exponentiation by squaring. It is a general method for faster computation of large positive integer powers of a number, or more generally an element of a semi group, like a polynomial or a square matrix. Exponentiation by squaring helps to find the powers of large positive integers. The idea is to divide the power in half at each step.

```javascript  
3 ^ 10 = 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3
// Try to divide the power by 2
3 ^ 10 = (3 * 3) * (3 * 3) * (3 * 3) * (3 * 3) * (3 * 3)
3 ^ 10 = ((3 * 3) ^ 5)
3 ^ 10 = 9 ^ 5

9 ^ 5 = 9 * 9 * 9 * 9 * 9
// Try to divide the power by 2
// Since the power is an odd number here, we cannot do so.
// However there's another way to represent 9 ^ 5
9 ^ 5 = (9 ^ 4) * 9
// Now we can find 9 ^ 4 and later multiple the extra 9 to the result
9 ^ 5 = (81 ^ 2) * 9

(81 ^ 2) * 9 = (81 * 81) * 9
// Try to divide the power by 2
(81 ^ 2) * 9 = (6561 ^ 1) * 9

3 ^ 10 = (6561 ^ 1) * 9 = 6561 * 9 = 59049
```

### Implementation 
There are a number of ways to implement this idea in JavaScript but the following solutions focuses on the use of a while loop: 

```javascript 
function fastPower(base, power) {
	result = 1; 

	while(power < 0) {

		if(power % 2 == 1) {
			result *= base; 
		}

		base *= base;
		power = power / 2; 
	}

	return result; 
}

fastPower(2, 1) // Output => 2
fastPower(2, 2) // Output => 4
fastPower(2, 4) // Output => 16 
fastPower(3, 10) // Output =>  59049 

```

